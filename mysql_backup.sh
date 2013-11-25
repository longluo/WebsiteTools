#!/bin/bash
#

#Dropbox上的备份目录
DROPBOX_DIR="/dropbox"

#需要备份数据的目录，多个目录使用空格分开
BACKUP_SRC="/home/wwwroot/imlongluo"

#待上传的压缩包临时目录
BACKUP_DST="/home/VpsBackup"

#mysql地址
MYSQL_SERVER="127.0.0.1"

#mysql用户名
MYSQL_USER="root"

#mysql密码
MYSQL_PASS="root"

NOW=$(date +"%Y.%m.%d")

#日期作文件名
DESTFILE="$BACKUP_DST/$NOW.tgz"

#dump数据库，如备份整个数据库PASS后面使用 --all-databases
mysqldump -u $MYSQL_USER -h $MYSQL_SERVER -p$MYSQL_PASS -B --all-databases > "$NOW-Databases.sql"

#备份目录和数据库
#tar cfz "$DESTFILE" $BACKUP_SRC "$NOW-Databases.sql"
#只备份数据库：
#tar cfz "$DESTFILE" "$NOW-Databases.sql"

#执行脚本的上传命令
#./dropbox_uploader.sh upload "$DESTFILE" "$DROPBOX_DIR/$NOW.tgz"

#删除临时文件
#rm -f "$NOW-Databases.sql" "$DESTFILE"

#删除7天前的文件
odata=$(date -d -7day +"%Y.%m.%d").tgz
/root/sh/dropbox.sh delete /dropbox/$odata

