#!/bin/bash
#
#

export JAVA_HOME='/usr/share/jdk1.7.0_21'
export PATH=$PATH:$JAVA_HOME/bin

blog=/home/coderbee/blog/
bakDir=${blog}dataBak

# 用mysqldump命令把博客的数据库导出来，然后用vpsBack.jar上传的Dropbox，
# vpsBack.jar是用Dropbox的API写的一个小工具，只有简单的上传功能。
/usr/share/mysql/bin/mysqldump -u wpblog -p'password' blog > ${bakDir}/blog-bak.sql.tmp 2>/dev/null &&
 mv ${bakDir}/blog-bak.sql.tmp ${bakDir}/blog-bak.sql  &&
 java -jar ${blog}vpsBack.jar upload vpsBak4coderbee/db/`date -d"yesterday" +"%Y%m%d"`/ ${bakDir}/blog-bak.sql &&
 echo "backup sql to dropbox ok ."


#  一个月的访问日志放在以月份命名的文件夹下，同一年的月份的文件夹放在以年命名的文件夹下。
monDir=${bakDir}/weblog/$(date -d"yesterday" +"%Y")/$(date -d"yesterday" +"%m")
dayPath=$(date -d"yesterday" +"%d").log
[ -d "${monDir}" ] || mkdir -p ${monDir}


logDir=/usr/share/nginx/logs

#  nginx日志拷贝、清理、切换
cd $logDir && cp access.log ${dayPath} && :> access.log &&
#  通知nginx重新打开日志文件
kill -USR1  `cat /usr/share/nginx/logs/nginx.pid` &&


#  打包访问日志
tar -czf "${dayPath}.tar.gz" "${dayPath}" &&

#  备份访问日志
rm -f ${dayPath} && mv -f "${dayPath}.tar.gz" ${monDir} &&
chown -R coderbee:appgroup ${bakDir} && echo "backup web log down"

