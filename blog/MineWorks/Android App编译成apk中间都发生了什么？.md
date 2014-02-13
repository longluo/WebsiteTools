
# Andrid App编译成apk的过程中都发生了什么？

#### ***By Long Luo***

一直都是使用ant自动编译或者直接使用Android ADT，但是一直不是很清楚一个Android App的apk是如何编译出来的？






**ant编译流程：**




ANT 编译Log如下所示：


	-package-resources:

	[aapt] Creating full resource package...
	[aapt] Warning: AndroidManifest.xml already defines debuggable (in http://schemas.android.com/apk/res/android); using existing value in manifest.

	-package:
	[apkbuilder] Current build type is different than previous build: forced apkbuilder run.
	[apkbuilder] Creating VideoGalleryOnline-release-unsigned.apk for release...













**Create Time: 2014/1/21 17:10:21**


参考文档： 《Android内核剖析》第18章

