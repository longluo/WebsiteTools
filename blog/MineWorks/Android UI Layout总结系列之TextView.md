
# Android UI Layout总结系列之TextView

#### ***By Long Luo***


TextView 的属性 :

android:autoLink  
//设置是否当文本为URL链接/email/电话号码/map时，文本显示为可点击的链接。可选值(none/web/email/phone/map/all)

android:autoText  
//如果设置，将自动执行输入值的拼写纠正。此处无效果，在显示输入法并输入的时候起作用

android:bufferType    //指定getText()方式取得的文本类别。选项editable 类似于StringBuilder可追加字符，也就是说getText后可调用append方法设置文本内容。spannable 则可在给定的字符区域使用样式

android:capitalize   //设置英文字母大写类型。此处无效果，需要弹出输入法才能看得到，参见EditView此属性说明

android:cursorVisible //设定光标为显示/隐藏，默认显示

android:digits          //设置允许输入哪些字符。如“1234567890.+-*/% ()”

android:drawableBottom         //在text的下方输出一个drawable，如图片。如果指定一个颜色的话会把text的背景设为该颜色，并且同时和background使用时覆盖后者

android:drawableLeft             //在text的左边输出一个drawable，如图片

android:drawablePadding         //设置text与drawable(图片)的间隔，与drawableLeft、 drawableRight、drawableTop、drawableBottom一起使用，可设置为负数，单独使用没有效果

android:drawableRight            //在text的右边输出一个drawable

android:drawableTop              //在text的正上方输出一个drawable

android:editable                   //设置是否可编辑

android:editorExtras              //设置文本的额外的输入数据

android:ellipsize                //设置当文字过长时,该控件该如何显示。有如下值设置：”start”—?省略号显示在开头;”end” ——省略号显示在结尾;”middle”—-省略号显示在中间;”marquee” ——以跑马灯的方式显示(动画横向移动)

android:freezesText               //设置保存文本的内容以及光标的位置

android:gravity                    //设置文本位置，如设置成“center”，文本将居中显示

android:hintText                 //为空时显示的文字提示信息，可通过textColorHint设置提示信息的颜色。此属性在 EditView中使用，但是这里也可以用

android:imeOptions                //附加功能，设置右下角IME动作与编辑框相关的动作，如actionDone右下角将显示一个“完成”，而不设置默认是一个回车符号。这个在EditView中再详细说明，此处无用

android:imeActionId                 //设置IME动作ID

android:imeActionLabel              //设置IME动作标签

android:includeFontPadding         //设置文本是否包含顶部和底部额外空白，默认为true

android:inputMethod                //为文本指定输入法，需要完全限定名(完整的包名)。例如：com.google.android.inputmethod.pinyin，但是这里报错找不到

android:inputType                    //设置文本的类型，用于帮助输入法显示合适的键盘类型。在EditView中再详细说明，这里无效果

android:linksClickable                //设置链接是否点击连接，即使设置了autoLink

android:marqueeRepeatLimit        //在ellipsize指定marquee的情况下，设置重复滚动的次数，当设置为 marquee_forever时表示无限次

android:ems                         //设置TextView的宽度为N个字符的宽度。这里测试为一个汉字字符宽度

android:maxEms                    //设置TextView的宽度为最长为N个字符的宽度。与ems同时使用时覆盖ems选项

android:maxLength                 //限制显示的文本长度，超出部分不显示

android:lines                        //设置文本的行数，设置两行就显示两行，即使第二行没有数据

android:maxLines                   //设置文本的最大显示行数，与width或者layout_width结合使用，超出部分自动换行，超出行数将不显示

android:minLines                    //设置文本的最小行数，与lines类似

android:lineSpacingExtra            //设置行间距

android:lineSpacingMultiplier        //设置行间距的倍数。如”$2

android:numeric                     //如果被设置，该TextView有一个数字输入法。此处无用，设置后唯一效果是TextView有点击效果，此属性在EdtiView将详细说明

android:password                    //以小点”.”显示文本 android:phoneNumber设置为电话号码的输入方式

android:privateImeOptions          //设置输入法选项，此处无用，在EditText将进一步讨论

android:scrollHorizontally            //设置文本超出TextView的宽度的情况下，是否出现横拉条

android:selectAllOnFocus              //如果文本是可选择的，让他获取焦点而不是将光标移动为文本的开始位置或者末尾位置。TextView中设置后无效果
android:shadowColor                //指定文本阴影的颜色，需要与shadowRadius一起使用
android:shadowDx                   //设置阴影横向坐标开始位置
android:shadowDy                   //设置阴影纵向坐标开始位置
android:shadowRadius                //设置阴影的半径。设置为0.1就变成字体的颜色了，一般设置为3.0的效果比较好
android:singleLine                     //设置单行显示。如果和layout_width一起使用，当文本不能全部显示时，后面用“…”来表示。如android:text="test_ singleLine " android:singleLine="true" android:layout_width="20dp"将只显示“t…”。如果不设置singleLine或者设置为false，文本将自动换行 android:text设置显示文本. android:textAppearance设置文字外观。如 “?android:attr/textAppearanceLargeInverse”这里引用的是系统自带的一个外观，?表示系统是否有这种外观，否则使用默认的外观。可设置的值如下：textAppearanceButton/textAppearanceInverse /textAppearanceLarge/textAppearanceLargeInverse/textAppearanceMedium/textAppearanceMediumInverse/textAppearanceSmall/textAppearanceSmallInverse
android:textColor                    //设置文本颜色
android:textColorHighlight           //被选中文字的底色，默认为蓝色
android:textColorHint                //设置提示信息文字的颜色，默认为灰色。与hint一起使用。
android:textColorLink                //文字链接的颜色.
android:textScaleX                  //设置文字之间间隔，默认为$2。
android:textSize                      //设置文字大小，推荐度量单位”sp”，如”15sp”
android:textStyle                     //设置字形[bold(粗体) 0, italic(斜体) 1, bolditalic(又粗又斜) 2] 可以设置一个或多个，用“|”隔开
android:typeface                     //设置文本字体，必须是以下常量值之一：normal 0, sans 1, serif 2, monospace(等宽字体) 3]
android:height                       //设置文本区域的高度，支持度量单位：px(像素)/dp/sp/in/mm(毫米)
android:maxHeight                  //设置文本区域的最大高度
android:minHeight                   //设置文本区域的最小高度
android:width                        //设置文本区域的宽度，支持度量单位：px(像素)/dp/sp/in/mm(毫米)，与layout_width 的区别看这里
android:maxWidth                   //设置文本区域的最大宽度
android:minWidth                   //设置文本区域的最小宽度 android布局属性详解 RelativeLayout用到的一些重要的属性：第一类:属性值为true或false
android:layout_centerHrizontal         //水平居中
android:layout_centerVertical           //垂直居中
android:layout_centerInparent          //相对于父元素完全居中
android:layout_alignParentBottom       //贴紧父元素的下边缘
android:layout_alignParentLeft          //贴紧父元素的左边缘
android:layout_alignParentRight        //贴紧父元素的右边缘
android:layout_alignParentTop          //贴紧父元素的上边缘
android:layout_alignWithParentIfMissing      //如果对应的兄弟元素找不到的话就以父元素做参照物 第二类：属性值必须为id的引用名“@id/id-name”
android:layout_below                    //在某元素的下方
android:layout_above                    //在某元素的的上方
android:layout_toLeftOf                  //在某元素的左边
android:layout_toRightOf                //在某元素的右边
android:layout_alignTop                 //本元素的上边缘和某元素的的上边缘对齐
android:layout_alignLeft                //本元素的左边缘和某元素的的左边缘对齐
android:layout_alignBottom            //本元素的下边缘和某元素的的下边缘对齐
android:layout_alignRight              //本元素的右边缘和某元素的的右边缘对齐 第三类：属性值为具体的像素值，如30dip，40px

android:layout_marginBottom         //离某元素底边缘的距离
android:layout_marginLeft             //离某元素左边缘的距离
android:layout_marginRight            //离某元素右边缘的距离
android:layout_marginTop              //离某元素上边缘的距离 EditText的android:hint 设置EditText为空时输入框内的提示信息　
android:gravity                         //属性是对该view 内容的限定．比如一个button 上面的text. 你可以设置该text 在view的靠左，靠右等位置．以button为例，
android:gravity="right"则button上面的文字靠右 android:layout_gravity android:layout_gravity是用来设置该view相对与起父view 的位置．比如一个button 在linearlayout里，你想把该button放在靠左、靠右等位置就可以通过该属性设置．以button为例，android:layout_gravity="right"则button靠右 android:layout_alignParentRight 使当前控件的右端和父控件的右端对齐。这里属性值只能为true或false，默认false。 android:scaleType： android:scaleType是控制图片如何resized/moved来匹对ImageView的size。 ImageView.ScaleType / android:scaleType值的意义区别： CENTER /center 按图片的原来size居中显示，当图片长/宽超过View的长/宽，则截取图片的居中部分显示 CENTER_CROP / centerCrop 按比例扩大图片的size居中显示，使得图片长(宽)等于或大于View的长(宽) CENTER_INSIDE / centerInside 将图片的内容完整居中显示，通过按比例缩小或原来的size使得图片长/宽等于或小于View的长/宽 FIT_CENTER / fitCenter 把图片按比例扩大/缩小到View的宽度，居中显示 FIT_END / fitEnd 把图片按比例扩大/缩小到View的宽度，显示在View的下部分位置 FIT_START / fitStart 把图片按比例扩大/缩小到View的宽度，显示在View的上部分位置 FIT_XY / fitXY 把图片不按比例扩大/缩小到View的大小显示 MATRIX / matrix 用矩阵来绘制，动态缩小放大图片来显示。 ** 要注意一点，Drawable文件夹里面的图片命名是不能大写的



2014/1/21 14:27:56 

