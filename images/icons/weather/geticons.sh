#!/bin/bash


BASE_URL="https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/"

# declare STIRNG variable
STRING="Beginning Image download..."

#print var on screen 
echo $STRING

sleep 1
echo "...."

BIG_PNG="ds.png"
PNG=".png"

echo "url="${BASE_URL}
echo "big png="${BIG_PNG}

for ((i=0; i<49;i++)); do
	echo IMG_URL=${BASE_URL}${i}${BIG_PNG}
	echo "final url="${IMG_URL}

	curl ${BASE_URL}${i}${BIG_PNG} -o small/${i}${PNG}
	sleep 1

done

# URL_ARRAY=(
# 'http://www.example.file1.jpg'
# 'http://www.example.file2.jpg'
# )

# NAME_ARRAY=(
# 'file1.jpg'
# 'file2.jpg'
# )

# ELEMENTS=${#URL_ARRAY[@]}

# for (( i=0;i<ELEMENTS;i++)); do

# 	echo ${URL_ARRAY[${i}]}
# 	echo "saved as ${NAME_ARRAY[${i}]}"
# 	curl ${URL_ARRAY[${i}]} -o images/${NAME_ARRAY[${i}]}
# 	sleep 1
	
# done
