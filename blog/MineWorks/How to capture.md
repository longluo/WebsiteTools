


### 问题的阐述

OPPO乐园最近用户反馈在移动网络下存在无法加载图片的情况，经过再三的确认问题遍及全国10多个省份，给用户体验带来大量的问题。
然后经过大家的协商打算使用联系用户外加抓包的形式来了解为什么图片会无法显示。

### 如何安装tcpdump和使用
1. 手机要有root权限，OPPO的root你懂得
2. 下载tcpdump  使用Chrome浏览器打开 http://www.strazzere.com/android/tcpdump
3. adb push c:\wherever_you_put\tcpdump /data/local/tcpdump
4. adb shell chmod 6755 /data/local/tcpdump
5. 执行adb shell /data/local/tcpdump -A -i any -p -s 0 -w /sdcard/capture.pcap host 223.82.254.254

命令参数：

	# "-i any": listen on any network interface
	# "-p": disable promiscuous mode (doesn't work anyway)
	# "-s 0": capture the entire packet
	# "-w": write packets to a file (rather than printing to stdout)

/sdcard/capture.pcap 保存的包的地址
223.82.254.254 代表监视的端口号
如果要结束按下Ctrl+C，停止抓包



6. 将包从/sdcard/capture.pcap拷贝的电脑下使用或者使用 
adb pull /sdcard/capture.pcap d:/
Wireshare的下载地址 http://rj.baidu.com/soft/detail/15788.html?ald

7. 将Wireshare安装到电脑，双击打开/sdcard/capture.pcap 

输入tcp.port == XXXXX, 查看XXXXX端口的tcp通讯情况，比如如图中tcp端口的协议显示访问的是GET /square/radiolist?appversion=4.6.2_5244 的http协议的过程
前三行代表的是协议的3次握手
后面表示的是传输数据和断开连接的过程
Tcp协议是对等协议，整个流程就是http流程互相应答的过程，以包长和seq序列为协议内容互相确认

# 典型tcp访问失败的解析#


过滤http
tcp 
tcp.port == xxxx

ip.src == xxxx












