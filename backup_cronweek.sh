#!/bin/bash
#
#	Created by Long Luo@2013.09.13
# 	Modified by long.luo, 2013.09.15.
#


WP_BLOG_PATH=/home/wwwroot/imlongluo
#
WEBSITE_PATH=/home/MyWebsite

tar -czf ${WEBSITE_PATH}/blog.tar.gz "${WP_BLOG_PATH}"

pwd
cd ${WEBSITE_PATH}
pwd

#
./dropboxbak blog.tar.gz /VpsBackup

#rm "${WP_BLOG_PATH}.tar.gz" 
