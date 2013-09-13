#!/bin/bash
# 
#	Created by Long Luo@2013.09.13
#


BAIDU_BCS_PATH=/home/MyWebsite/baidu_bcs

#
BAIDU_BCS_UPLOADER=/home/MyWebsite/baidu_bcs/bsutil.sh

blog=/home/wwwroot/imlongluo/
bakDir=/home/databak

# 用mysqldump命令把博客的数据库导出来，然后用vpsBack.jar上传的Dropbox，
/usr/local/mysql/bin/mysqldump -u root -p'root' blog > ${bakDir}/blog-bak.sql.tmp 2>/dev/null 

# Rename the Sql DB.
mv ${bakDir}/blog-bak.sql.tmp ${bakDir}/blog-bak.sql  

pwd
tar -czf "${bakDir}.tar.gz" "${bakDir}"
pwd

# upload the Database & backup the data
#${BAIDU_BCS_UPLOADER} -f 
./bsutil.sh cp "${bakDir}.tar.gz" "bs://vpsremotebackup/`date -d"yesterday" +"%Y%m%d"`DataBak"
pwd

# completed
echo "Backup SQL Database to BCS Okay."
rm ${bakDir}.tar.gz

 
#  一个月的访问日志放在以月份命名的文件夹下，同一年的月份的文件夹放在以年命名的文件夹下。
monthLogDir=${bakDir}/weblog/$(date -d"yesterday" +"%Y")/$(date -d"yesterday" +"%m")
dayLogPath=$(date -d"yesterday" +"%d").log
[ -d "${monthLogDir}" ] || mkdir -p ${monthLogDir}


logDir=/home/wwwlogs/

#  nginx日志拷贝、清理、切换
cd ${logDir} && cp access.log ${dayLogPath} && :> access.log &&
#  通知nginx重新打开日志文件
kill -USR1  `cat /usr/local/nginx/logs/nginx.pid` &&

#  打包访问日志
tar -czf "${dayLogPath}.tar.gz" "${dayLogPath}" 

#  备份访问日志
rm -f ${dayLogPath} && mv -f "${dayLogPath}.tar.gz" ${monthLogDir} &&
chown -R www:www ${bakDir} && echo "backup web log done"
