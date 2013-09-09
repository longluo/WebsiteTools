#!/bin/bash
#

log="/usr/local/nginx/logs/access.log"

awk -F"\"" '$2 ~ /(GET \/ HTTP.*)|(\/index.php\/[a-zA-Z]*\/[0-9]+\/[0-9]+ .*)|(\/html5\/[a-zA-Z0-9]+.html .*)/ && $6 !~
/(http:\/\/|Java|robot|.com|Wget|PHP|Reeder|Spider|(^-$)|ips-agent|@|Python|bot|NING)/ {
    if ( $4 ~ /http:\/\// )
    {
        refer=substr($4, 8)
        refer=substr(refer, 1, index(refer, "/") - 1)
        refers[refer]++
    } 
    else 
    {
        refers[$4]++
    }

    paper=substr($2, 5)
    paper=substr(paper, 1, index(paper, " ")-1)
    papers[paper]++
}

function printStatistic(msg, arr) 
{
    sum=0
    printf ("%s\n", msg)
    for (i in arr) 
    {
        sum+=arr[i]
        printf("%6d   %s\n", arr[i], i) | "sort"
    }
    close("sort")
    printf ("total count: %d\n", sum)
}

END 
{
    printStatistic("visit refers:", refers)
    print ""
    printStatistic("visit papers:", papers)
}
' $log
