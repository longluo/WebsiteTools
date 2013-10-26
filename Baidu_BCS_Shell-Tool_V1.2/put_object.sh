#!/bin/sh
#这个是一个put object命令
#其中-v 是为了显示过程
#-H 是增加头部信息
#1.txt 是当前路径下的文件，也就是你想要上传的文件
#bs://your-bucket-name/1.txt 表示你想要上传的地址, your-bucket-name 需要改成你申请的bucket的名字，1.txt是你上传后的文件名
./bsutil.sh -v -H "x-bs-meta-test:test-header" cp "1.txt" "bs://your-bucket-name/1.txt"
