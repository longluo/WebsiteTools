---
layout: post
title: "Android UI Layout总结系列之篇之5大布局"
date: 2014-01-23 20:16:36 +0800
comments: true
categories: Android
description: "Android UI Layout总结系列之篇之5大布局."
keywords: Android, UI, Layout, 布局
---

# 提升Android ListView性能的几个技巧

#### ***翻译 Long Luo***

#### 原文链接：[Performance Tips for Android’s ListView](http://lucasr.org/2012/04/05/performance-tips-for-androids-listview/)


	译者注：
	1. 由于这是技术文章，所以有些词句使用原文，表达更准确。
	2. 由于水平有效，有些地方可能翻译的不够准确，如有不当之处，敬请批评指正；
	3. inflation这个词一直找不到特别好的中文翻译。


## ListView如何运作的？

*ListView*是设计应用于对**可扩展性和高性能要求**的地方。实际上，这就意味着*ListView*有以下
2个要求：

1. 尽可能少的创建View；
2. 只是绘制和布局在屏幕上可见的子View。

理解第一点很简单：通过布局xml文件在创建View并显示是很昂贵的操作。尽管布局文件已经编译成了二进制形式以便于更高效的语法解析，但是创建View仍然需要通过一个特殊的XML树，并实例化所有需要响应的View。

*ListView*通过回收一些不可见的Views，通常在Android源码中称为“ScrapView(即废View)”来解决这个问题。这及意味着开发者只需要简单的更新每行的内容而不需要针对每个单独的行的布局来创建View。


In order to implement 2, ListView uses the view recycler to keep adding recycled views below or above the current viewport and moving active views to a recyclable pool as they move off-screencode while scrolling. This way ListView only needs to keep enough views in memory to fill its allocated space in the layout and some additional recyclable views—even when your adapter has hundreds of items. It will fill the space with rows in different ways—from top, from bottom, etc—depending on how the viewport changedcode. The image below visually summarizes what happens when you pan a ListView down.

为了实现第二点，*ListView*通过使用View回收器来实现保持添加回收

*ListView*只需要回收Views，即使当你的Adapter有上百个items。

不管是

下面这个图很直观的展示了当你按下ListView的时候发生了什么：

![ListView](http://blogresource.qiniudn.com/2014/Android/listview_tips.png)


通过上述介绍，相比我们已经熟悉了ListView的这种机制，让我们继续前往技巧部分。正如上述介绍的，在滑动时，ListView通过动态的创建和回收很多View，实现了尽可能地让Adapter的getView()轻量。所有的技巧都是通过多种方法让getView()更快。


## View的回收

当*ListView*每次需要在屏幕上显示新的一行的时候，会从其Adapter中调用*getView()*的方法。众所周知，*getView()*方法有3个参数：行的位置， convertView以及父ViewGroup。

参数*convertView*说穿来就是之前讲述的ScrapView。当*ListView*要求更新一行的布局时，*convertView*是一个非空值。因此，当*convertView*值非空时，你仅仅需要*更新内容*即可，而不需要重新一个新行的布局。*getView()*在Adapter中一般是如下的形式：

	public View getView(int position, View convertView, ViewGroup parent) {
	    if (convertView == null) {
	        convertView = mInflater.inflate(R.layout.your_layout, null);
	    }
	
	    TextView text = (TextView) convertView.findViewById(R.id.text);
	    text.setText("Position " + position);
	
	    return convertView;
	}


## View Holder如何写的模板

通常使用一个findViewById()的View方法来实现的。这个findViewById()方法在View树的会递归的去调用来

通过使用findViewById()在静态

Finding an inner view inside an inflated layout is among the most common operations in Android. This is usually done through a View method called findViewById(). This method will recursively go through the view tree looking for a child with a given IDcode. Using findViewById() on static UI layouts is totally fine but, as you’ve seen, ListView calls the adapter’s getView() very frequently when scrolling. findViewById() might perceivably hit scrolling performance in ListViews—especially if your row layout is non-trivial.

The View Holder pattern is about reducing the number of findViewById() calls in the adapter’s getView(). In practice, the View Holder is a lightweight inner class that holds direct references to all inner views from a row. You store it as a tag in the row’s view after inflating it. This way you’ll only have to use findViewById() when you first create the layout. Here’s the previous code sample with View Holder pattern applied:

View Holder的模式就是减少在Adapter中getView()方法中调用findViewById()次数。实际上，View Holder是一个轻量级的内部类，用于直接引用到所有内部views。

	public View getView(int position, View convertView, ViewGroup parent) {
	    ViewHolder holder;
	
	    if (convertView == null) {
	        convertView = mInflater.inflate(R.layout.your_layout, null);
	
	        holder = new ViewHolder();
	        holder.text = (TextView) convertView.findViewById(R.id.text);
	
	        convertView.setTag(holder);
	    } else {
	        holder = convertView.getTag();
	    }
	
	    holder.text.setText("Position " + position);
	
	    return convertView;
	}

	private static class ViewHolder {
	    public TextView text;
	}


## 异步加载

Very often Android apps show richer content in each ListView row such as images. Using drawable resources in your adapter’s getView() is usually fine as Android caches those internallycode. But you might want to show more dynamic content—coming from local disk or internet—such as thumbnails, profile pictures, etc. In that case, you probably don’t want to load them directly in your adapter’s getView() because, well, you should never ever block UI thread with IO. Doing so means that scrolling your ListView would look anything but smooth.



What you want to do is running all per-row IO or any heavy CPU-bound routine asynchronously in a separate thread. The trick here is to do that and still comply with ListView‘s recycling behaviour. For instance, if you run an AsyncTask to load a profile picture in the adapter’s getView(), the view you’re loading the image for might be recycled for another position before the AsyncTask finishes. So, you need a mechanism to know if the view hasn’t been recycled once you’re done with the async operation.


One simple way to achieve this is to attach some piece of information to the view that identifies which row is associated with it. Then you can check if the target row for the view is still the same when the async operation finishes. There are many ways of achieving this. Here is just a simplistic sketch of one way you could do it:

一个简单的实现尝试

	public View getView(int position, View convertView,
	        ViewGroup parent) {
	    ViewHolder holder;
	
	    ...
	
	    holder.position = position;
	
	    new ThumbnailTask(position, holder)
	            .executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR, null);
	
	    return convertView;
	}

	private static class ThumbnailTask extends AsyncTask {
	    private int mPosition;
	    private ViewHolder mHolder;
	
	    public ThumbnailTask(int position, ViewHolder holder) {
	        mPosition = position;
	        mHolder = holder;
	    }
	
	    @Override
	    protected Cursor doInBackground(Void... arg0) {
	        // Download bitmap here
	    }
	
	    @Override
	    protected void onPostExecute(Bitmap bitmap) {
	        if (mHolder.position == mPosition) {
	            mHolder.thumbnail.setImageBitmap(bitmap);
	        }
	    }
	}

	private static class ViewHolder {
	    public ImageView thumbnail;
	    public int position;
	}


## 交互知识

Asynchronously loading heavier assets for each row is an important step to towards a performant ListView. But if you blindly start an asynchronous operation on every getView() call while scrolling, you’d be wasting a lot of resources as most of the results would be discarded due to rows being recycled very often.


We need to add interaction awareness to your ListView adapter so that it doesn’t trigger any asynchronous operation per row after, say, a fling gesture on the ListView—which means that the scrolling is so fast that it doesn’t make sense to even start any asynchronous operation. Once scrolling stops, or is about to stop, is when you want to start actually showing the heavy content for each row.


I won’t post a code sample for this—as it involves too much code to post here—but the classic Shelves app by Romain Guy has a pretty good example. It basically triggers the async book cover loading once the GridView stops scrolling among other things. You can also balance interaction awareness with an in-memory cache so that you show cached content even while scrolling. You got the idea.


## 以上

I strongly recommend watching Romain Guy and Adam Powell’s talk about ListView as it covers a lot of the stuff I wrote about here. Have a look at Pattrn if you want to see these tips in action. There’s nothing new about the tips in this post but I thought it would be useful to document them all in one place. Hopefully, it will be a useful reference for hackers getting started on Android development.

我强烈建议你看下Romain Guy和Adam Powell的关于ListView的分析，包括了上述的很多观点。
尽管



希望它是你在Android开发中一个很有用的参考。




#### Created Time: 2014/2/11 20:22:10 

#### ***Long Luo Feb. 11th, 2014 @Shenzhen, China.***

