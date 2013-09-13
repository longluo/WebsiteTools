#!/bin/bash
#
#	Created by Long Luo@2013.09.13
#

BAIDU_BCS_PATH=/home/MyWebsite/baidu_bcs

WP_BLOG_PATH=/home/wwwroot/imlongluo

tar -czf ${BAIDU_BCS_PATH}/blog.tar.gz "${WP_BLOG_PATH}"

pwd
cd ${BAIDU_BCS_PATH}
pwd

#
./bsutil.sh cp "${WP_BLOG_PATH}" "bs://vpswpblog/`date -d"yesterday" +"%Y%m%d"`WPBlogDataBak"

#rm "${WP_BLOG_PATH}.tar.gz" 
