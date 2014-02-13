---
layout: post
title: "Android UI Layout总结系列之篇之5大布局"
date: 2014-01-23 20:16:36 +0800
comments: true
categories: Android
description: "Android UI Layout总结系列之篇之5大布局."
keywords: Android, UI, Layout, 布局
---

# 介绍一个提高Android ListView/GridView的smoothie库

#### ***翻译 By Long Luo***

#### 原文链接：[Introducing Smoothie](http://lucasr.org/2013/01/06/introducing-smoothie/)

![smoothie](http://blogresource.qiniudn.com/2014/Android/smoothie.png)

A big part of Pattrn’s UI is about scrolling through lists of images from the cloud. So I spent a quite some time tuning it to ensure that the scrolling experience is as smooth as possible. In the past few weeks, I’ve been working on factoring out this code into a tiny library called Smoothie.

在Pattrn的UI中很重要的一


Smoothie provides a simple API to load ListView/GridView items asynchronously, off the UI thread. It does all the obvious things you’d expect—loading items as they become visible, cancelling item requests for recycled views, etc. But it does a bit more than that.

Smoothie提供了一个很简单的API来实现在非UI线程中异步加载ListView/GridView里面的项目。

Smoothie is gesture-aware: it will avoid wasting item requests after a fling gesture and enable incremental item loading while you scroll the list with finger down. Furthermore, it supports offscreen item preloading to reduce the number of placeholder-type items as you scroll. Under the hood, Smoothie uses a thread pool executor backed by blocking queue with dynamic priorities. Offscreen item requests will dynamically get higher priority as they become visible on screen while scrolling.

So, how do you use it? It’s easy:
那么，怎么使用它呢？很简单：

Add an AsyncListView or AsyncGridView to your layout. They only add one extra setter method to their respective parent classes.

首先在你的布局文件中增加一个AsyncListView或者AsyncGridView


Implement an ItemLoader with your app-specific logic for loading and displaying items. You’ll have to override four methods: getItemParams(), loadItem(), loadItemFromMemory(), and displayItem().
Build an ItemManager with your ItemLoader and set it on the target AsyncListView or AsyncGridView.
Think of Smoothie as a slim backbone for your ListView/GridView‘s asynchronous loading. You can easily hook up your own image loading/caching framework in it. For instance, one of the sample apps implements an ItemLoader backed by Android-BitmapCache with a simple fade-in animation to display images.

Besides the API docs in the code, have a look at the sample apps to get a better idea of how to use the library. Keep in mind that the API is not final yet. Feedback is very welcome! Enjoy!



2014/2/12 16:06:03 



