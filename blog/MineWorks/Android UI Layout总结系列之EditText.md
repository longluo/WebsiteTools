
# Android UI Layout总结之EditText

#### ***By Long Luo***

Edittext的属性: 
  
EditText继承关系：
View-->TextView-->EditText。 

EditText 的属性很多，这里介绍几个：            

android:layout_gravity="center_vertical" //设置控件显示的位置：默认top，这里居中显示，还有bottom         
android:hint="请输入数字！" //设置显示在空间上的提示信息         android:numeric="integer"   //设置只能输入整数，如果是小数则是：decimal        
android:singleLine="true"  //设置单行输入，一旦设置为true，则文字不会自动换行。         android:password="true"    //设置只能输入密码         
android:textColor = "#ff$200" //字体颜色         
android:textStyle="bold"   //字体，bold, italic, bolditalic         android:textSize="20dip"   //大小         
android:capitalize = "characters"   //以大写字母写         android:textAlign="center"  //EditText没有这个属性，但TextView有，居中         android:textColorHighlight="#cccccc" //被选中文字的底色，默认为蓝色         android:textColorHint="#ffff00"  //设置提示信息文字的颜色，默认为灰色         android:textScaleX="1.5"     //控制字与字之间的间距         android:typeface="monospace"  //字型，normal, sans, serif, monospace         android:background="@null"  //空间背景，这里没有，指透明         android:layout_weight="1"  //权重，控制控件之间的地位,在控制控件显示的大小时蛮有用的。         
android:textAppearance="?android:attr/textAppearanceLargeInverse"
     

 1.EditText默认不弹出软件键盘

1. 在AndroidMainfest.xml中选择哪个activity，
设置windowSoftInputMode属性为 adjustUnspecified|stateHidden

	android:windowSoftInputMode="adjustUnspecified|stateHidden"

2. 让 EditText失去焦点，使用EditText的clearFocus方法

	edit.clearFocus();

3. 强制隐藏Android输入法窗口 
例如：

	EditText edit=(EditText)findViewById(R.id.edit); 
	InputMethodManager imm = (InputMethodManager)getSystemService(Context.INPUT_METHOD_SERVICE);
	imm.hideSoftInputFromWindow(edit.getWindowToken(),0);



2.EditText始终不弹出软件键盘
例：

EditText edit=(EditText)findViewById(R.id.edit);
edit.setInputType(InputType.TYPE_NULL);
 
Button 继承自 VIEW , VIEW 有的属性它都能用 "1.0" encoding="utf-8"?>
"http://schemas.android.com/apk/res/android">
"true"> （这里的样式是当按钮被按下时的显示）
 

android:startColor="@drawable/gray"
android:endColor="@drawable/white"
android:angle="*"/>
android:width="*dp"
android:color="@drawable/teal"/>
android:radius="*dp"/>
android:left="**dp"
android:top="*dp"
android:right="**dp"
android:bottom="*dp"/>
 
 
"true">（这里的样式是移动到按钮时的显示）
 
 
android:startColor="@drawable/silver"
android:endColor="@drawable/springgreen"
android:angle="*"/>
 
android:width="*dp"
android:color="@drawable/teal"/>
 
android:radius="*dp"/>
 
android:left="**dp"
android:top="*dp"
android:right="**dp"
android:bottom="*dp"/>
 
 
（这里的样式是按钮正常时的显示）
 
android:startColor="@drawable/silver"
android:endColor="@drawable/snow"
android:angle="*"/>
 
android:width="*dp"
android:color="@drawable/teal"/>
android:radius="*dp"/>
android:left="**dp"
android:top="*dp"
android:right="**dp"
android:bottom="*dp"/>
 
 
注：
android:left="**dp"
android:top="*dp"
android:right="**dp"
android:bottom="*dp" />
这里 left 和 right 控制的是 Button 上的字体与按钮的左边缘和右边缘的距离，也就是控制按钮是长还是短；这里的 top 和 bottom 控制的是 Button 上的字体与按钮的上边缘和下边缘的距离，也就是控制按钮时高还是矮。
 
 
Shape 样式圆滑效果：
"1.0" encoding="UTF-8"?>
"http://schemas.android.com/apk/res/android">
""/>
"*dp" android:color=" " />
"*dp" android:top="*dp"
android:right="*dp" android:bottom="*dp"/>
"*dp"/>
CheckBox
RadioGroup
Spinner
TimePicker
ScrollView
ProgressBar
RatingBar
ImageView
ImageButton      android:background="#00000000"     //设置背景图空白的部分直接透视背景
ImageSwicher&Gallery
GradView
Tab
Menu


**Create Time: 2014/1/21 14:28:31** 

**Completed Time:**

