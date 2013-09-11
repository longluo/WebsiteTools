#!/bin/bash
# 
#	Created by long.luo 
# 		2013/09/06
#

# Install The WebServer Software

# bison
tar -xvf bison-3.0.tar.gz 
cd bison-3.0
./configure 
make && make install
cd ..

# make
tar -xvf make-3.82.tar.gz 
cd make-3.82
./configure 
make && make install
cd ..

# cmake
tar -xvf cmake-2.8.11.2.tar.gz 
cd cmake-2.8.11.2
./configure   
make && make install
cd ..

# pcre
unzip -n pcre-8.31.zip 
cd pcre-8.31
./configure 
make && make install
cd ..

# zlib
tar -xvf zlib-1.2.6.tar.gz 
cd zlib-1.2.6
./configure 
make && make install
cd ..

# libpng
tar -xvf libpng-1.5.9.tar.gz 
cd libpng-1.5.9
./configure 
make && make install
cd ..

# libxml2
tar -xvf libxml2-2.6.32.tar.gz 
cd libxml2-2.6.32
./configure 
make && make install
cd ..
  
# freetype
tar -xvf freetype-2.4.9.tar.gz 
cd freetype-2.4.9
./configure
make && make install
cd ..

# curl
tar -xvf curl-7.25.0.tar.gz 
cd curl-7.25.0
./configure
make && make install
cd ..

# ncurses
tar -xvf ncurses-5.9.tar.gz 
cd ncurses-5.9
./configure
make && make install
cd ..

# MySQL
mkdir -p /usr/local/mysql                 //安装mysql 
mkdir -p /usr/local/mysql/data            //存放数据库
groupadd mysql
useradd -r -g mysql mysql

tar -xvf mysql
cd mysql

cmake \
-DCMAKE_INSTALL_PREFIX=/usr/local/mysql 	\ #安装路径
-DMYSQL_DATADIR=/usr/local/mysql/data       	\ #数据文件存放位置
-DSYSCONFDIR=/etc              				\ #my.cnf路径
-DWITH_MYISAM_STORAGE_ENGINE=1    			\ #支持MyIASM引擎
-DWITH_INNOBASE_STORAGE_ENGINE=1 \     #支持InnoDB引擎
-DWITH_MEMORY_STORAGE_ENGINE=1 \        #支持Memory引擎
-DWITH_READLINE=1                    \     #快捷键功能(我没用过)
-DMYSQL_UNIX_ADDR=/tmp/mysqld.sock      \   #连接数据库socket路径
-DMYSQL_TCP_PORT=3306                  \               #端口
-DENABLED_LOCAL_INFILE=1            \                #允许从本地导入数据
-DWITH_PARTITION_STORAGE_ENGINE=1  \   #安装支持数据库分区
-DEXTRA_CHARSETS=all                  \                   #安装所有的字符集
-DDEFAULT_CHARSET=utf8              \                   #默认字符
-DDEFAULT_COLLATION=utf8_general_ci

cmake -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DDEFAULT_CHARSET=utf8 -DDEFAULT_COLLATION=utf8_general_ci -DEXTRA_CHARSETS=all -DENABLED_LOCAL_INFILE=1 -DSYSCONFDIR=/etc -DMYSQL_TCP_PORT=3306 -DMYSQL_UNIX_ADDR=/tmp/mysqld.sock -DWITH_MEMORY_STORAGE_ENGINE=1 -DWITH_PARTITION_STORAGE_ENGINE=1 -DWITH_MYISAM_STORAGE_ENGINE=1
make && make install

cd /usr/local/mysql  
chown -R mysql:mysql . (为了安全安装完成后请修改权限给root用户)
scripts/mysql_install_db --user=mysql (先进行这一步再做如下权限的修改)
chown -R root:mysql .  (将权限设置给root用户，并设置给mysql组， 取消其他用户的读写执行权限，仅留给mysql "rx"读执行权限，其他用户无任何权限)
chown -R mysql:mysql ./data   (给数据库存放目录设置成mysql用户mysql组，并赋予chmod -R ug+rwx  读写执行权限，其他用户权限一律删除仅给mysql用户权限)
cd ..

# Nginx
group add www
useradd -r -g www www
cd /usr/local/src/
tar -xvf nginx-1.4.2.tar.gz 
cd nginx-1.4.2
./configure --user=www --group=www --prefix=/usr/local/nginx --conf-path=/usr/local/nginx/conf/nginx.conf --with-http_realip_module --with-http_addition_module --with-http_gzip_static_module --with-http_random_index_module --with-http_stub_status_module --with-http_sub_module --with-http_dav_module
mkdir -p /var/nginx
mkdir -p /var/nginx/logs
chown -R /var/nginx
chmod +w /var/nginx
cd ..

# PHP




# WordPress






 













