

通用应用	初级	JAVA	

1、使用JAVA语言完成一般JAVA应用开发

1. android应用程序apk包的组成
2. android应用开发与调试	
3. 完成android应用开发环境的熟练使用
2、完成编译环境配置及常用 编译命令
3、完成新增模块android.mk文件书写
4、了解android源码及out目录结构
5、掌握应用的断点调试"

		android基础组件	"1、掌握activity组件的使用，包括activity生命周期、stack的意义、如何控制activity
2、掌握service组件的使用，包括service的作用、创建service、aidl
3、掌握provide组件的使用
4、掌握broadcast组件的使用
5、掌握intent组件的意义、作用和使用"
		The Manifest File	"1、了解Manifest file的组成结构
2、Declaring components、Declaring component capabilities、Declaring application requirements"
		Application Resources	"1、了解应用程序资源的类型
2、熟练添加和使用资源"
		SDK文档	1、根据需要查看google sdk文档guide篇和api demo源码
	中级	JAVA	"1、java多线程编程、内存管理、数据结构
2、java泛型和容器等各种组件的运用"
		android应用开发与调试	"1、熟练使用android的Log的接口，比如打印调用堆栈等
2、熟练使用ddms、logcat、adb等工具调试
3、能够快速分析log文件，提取有效信息"
	中级	IPC	"1、了解binder机制的地位、作用和意义
2、会用aidl工具创建binder机制java层的标准调用接口
3、使用native层模板代码创建binder机制调用代码
4、写一个demo，创建java和native层的service和client端"
通用系统	初级	C/C++	"1、熟练掌握c/c++语法
2、熟练使用C/C++完成一般的linux应用开发"
		调试手段	"1、使用ddms工具和logcat工具查看系统log日志
2、使用android提供的api在系统中增加log日志代码（包括java和c++）
3、熟悉常用的adb命令，linux命令
4、熟悉LOG分类及生成的地方，能手动导出。"
		内存管理	"1、了解android的内存管理机制 (学习ActiityManagerService对内存的管理逻辑)
2、了解java虚拟机的内存管理机制（学习java虚拟机的通用管理机制）
3、知道linux的内存管理机制（学习linux如何管理内存）"
	中级	C/C++	"1. 熟练掌握C/C++语言高级用法
2. 熟悉数据结构知识与应用"
		jni	"1、了解jni的作用和意义
2、阅读jni文档来学习jni的语法
3、熟练使用jni完成so库的开发与使用"
		调试手段	"1、使用gdb调试linux程序
2、熟悉linux的proc文件系统结构和编程
3、掌握adb的常用命令"
		内存管理	"1、使用mat工具查看分析虚拟机使用内存的情况
2、熟练掌握linux内存管理接口的使用
3、掌握一般内存泄露的检测方法"
		ANR	"1、了解ANR的分类，及产生条件
2、通过分析trace log定位ANR的产生原因"
	高级	C/C++	1、掌握常用的设计模式
		调试手段	1、具有研究引入其它调试工具和方法的能力
		内存管理	"1、掌握Linux内存管理机制
2、掌握Dalvik VM内存管理机制"
通用配置	初级	svn工具	1、熟练使用svn常用命令，能够独立完成代码的上传、下载与提交
		rtc工具	"1、了解rtc代码管理原理，能创建组件，流
2、了解rtc项目，流以及组件的权限控制，能独立配置一个项目的团队结构
3、了解rtc构建原理，能独立完成构建定义的配置"
	中级	svn工具	"1、掌握svn server的一般配置，能够完成主基线以及分支基线的创建 
2、了解svn源代码管理原理，能处理一般的svn使用异常"
		rtc工具	"1、了解RTC构建原理，能独立部署构建方案
2、熟悉RTC系统scm命令，能使用scm命令完成代码的提交下载以及log提交
3、熟悉RTC敏捷相关配置，能独立配置项目的工作项权限，并能解决一般的权限问题"
	高级	svn工具	"1、了解SVN HOOK机制，能够为SVN开发HOOK脚本
2、能够独立通过源码定制SVN部分功能
3、能够独立部署SVN服务器
4、能够将其它工具与SVN关联，现实特殊需求"
		rtc工具	1、能够独立部署RTC服务器
公共控件	中级	Android原生控件	"1、了解组合模式、并结合源码来了解基本控件View、ViewGroup的作用和特性，了解这些基础控件的API接口。
2、从组合模式的角度，掌握五大Layout组件的作用和特性，具有自定义Layout控件的能力。
3、了解适配器模式，并结合ListView源码，深入理解架构与原理。
4、了解ListView的item回收机制，掌握adapterView的优化原理。
5、从继承的角度，掌握控件TextView的作用和特性，熟练使用TextView的API接口。
6、了解策略模式。结合TextView和Layout组件的源码，深入理解设计原理。"
		Oppo自定义控件	"1、熟练使用oppo自定义控件。结合oppo demo来了解各个oppo控件的作用和使用方式。
2、具有自定义oppo控件的能力。学习oppo控件源码，自定义一个oppo控件。"
		View的工作原理	"1、了解View的绘制流程，能够解决View在绘制过程遇到的基本问题。学习View.java中的onMeasure()、onLayout()、onDraw()等重要方法和ViewRootImpl.java、View.java、ViewGroup.java等相关类。
2、掌握View中的消息处理流程（包括按键消息和触摸事件消息）。从Window接受到消息到最后消耗掉该消息的整个过程，并能解决应用派发过程中各种按键和触摸消息引起的基本问题。学习包括PhoneWindowManager.java、ViewRootImpl.java、View.java、ViewGroup.java、Activity.java等相关类。
3、了解View和Activity及Window之间的关系，并能解决View和window及Activity之间调用引起的基本问题。学习包括PhoneWindow.java、Activity.java、View.java等相关类。
4、熟练使用四种基本的动画、帧动画和布局动画，并能解决开发过程中遇到的关于动画的基本问题。"
		UI界面的相关优化	"1、熟练使用Hierarchyviewer工具，能通过Hierarchyviewer的协助来调整并简化布局达到要求。sdk文档中Dev Guide里面的 Debugging >Debugging and Profiling User Interfaces中有介绍。
2、熟悉各种Layout的优缺点，能够将Linearlayout转换为Relativelayout，使用ViewStub等方法来优化布局。学习LinearLayout.java、FrameLayout。java、RelativityLayout、AbsoluteLayout.java、ViewStub.java等相关类。
3、理解Adapter与Listview之间的关系，能够采用ViewHolder对象来优化listview的加载效率。"
	高级	Android基本控件	"1、掌握所有原生控件的实现方法和原理，解决应用开发过程中使用原生控件遇到的各种疑难问题。
2、掌握Fragment组件的实现原理，解决应用开发过程中使用Fragment遇到的各种疑难问题。
3、掌握Preference组件的实现原理，解决应用开发过程中使用Preference遇到的各种疑难问题。
4、具有保证原生功能不变的情况下，扩展原生控件的功能的能力。"
		Oppo自定义控件	"1、掌握所有的Oppo 2D控件的实现方法和原理，解决应用开发过程中遇到的各种疑难问题。
2、能够根据需求，扩展OppoPreference和OppoPreferenceActivity的功能。
3、能够根据需求自己开发Oppo控件，并写Demo供参考。"
		View的工作原理	"1、掌握View的详细绘制流程及流程中的各个部分的作用，解决开发过程中View绘制过程中遇到的各种疑难问题。
2、掌握View的消息处理机制中的各个细节，解决开发过程中处理View的按键和触摸事件遇到的疑难问题。
3、熟练掌握View和Activity及Window之间的关系，解决View和window及Activity之间调用引起的疑难问题。
4、掌握View的动画原理，解决开发过程中遇到的关于动画的疑难问题。
5、熟悉Activity从启动到所有view元素绘制完成的整个流程，解决开发过程中所有的UI界面显示不正常的问题。
6、熟悉各种界面切换过程中Activity和window的状态变化及各个view的状态变化，解决界面切换过程中引起的各种问题。"
		UI界面的相关优化	"1、具有对各种应用的复杂布局进行优化工作的能力。提高加载View的效率。
2、能够对应用运行过程中的界面卡，动画不流畅，切换慢等各种问题进行优化，提升界面交互的流畅性。
3、能够对加载大量数据并且结构复杂的列表滚动不流畅的问题进行优化，提升列表滑动效果的流畅性。"
	专家	Android基本控件	"1、熟悉google公共控件的架构。
2、能够优化android原生控件。"
		Oppo自定义控件	1、能够从android升级和功能扩展的角度，设计高质量的oppo控件。
		View的工作原理	1、对View的刷新流程、按键派发流程等能提出高水平的改进方案。
		UI界面的相关优化	"1、具有挖掘和分析系统UI性能的瓶颈的能力
2、能够提出系统性的优化方案
3、能够为新应用的开发提供全套UI设计思路"
系统资源	中级	资源基础知识	"1、了解资源的种类以及资源目录结构。通过对（ frameworks/base/core/res）目录下各个文件进行分析，能够熟练完成所有类型资源的添加和删除。
2、熟练使用各种系统资源。使用资源在代码中和在XML文件中的调用方式。"
		资源编译	"1、掌握资源public的机制，能够独立完成public文件的维护。能够对该文件进行添加，删除，排序等工作
2、具有解决系统资源错乱问题的能力。可以通过比对生成R文件完成问题原因的查询。
3、熟悉资源在编译之后的生成包位置及相关资源在生成包中的查询方法（out/target/cpm/obj/apps）。可以对反编译之后的文件中的资源进行资源跟踪，可以确认一个资源是否成功打包进app。"
		必备技能	"1、熟练使用9.png和draw9patch工具。了解其绘制方法，根据需求手动完成任何9.png图片的信息修改。
2、熟悉资源中所有单位及换算关系(主要是sp.px&dip)。
3、熟悉图片及布局等资源在不同分辨率下的目录结构
4、掌握控件中的资源加载方式，熟悉其构造器中资源调用。
5、熟练掌握theme的定制原理，能独立完成系统UI的定制。
6、能手动完成selector等资源文件，了解selector中各个状态。"
		布局的使用	"1、了解四大布局的优缺点，掌握其使用方式，常用布局技巧，熟练使用hierarchyviewer工具。
2、掌握每种布局下的各个专有属性的使用。能够通过源码查询相关属性，掌握attrs.xml内各个控件属性的定义方法。"
		资源加载	1、熟悉一些资源加载的关键流程，能够解决常见的资源加载异常问题 。解决NotFoundException这种资源异常。
	高级	资源基础知识	1、掌握自定义attr和自定义style。具有添加控件属性的能力。
		资源编译	"1、熟悉aapt工具。完成针对public资源排序的相关修改    frameworks\base\tools\aapt
2、掌握aapt工具的打包机制，了解其打包流程及资源生成文件的写入逻辑。
3、能够对资源编译过程进行优化，减少编译时间。"
		必备技能	"1、能够完成新增系统资源包的编译配置及相关系统文件的修改，能够新增系统资源包。
2、独立完成资源架构的修改。对资源读取进行优化，协助应用完成优化。"
		布局的使用	1、掌握Layout高级技巧。能够对布局进行优化，掌握relativelayout以及viewstub，include等布局手段。
		资源加载	"1、熟悉资源加载的详细流程。从文件读取到最终系统完成资源的调入。
2、熟悉资源目录的路径读取流程。ResTable.h文件。"
	专家	资源基础知识	1、设计资源和属性添加的易用、高效的方案。
		资源编译	1、设计更高效的资源二进制文件和打包格式。
		必备技能	N/A
		布局的使用	1.、能够为应用程序的布局设计给出最佳方案。
		资源加载	"1、独立完成主题切换机制的设计。
2、优化资源加载流程，减少资源加载时间。"
WindowManager	中级	窗口的添加和删除	"1、熟悉窗口的定义（学习WindowState.java与surface相关知识）。
2、熟悉窗口的基本布局与尺寸计算，及窗口的分类（如系统窗口，应用窗口等）。"
		系统消息收集和分发	1、熟悉系统消息的分类，及基本的分发流程。熟悉WMS源码中调用消息派发的位置与方法（掌握WidowManagerService.java与PhoneWindowManager.java的关系）。
		窗口焦点与应用的管理	"1、熟悉窗口焦点相关知识及焦点变化的基本场景。
2、熟悉WMS与AMS交互场景。
3、熟悉基本的应用启动与窗口创建流程（AMS基础知识）。"
		输入法窗口的管理	1、掌握InputManager与WMS的交互。
		旋转屏相关	1、熟悉configuration改变与屏幕旋转的变化流程（AMS，WMS，PWM）。
	高级	窗口的添加和删除	"1、掌握窗口创建和删除的时机与过程。
2、熟悉WMS的核心函数。assignlayerslocked（）和addwindowtolistinorderlocked（）的执行时机与作用（WindowManagerService.java函数）。
3、掌握WMS几个核心类的作用（学习WindowState.java,WindowToken.java,Session.java）。"
		系统消息收集和分发	1、熟悉系统消息在WMS中的处理流程（按power键video锁定的处理）                                                                                                                                             2、掌握WMS中inputmonitor类接口的使用。
		窗口焦点与应用的管理	"1、熟悉核心函数layouwindowlw（）的执行时机与窗口调整的基本流程。
2、熟悉不同应用切换时，AMS的基本流程。
3、熟悉焦点计算与分配的基本流程。
4、掌握核心函数performlayoutandplacesurfaceslockedinner(  )的执行过程(WindowManagerService.java代码)"
		输入法窗口的管理	"1、熟悉常用的输入法窗口调用接口，以及各自的作用。
2、熟悉输入法窗口在应用窗口切换与焦点变换时的处理流程，及对窗口布局的影响。
3、能够解决输入法引起的各类窗口问题。"
		旋转屏相关	"1、熟悉窗口动画加载与控制的基本流程。
2、掌握旋转屏动画开关实现的步骤与原理。"
	专家	窗口的添加和删除	1、定制多任务多窗口的窗口管理系统。
		系统消息收集和分发	N/A
		窗口焦点与应用的管理	N/A
		输入法窗口的管理	N/A
		旋转屏相关	N/A
CTS	中级	CTS测试理论	"1、熟悉Android developer的CTS相关文档。熟悉CTS测试用例的类型，测试范围，Android生态系统和CTS测试的目的意义。
2、熟悉CDD文档。了解CDD文档内容及意义。"
		CTS测试方法	"1、熟悉CTS和CTS Verifier测试步骤和测试命令
2、熟悉CTS测试流程，能够分析测试报告，熟悉报告中各项信息的涵义。"
		Fail项分析解决	"1、能够解决测试报告中的不符合规范的Build info
2、能够分析fail项所在模块，解决一般问题"
		CTS源码和测试原理	"1、熟悉Build info部分的CTS源码(DeviceInfoInstrument.java)
2、熟悉CTS测试原理
3、编译CTS源码（cts/目录下）"
	高级	CTS测试理论	N/A
		CTS测试方法	N/A
		Fail项分析解决	1、分析和解决涉及到多模块的深路径CTS问题
		CTS源码和测试原理	1、熟悉主要模块的CTS源码和测试目的
	专家	CTS测试理论	N/A
		CTS测试方法	N/A
		Fail项分析解决	N/A
		CTS源码和测试原理	1、熟悉CTS的架构，能够优化CTS测试流程。
输入法	中级	输入法服务	"1、熟悉Android原生输入法LatinIME和PinyinIME的源码(/packages/inputmethods/LatinIME, /packages/inputmethods/PinyinIME)，熟悉Android SDK中的Softkeyboard例子。
2、掌握字库引擎、手写引擎、语音引擎的使用方法。
3、掌握输入法的实现原理。通过熟悉输入法服务的生命周期，编写出一个简单的输入法。"
		输入法框架	"1、熟悉输入法框架中的三个核心类：InputMethodService、InputMethodManager、InputMethodManagerService；掌握它们各自的作用及之间的协作关系；能够分析、定位和解决应用与输入法服务交互时遇到的基本问题
2、熟悉输入法框架中的三个核心进程：应用进程、输入法服务进程和输入法管理服务进程；熟悉三个进程之间的通信模型；分析和解决输入法服务相关的服务重启、死锁等基本问题。"
		TextView相关	"1、熟悉TextView控件与输入法服务之间的通信过程。掌握控件与输入法服务之间的交互过程(TextView.java)。
2、掌握TextView的属性设置与IME Options、EditorInfo(EditorInfo.java)。"
		输入法窗口	"1、熟练使用SoftInputMode。能够分析SoftInputMode处理输入法软键盘的行为，熟悉应用窗口与输入法窗口的交互方式。
2、掌握窗口属性Focusable和Touchable对输入法窗口层级的关系。
3、掌握输入法窗口的layout定义。全屏模式下的输入法窗口layout，根据体验需求自定义布局。"
		输入法设置	"1、熟悉输入法设置模块。编写输入法设置模块，并内嵌到设置模块中。
2、掌握使用EditToolbar和通知栏图标切换输入法的流程。"
	高级	输入法服务	1。能够扩展输入法服务。
		输入法框架	1、熟悉输入法框架，能够分析和诊断三方输入法问题。
		TextView相关	N/A
		输入法窗口	"1、熟悉ExtractEditText类的设计原理(ExtractEditText.java)。
2、熟悉输入法窗口弹出和隐藏的流程，及其对应用窗口的关系。"
		输入法设置	N/A
	专家	输入法服务	N/A
		输入法框架	1、熟悉输入法框架的设计原理，能够分析输入法框架的线程模型缺陷，改进输入法框架。
		TextView相关	N/A
		输入法窗口	N/A
		输入法设置	N/A
SurfaceFlinger	中级	Layer相关	"1、掌握Layer的分类和创建过程(LayerXXX.cpp)，能够独立创建、修改、销毁各种类型的图层。
2、熟悉layer的内部属性（position,matrix,ZOrder等），外部接口（LayerBase.cpp,LayerBaseClient.cpp），能够借助外部调用或dump获取并分析layer的数据信息。"
		SurfaceFlinger情景架构	"1、熟悉载入Activity、View树的构建、WMS窗口布局初始化到创建Surface的整体流程(ActivityThread.java,Activity.java,ViewRootImpl.java,PhoneWindow.java等)，能够画出流程涉及的类图，时序图，透析关键点，写出整体流程的描述文档。
2、掌握Client端和Server端，Server端和WMS交互机制，熟悉交互接口执行的具体操作(SurfaceComposerClient.cpp,WindowManagerService.java,WindowState.java)。
3、了解SurfaceFlinger主线程运作流程(SurfaceFlinger.cpp,android_surface_view.cpp)。熟悉Loop内的关键函数的处理机制，能够给出详细流程图。"
		FrameBuffer	"1、熟悉FB相关的关键类和结构体信息（Displayhardware.cpp,FramebufferNativeWindow.cpp,framebuffer_device_t结构等），能够从bug中提取有效信息并分析，找出错误点。
2、熟悉FrameBuffer与kernel层数据交互机制(FrameBuffer.cpp,FramebufferNative.cpp等)。包括对用户设备文件的操作(dev/graphics/fb0)，内存的映射和管理(Mapper.cpp,Gralloc.cpp等)，输出解析文档。"
		SurfaceView	1、熟悉SurfaceView窗口update原理(SurfaceView.java)，能够解决Surface无效、Surface Destroy等异常引起的bug。
	高级	Layer相关	1、熟悉Canvas相关类，掌握View绘制底层实现(Canvas.java)，输出分析文档。
		SurfaceFlinger情景架构	"1、熟悉屏幕显示区域叠加计算原理(SurfaceFlinger.cpp,android_surface_view.cpp)，并输出分析文档。
2、掌握横竖屏画面切换底层实现原理(SurfaceFlinger.cpp），能输出屏幕切换的流程图。"
		FrameBuffer	1、熟悉HAL层接口信息和调用流程(Gralloc.cpp,Allocator.cpp等)，能够从硬件适配层存储的数据中分析具体含义。
		SurfaceView	1、熟悉SurfaceView的设计原理。
	专家	Layer相关	N/A
		SurfaceFlinger情景架构	"1、优化屏幕显示区域叠加计算算法，提高机器性能
2、扩展SF多屏幕支持"
		FrameBuffer	1、针对FrameBuffer设计架构，提出可行的优化方案。
		SurfaceView	1、能够找出SurfaceView的设计缺陷，并优化
字体	中级	字体移植	"1、能够移植字体引擎和字体库。保证字体功能正常使用.
2、能够解决字体库相关的一般问题。"
		字体切换流程	"1、熟悉字体切换的流程。
2、熟悉字体刷新的流程。
3、掌握应用程序执行字体切换的属性值的用法。"
		字体功能的定制和修改	N/A
	高级	字体移植	N/A
		字体切换流程	1、熟悉字体切换相关的核心类(Typeface.java,Activity.java，Application.java，Configuration.java)。
		字体功能的定制和修改	N/A
	专家	字体移植	N/A
		字体切换流程	1、优化字体切换速度和字体的刷新速度
		字体功能的定制和修改	"1、能够重新设计和定制字体功能。
2、能够制作新字体。"
全局搜索	中级	全局搜索	"1、熟悉搜索源的配置流程（学习Searchable.xml） 
2、熟悉搜索流程。掌握搜索流程中的一些关键节点（学习SearchActivity.java,SearchActivity.java）。"
	高级	全局搜索	"1、掌握搜索源的创建过程，熟悉应用搜索结果的获取流程（学习Corpora.java ,SearchAbleSource.java）。
2、掌握应用搜索配置的读取机制，及系统对搜索源的初始化流程（学习SearchManager.java,SearchableInfo.java）。"
	专家	全局搜索	1、熟悉手机搜索引擎的架构，能够找出缺陷并优化。
主题	中级	主题编辑器	1、掌握主题编辑器的使用，能够编辑主题的内容。
		主题切换	"1、掌握主题切换原理，能够画出主题切换时序图，并能够剖析主题切换过程的关键点，给出主题切换过程的分析文档。
2、熟悉主题切换核心类（AssetManager,OppoThemeManager，ActivityManagerService相关）。能够解决主题相关的一般问题。
3、熟悉主题切换流程(ActivityManagerService.java)和原理。
4、熟悉主题涵盖的资源范畴，能够快速定位主题范围中的相应资源。"
		个性化设置	1、掌握个性化设置对在线下载主题图标的过滤机制，能够独立修改个性化设置的在线主题过滤代码，能够适配不同风格主题的不同机型。
		图形	"1、掌握点9图的原理，熟悉如何编译并保存nptc块，了解如何读取和使用相关信息。
2、能够使用工具独立创建、修改和编辑点9图。"
		桌面相关	1、熟悉桌面图标的分类、缓存机制与加载流程(IconCache.java,Resources.java)，熟悉图片加载自上而下的调用流程。
	高级	主题编辑器	1、精通主题编辑器的使用，能够独立创建自定义主题，并熟悉主题各文件夹下不同类型文件的适配用途。
		主题切换	"1、掌握主题切换原理。能够扩展和改进主题机制。
2、熟悉主题相关核心类（AssetManager,OppoThemeManager，ActivityManagerService）。能够解决主题切换的相关问题。
3、熟悉主题切换的设计原理。
4、降低主题切换与FrameWork的耦合度，并提升主题切换效果。"
		个性化设置	1、熟悉个性化设置流程，能独立解决个性化设置的相关问题。
		图形	1、掌握点9图数据存储机理，拉伸区域计算原理，系统对点9图的解析流程，能够找出因点9图引起编译错误的具体原因。
		桌面相关	1、精通桌面图标的分类、缓存机制与加载(IconCache.java,Resources.java)，能够解决因桌面图标缓存、大小位置等参数、图标的级别和分类等引起的主题问题。
	专家	主题编辑器	N/A
		主题切换	1、设计跨版本的通用主题切换机制
		个性化设置	1、能够增强当前主题机制的可扩展性，降低耦合度。能够通过不修改源码的方式实现主题扩展。
		图形	1、能够找出点9图的缺陷，并改进。
		桌面相关	N/A
Sdk	中级	基于SDK的应用开发与调试	"1、掌握谷歌标准SDK的特性，熟悉SDK开发的帮助文档。
2、熟悉谷歌标准SDK的环境搭建。
3、熟悉基于Eclipse+SDK的应用开发过程。
4、掌握谷歌标准SDK的API，能使用谷歌标准SDK开发基本应用。
5、熟练使用SDK的模拟器辅助应用开发。
6、熟悉用Log来调试程序的过程，熟悉DDMS工具的使用。
7、熟悉查看堆栈信息、断点调试的方法。"
		SDK的定制	1、熟悉从源代码编译SDK的方法与过程。
	高级	基于SDK的应用开发与调试	"1、掌握谷歌发布SDK新支持特性的原理，代码逻辑。
2、能够独立编写自动化测试用例。能够编写相关测试类，测试类对新增接口进行白盒测试，测试用例覆盖全，特别是边界、大数据、同步等情况的测试。
3、 熟悉ant编译打包apk的原理和过程（不借助eclipse等IDE）。"
		SDK的定制	1、定制oppo sdk，兼顾android系统升级和深度定制的需求。
	专家	SDK相关	1、熟悉SDK的架构原理，提出改进意见。
OpenGL ES/3D控件	中级	OpenGL ES	"1、熟悉OpenGL ES的API，熟悉OpenGL的编写流程和规范。
2、熟悉OpenGL ES投影及矩阵变换操作。
3、熟悉GLSurfaceView的使用方法，掌握Renderer类中方法的实现。"
		3D控件	"1、掌握常用的3D模型文件格式的数据结构(常用的格式有md2,ms3d,obj等)。
2、能够编码解析模型文件中的数据。
3、维护现有项目中3D控件的代码，并在现有控件基础上扩展新功能。"
		RenderScript	"1、熟悉rs提供的API。
2、熟悉RenderScript架构。包括Renderscript Runtime层和java反射层。"
		着色语言（shader language）	N/A
	高级	OpenGL ES	"1、掌握android中View绘制硬件加速的实现流程。
2、能够分析绘制过程中硬件加速导致花屏或GPU内存占用过高引起的卡顿问题。"
		3D控件	"1、能够独立完成3D控件的开发。
2、能够对3D控件进行优化。重点针对内存占用和渲染效率方面，提高控件使用的流畅性。"
		RenderScript	"1、能够构建数学模型来定义rs脚本，来实现复杂的动画效果。
2、能够扩展自定义rs api接口。"
		"着色语言（shader 
language）"	"1、掌握着色语言的基本知识。
2、熟悉android中着色语言与OpenGL ES层java代码之间的数据传递流程。"
	专家	OpenGL ES	"1、能够使用OpenGL设计3D引擎。包括常用3D模型的解析，物体碰撞检测，粒子系统等高级功能。
2、熟悉现有3D引擎架构，并改进和优化现有3D引擎框架。"
		3D控件	N/A
		RenderScript	N/A
Skia	中级	图片编解码	"1、熟悉各种格式图片的存储特点。熟悉bmp/png/jpeg/gif等图片的二进制文件的组成格式，掌握bmp/png/jpeg/gif等图片格式的解码限制。
2、熟悉核心类（SkimageDecoder_***，BitmapFactory.Options，SkBitmap）。
3、熟悉bmp/png/jpeg/gif等图片的编解码流程。
4、熟悉区域解码及其限制条件。"
		Skia库	"1、熟悉Skia库基本功能及其架构。
2、熟悉Skia核心类：SkBitmap、SkCanvas、SkPaint等。
3、能够熟练Skia进行绘图操作。"
	高级	图片解码	"1、掌握jpeg、gif等格式图片的压缩算法。
2、熟悉编解码算法中的受影响因素并深入了解编解码算法。
3、掌握MTK硬解码与软解码的实现方式。"
		Skia库	"1、能够扩展Skai库的功能。
2、能够使用Skia库画出高质量的图形界面。"
	专家	图片解码	"1、设计优化图片编解码流程与算法
2、设计新的图片压缩算法"
		Skia库	1、优化Skia核心类的算法
ActivityManager	中级	AMS的初始化流程	"1、熟悉AMS开机启动流程。
2、熟悉AMS初始化流程，框架资源、配置的加载与设置流程。
3、熟悉开机过程中的OTA处理流程。
4、熟悉system ready与boot_complete的时机。"
		Activity Management	"1、掌握Activity交互调度流程以及生命周期控制流程。
2、掌握Task模型及TASK的调度流程。"
		Broadcast Management	"1、掌握广播发送、接收的使用方式。
2、熟悉持久广播、平行广播、有序广播的流程，熟悉有序广播的优先级。
3、熟悉广播的超时机制。"
		ContentProvider Management	"1、掌握Provider的启动流程。
2、掌握Provider的查询与权限流程。"
		Service Management	1、掌握Service的启动、绑定、停止、销毁流程，及对应的生命周期。
		Process&Memory Management	"1、掌握Android进程权重计算管理流程。
2、掌握进程启动、终止的接口调用流程及其对组件的影响。"
		AMS的模块内组件管理交互设计	N/A
		AMS的模块内组件管理与外部系统服务交互设计	N/A
	高级	AMS的初始化流程	N/A
		Activity Management	"1、熟悉Activity调度流程，熟悉AMS与WMS的窗口管理、可见性同步交互流程。
2、熟悉AMS计算configuration、visible的流程，及其对activity生命周期的影响。
3、熟悉程序保护的流程，及对TASK一致性的维持实现方式。"
		Broadcast Management	N/A
		ContentProvider Management	N/A
		Service Management	N/A
		Process&Memory Management	"1、掌握process的创建流程，zygote的socket通信流程。熟悉Dalvik对进程管理、内存管理的实现方式。
2、掌握LowMemoryKiller的工作流程、内存阀值的配置。
3、熟悉Android系统的内存限制配置，熟悉heapstartsize，heapgrowthlimit，heapsize。"
		AMS的模块内组件管理交互设计	1、熟悉进程启动、销毁，与各组件生命周期之间的关系，熟悉各类组件之间的绑定关系。
		AMS的模块内组件管理与外部系统服务交互设计	1、熟悉各类Management的关键流程，熟悉真假开关机流程与AMS的交互流程。
	专家	AMS的初始化流程	N/A
		Activity Management	"1、熟悉AMS的架构设计，并能够提出优化方案。
2、设计多任务多窗口管理系统"
		Broadcast Management	N/A
		ContentProvider Management	N/A
		Service Management	N/A
		Process&Memory Management	"1、优化Linux的进程管理机制
2、优化Linux的内存管理机制。"
		AMS的模块内组件管理交互设计	N/A
		AMS的模块内组件管理与外部系统服务交互设计	N/A
InputManager	中级	框架层预处理流程	1、掌握各类事件的预处理方式，能够给出处理过程的流程图。
		应用默认的处理流程	"1、掌握ViewRootImpl、PhoneWindow中的事件处理流程，掌握viewRootImpl中对事件派发状态的跟踪原理，能够给出ViewRootImpl、phoneWindow对事件处理的流程图(ViewRootImpl.java  PhoneWindow.java)。
2、熟悉事件在activity、ViewGroup中的处理流程(Activity.java ViewGroup.java)。
3、掌握按键事件以及触摸事件默认的处理方式，能够给出对点击事件以及长按事件的处理流程图（MotionEvent.java  KeyEvent.java）。"
		事件数据的读取	N/A
		事件的处理/转化	N/A
		事件的派发	1、熟悉Native层的事件派发流程(InputDispatcher.cpp)
		InputManager初始化流程	N/A
		驱动层的逻辑	N/A
	高级	框架层预处理流程	N/A
		应用默认的处理流程	1、掌握popupWindow、dialog、view等控件对事件的处理流程，能够给出处理逻辑流程图。
		事件数据的读取	1、掌握读取事件的逻辑，能够给出流程图(EventHub.cpp)。
		事件的处理/转化	1、掌握底层数据到应用识别的事件类型的转化流程，并给出流程图(InputReader.cpp)。
		事件的派发	"1、掌握Native层的事件派发流程，能够给出流程图。
2、能够分析事件派发引起的ANR问题。
3、熟悉pipe和channel的原理和功能。"
		InputManager初始化流程	"1、掌握inputManager的初始化流程，能够给出流程图。
2、掌握inputReader、inputDispatcher、eventHub的初始化流程，能够给出流程图。
3、掌握channel的注册流程，能够给出流程图。"
		驱动层的逻辑	N/A
	专家	框架层预处理流程	1、改进事件预处理流程，改善触摸事件的抖动性。
		应用默认的处理流程	N/A
		事件数据的读取	1、独立完成输入设备的初始化、添加、移除的设计。
		事件的处理/转化	N/A
		事件的派发	1、优化android事件派发系统，让事件派发更顺畅，赶超ios体验。
		InputManager初始化流程	N/A
		驱动层的逻辑	N/A
系统属性	中级	系统属性	"1、熟悉系统属性的种类。
2、熟悉系统熟悉的定义。
3、熟悉系统属性的使用方法。"
	高级	系统属性	1、熟悉如何配置系统属性。关键文件：init.c
	专家	系统属性	N/A
USB相关	中级	USB相关功能	1、掌握USB弹出框原理，熟悉弹出框各功能的处理流程，能够给出处理流程图（OppoUsbManager.java 、UsbSelectionActivity）。
		存储服务	"1、掌握SD卡卸载、挂载、格式化流程，能绘制出处理流程图（mountservice.java，vold）。
2、熟悉SD卡开机挂载流程，能够定制SD卡挂载方式 （mountservice.java，vold）                                                                                   。
3、熟悉SD卡状态通知流程，能够修改SD卡的通知流程（mountservice.java、StorageManager .java StorageNotification.java）。
4、熟悉应用访问SD卡路径和状态的流程 （Environment.java、OppoEnvironment.java）。
5、能够在adb shell下对存储设备文件进行操作。"
	高级	adb	1、熟悉adb协议，能够扩展adb 指令（\system\core\adb）。
		存储服务	"1、熟悉linux文件管理机制，文件系统。
2、能够拓展存储设备的功能，如（shared_sdcard）。"
	专家	adb	1、能够扩展adb协议。
		存储服务	1、能够优化存储设备的USB读写速度。
包管理服务（PMS）	中级	PMS启动流程	"1、熟悉PMS开机启动流程，能够画出启动的流程图（SystemServer.java）。
2、熟悉java层installer与C层installd的socket连接关系。
3、熟悉PackageHandler消息循环机制，能够画出消息处理的流程图（PackageManagerService.java）。
4、熟悉AppDirObserver监测机制（PackageManagerService.java）。"
		apk安装卸/载流程	"1、熟悉apk安装/卸载的调用流程，能够排查并解决apk安装/卸载失败的问题。
2、熟悉PackageHandler与AppDirObserver在apk安装/卸载过程中的工作原理及作用，能够画出关键性流程图（PackageManagerService.java）。"
		apk权限管理	"1、熟悉Androidmanifest.xml文件解析流程。
2、熟悉apk安装时权限选择/取消的处理流程（PackageInstaller.apk）。
3、熟悉android权限的控制逻辑（阅读packagemanagerservice.java里的相关源码）。
4、熟悉android的控制权限，及对应的安全级别。"
		PMS与T卡挂载相关	1、熟悉PMS中T卡挂载/卸载过程的处理流程，能够画出PMS与Mountservice的交互类图。
		dex与odex	1、熟悉odex相对于dex的实现方式。
	高级	PMS开机流程	1、掌握PMS在开机启动时，与AMS、WMS等几个关键服务的关系，能够解决相关问题。
		apk安装卸载流程	"1、掌握apk安装不同方式的区别与互相转移的原理。
2、掌握installd应用的工作原理（installd.c、installd.h、commands.c）。"
		apk权限管理	"1、掌握私密模式下apk隐藏的工作原理。
2、掌握apk签名相关的知识，能够处理apk签名失败的问题。
3、掌握apk加密的原理（AssetManager.java、AssetManager.cpp）。"
		PMS与T卡挂载相关	N/A
		dex与odex	1、掌握odex与dex的结构差异与实现方式（DexFile.h、DexFile.c）。
	专家	PMS开机流程	1、优化PMS开机流程，加快开机速度。
		apk安装卸载流程	N/A
		apk权限管理	1、设计apk动态权限管理机制。
		PMS与T卡挂载相关	N/A
		dex与odex	1、优化odex的文件结构。
开关机	中级	内核启动流程	"1、熟悉内核加载流程。
2、熟悉init进程的功能接口。"
		android启动流程	"1、熟悉zygote启动流程。
2、熟悉systemserver及各个服务启动流程
3、熟悉ServerManager功能。
4、掌握启动过程中的关键时间节点。"
		关机流程	"1、掌握真假关机的区别与联系。
2、掌握关机过程中各个时间节点的处理流程。
3、掌握关机流程中各个模块的关闭接口和异常处理流程。"
		LOGO&动画	"1、掌握开关机动画包的脚本编写方法。
2、熟悉开关机动画解码流程，及脚本解析，音频，画面的播放实现方式等。"
		IPO	"1、熟悉假关机和真关机区别与联系。
2、熟悉IPOD的关键打印信息。
3、掌握IPOD启动和退出时间点。
4、掌握IPOD假开机、假关机的流程。"
	高级	内核启动流程	1、熟悉内核启动的框架和设计。
		android启动流程	1、能够独立自定义启动流程。
		关机流程	N/A
		LOGO&动画	"1、掌握动画绘图接口的使用方式。
2、掌握动画音频播放接口的使用方式。"
		IPO	1、掌握和理解IPO的详细设计思路。
	专家	内核启动流程	1、优化内核启动流程。
		android启动流程	1、优化android系统启动流程，提升android启动速度。
		关机流程	N/A
		LOGO&动画	N/A
		IPO	1、设计假关机架构，实现3秒关机
关机闹钟	中级	RTC触发启动流程	"1、熟悉关机闹钟在java层触发的流程。
2、熟悉真关机和假关机下闹钟触发的区别与联系。
3、掌握android通过关机闹钟启动与正常启动的区别与联系。"
		开关机闹钟	"1、熟悉开机闹钟触发开机后的处理流程。
2、熟悉关机闹钟触发关机后的处理流程。
3、熟悉开关机闹钟在射频模块上的特殊处理流程。"
		AlarmManager	"1、熟悉AlarmManager的接口使用方式。
2、熟悉AlarmManager中闹钟类型及其管理流程。
3、熟悉AlarmManager在触发闹钟时的处理流程。"
	高级	RTC触发启动流程	"1、熟悉从驱动到应用的闹钟设置、响应的全流程。
2、能够从全流程的角度去优化闹钟响应过程。"
		开关机闹钟	1、熟悉开关机闹钟设计架构，能够设计开关机闹钟防呆机制。
		AlarmManager	1、熟悉从底层到上层的闹钟服务触发流程。
	专家	RTC触发启动流程	"1、能够解决各种RTC失效的问题。
2、从架构设计上保障RTC触发消息的可靠性。"
		开关机闹钟	1、熟悉开关机闹钟的设计架构，能够从稳定性、可扩展性、高效性等方面优化改进现有的设计。
		AlarmManager	N/A
同步与备份	中级	账号系统	"1、熟悉账号核心模块AccountsManagerService，相关文件AccountManagerService.java、AccountManager.java 、AbstractAccountAuthenticator。
2、熟悉授权服务在AndroidManifest.xml的定义（例如：EasAuthenticatorService）、Authenticator.xml的定义。"
		同步框架	"1、熟悉同步核心模块SyncManager，相关文件SyncManager.java、SyncStorageEngine.java、RegisteredServicesCache.java
2、熟悉SyncAdapter类中AbstractThreadedSyncAdapter、TempProviderSyncAdapter，及它们的区别。
3、熟悉同步服务在AndroidManifest.xml的定义（例如：ContactsSyncAdapterService）、Syncadapter.xml的定义。"
		备份框架	"1、熟悉备份核心模块BackupManagerService，相关文件BackupManagerService.java、 BackupManager.java、BackupAgent.java
2、熟悉备份代理的定义，即<application android:backupAgent=""**BackupAgent"">中**BackupAgent的定义。"
		账号与同步apk	"1、能够移植AccountsAndSyncSettings相关代码。
2、能够解决同步与备份界面相关的问题。
3、熟悉数据库原理，排查数据库对同步的影响。"
	高级	账号系统	1、能够实现自定义账号的添加。
		同步框架	1、能够实现自定义同步服务成功同步。
		备份框架	1、能够实现自定义应用的备份和还原（本地或网络）。
		同步协议	1、熟悉SyncML，包括Google、Funambol的SyncML协议实现。
	专家	账号系统	N/A
		同步框架	1、能够独立设计云同步框架。
		备份框架	1、熟悉现有的备份设计架构，能够找出现有设计架构的不足，并提出改进方案。
		同步协议	N/A
Recovery/OTA	中级	recovery工作原理	"1、熟悉recovery.img结构。
2、掌握recovery基本功能，包括清除数据、缓存、安装升级包等。
3、熟悉recovery的主程序运行流程。"
		升级包安装过程	"1、掌握设备的挂载原理和文件访问方式。
2、熟悉升级包脚本解析方法。"
		升级包编译流程	N/A
		OTA交互过程	"1、熟悉OTA ID的定义规则。
2、熟悉OTA升级包在服务器上的管理流程。"
		系统升级客户端	"1、熟悉OTA客户端的界面构成。
2、掌握客户端与服务端交互的原理。
3、掌握客户端定时检测更新机制原理。"
	高级	recovery工作原理	"1、熟悉Minui图形库显示原理。
2、熟悉recovery界面事件处理原理。
3、熟悉密钥校验原理。"
		升级包安装过程	"1、掌握升级包脚本的解析函数的工作原理。
2、熟悉SHA1校验算法。"
		升级包编译流程	"1、掌握Makefile中与otapackage相关的编译准备工作脚本。
2、熟悉ota_from_target_files及相关脚本的详细编译过程。
3、掌握全量升级包和增量升级包的差异性，能对编译脚本进行修改维护、功能扩展。"
		OTA交互过程	N/A
		系统升级客户端	1、掌握系统升级的整个设计架构，能够分析现有架构的不足，提出改进方案。
	专家	recovery工作原理	1、熟悉recovery的架构，分析架构中的缺陷，提出优化方案。
		升级包安装过程	1、能够解决各种升级包安装失败的问题。
		升级包编译流程	1、能够实现升级包编译发布的全自动化设计。
		OTA交互过程	N/A
		系统升级客户端	1、能够架构全新的系统升级方案。
配置管理	中级	编译服务器环境搭建	"1、熟悉subversion配置，能够快速配置svn管理服务器，管理项目代码，并设定访问权限。
2、熟悉编译环境需要的工具（flex bison gperf build-essential curl  等），能够手动使用工具来实现编译中的一些环节。
3、熟悉环境所依赖的库（zlib1g-dev libc6-dev-i386 lib32ncurses5-dev等）的功能，能够解决编译环境相关的问题。
4、利用python、perl、bash等语言开发脚本，实现编译自动化。"
		Android编译原理	"1、独立写Android.mk，能够在工程中增加或忽略apk模块。
2、熟悉mtk源码中控制编译的perl&python脚本，熟悉其流程和所实现的功能。
3、能够修改源码中makefile、shell、perl、python以实现特殊的功能。"
		脚本编写	1、熟悉perl、shell、python脚本，熟悉基本的数据类型和数据结构，熟练使用各种控制结构，熟悉脚本输入输出和文件处理的编写。
	高级	编译服务器环境搭建	"1、能够对开源工具进行二次开发。
2、能够修改重编linux内核，最大化适应android编译需求。"
		脚本编写	"1、精通perl脚本:1能熟练地编写高质量的perl功能性脚本,2)会使用map、grep等高级技巧,3)能够使用智能匹配和given-when结构
2、精通shell脚本:1)熟悉管道、进程，并使用,2)能熟练地编写高质量的shell功能性脚本3)熟悉多种shell脚本语言之间的差异,4)熟悉shell脚本的安全性知识
3、精通python脚本：1)能熟练地编写高质量的python功能性脚本,2)熟练python网络编程,3)能够使用python进行数据库相关操作"
		Android编译原理	"1、能够独立描述mtk源码编译流程，能够给出mtk平台代码编译的流程图。
2、能够独立添加功能性脚本（shell、perl、python）。
3、能够解决各种编译问题。"
	专家	编译服务器环境搭建	"1、开发代码管理工具，同时兼备svn与git的优点。  
2、开发android代码编译的小型系统，集成编译所需工具，可以跨平台工作。"
		Android编译原理	1、能够优化mtk平台代码编译的流程，提升编译速度。
		脚本编写	1、精通perl、python、shell脚本语言，能够根据需求快速实现脚本的编写。
