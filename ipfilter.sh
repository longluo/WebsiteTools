#!/bin/bash
#
#

cd /home/coderbee/blog/
sortIps=sortIpx

#  过滤出访问日志里4xx状态、访问的URL里包含 admin|Admin|scripts且以php后缀结尾的IP
awk -F'"' '$3~/4.. [0-9]+/ && $2 ~ /GET \/.*(admin|Admin|scripts).+(index|setup)\.php/ {print $0}' /usr/share/nginx/logs/access.log | awk '{print $1}' >> evilIP

sort evilIP | uniq > evilIP.tmp && mv evilIP{.tmp,}

iptables -F INPUT

#  把整个IP/24段加入黑名单
cut -d. -f1-3 ips evilIP | sort | uniq > $sortIps
for i in $sortIps
do
    while read line
    do
        if [[ ! -z $line ]]; then
           ip=$line/24
           iptables -t filter -I INPUT -s $ip -j DROP
        fi
    done < $i
done

rm $sortIps
