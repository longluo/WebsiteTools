/* 
		JavaScript Document 
	Simplified Edition
	
	Name: Location Data 
	Author: Long Luo
	Version: 1.01  
	Website: http://www.imlongluo.com 
	Date: 25th, Nov.,2013 
*/

//$('#map').vectorMap({map: 'cn_merc_en'});
$('#map').vectorMap({
	map: 'cn_merc_en',
	backgroundColor: 'transparent',
	zoomMin: 0.9,
	focusOn: {
		  x: 0.55,
		  y: 2,
		  //scale: 1.6
		  scale: 0.9
		},
	regionStyle: {
		initial: {
			fill: '#e5e5e5',
			"fill-opacity": 1,
			stroke: 'none',
			"stroke-width": 0,
			"stroke-opacity": 1
		},
		hover: {
			fill: '#ccc',
			"fill-opacity": 0.8
		},
		selected: {
			fill: 'yellow'
		},
		selectedHover: {}
	},
	
	/*series: {
		regions: [{
			values: tourData,
			scale: ['#C8EEFF', '#0071A4'],
			normalizeFunction: 'polynomial'
		}]
	},
	onRegionLabelShow: function(e, el, code) {
		el.html(el.html() + ' (最后到达 - ' + tourData[code] + ')');
	},*/
	
	markerStyle: {
            initial: {
            	fill: '#fd8888',
            	stroke: '#fff'
            },
			hover: {
				fill: '#fd3838',
				stroke: '#fff',
				"fill-opacity": 0.8
			},
          },
	markers: [
			// Born
            {latLng: [27.99, 115.96], name: '江西 丰城 一个小山村-我出生的地方,1988'},
			
			// Grow up...
			// 经度:115.7637123175049 纬度:28.15760282428549
			{latLng: [28.15, 115.76], name: '江西 丰城 - 1988~2001'},
			// 经度:115.7637123175049 纬度:28.15760282428549
			{latLng: [34.76, 113.65], name: '江西 临川 三年时光一晃而逝 - 2002~2005'},

			{latLng: [36.60, 109.47], name: '江西 乐平 - 2001'},

			{latLng: [28.68, 115.89], name: '江西 南昌 - 2001'},

			{latLng: [34.76, 113.65], name: '河南 郑州 - 2010'},

			{latLng: [28.68, 115.89], name: '江西 南昌 - 2009'},

			{latLng: [29.17, 117.11], name: '江西 景德镇 - 2003'},
			
			// 2005 ~ 2009 University At Chengdu.

			{latLng: [30.39, 104.02], name: '四川 成都 大学！大学！- 2005.08'},

			{latLng: [30.00, 102.52], name: '重庆 重庆市 - 2006'},

			{latLng: [30.00, 102.52], name: '四川 雅安 - 2011, 2012'},

			{latLng: [29.02, 100.17], name: '四川 甘孜州 稻城 - 2011'},

			{latLng: [29.31, 103.20], name: '四川 峨眉山 - 2009.03'},	

			{latLng: [29.31, 103.20], name: '四川 乐山 - 2009.03'},	

			// Fujian Province 2006
			{latLng: [24.70, 108.06], name: '福建 厦门 第一次看海的地方 - 2006.07'},

			{latLng: [26.36, 106.42], name: '福建 漳州 - 2006.07'},

			{latLng: [29.33, 106.34], name: '福建 石狮 - 2006.07'},

			{latLng: [29.41, 98.35], name: '福建 泉州 - 2006.07'},

			{latLng: [26.23, 117.61], name: '福建 三明 - 2006.07'},
	
			
			// Left University. 
			// Guangdong Province
			{latLng: [22.46, 110.35], name: '广西 玉林 - 2011'},
			{latLng: [24.70, 108.06], name: '广西 河池 - 2011'},
			{latLng: [26.36, 106.42], name: '贵州 贵阳 - 2011'},
			{latLng: [29.33, 106.34], name: '重庆 - 2011'},
			{latLng: [29.41, 98.35], name: '西藏 昌都 - 2011'},
			{latLng: [29.51, 95.46], name: '西藏 波密 - 2011'},
			{latLng: [29.39, 91.07], name: '西藏 拉萨 - 2011'},
			{latLng: [32.24, 91.47], name: '西藏 那曲 - 2011'},
			{latLng: [34.68, 92.55], name: '青海 可可西里 - 2011'},
			{latLng: [36.32, 94.52], name: '青海 格尔木 - 2011'},
			{latLng: [36.30, 98.13], name: '青海 海西州 都兰 - 2011'},
			{latLng: [36.38, 101.45], name: '青海 西宁 - 2011'},
			{latLng: [36.00, 103.56], name: '甘肃 兰州 - 2011'},
			{latLng: [38.26, 106.18], name: '宁夏 银川 - 2004, 2009, 2011'},
			{latLng: [40.41, 109.53], name: '内蒙古 包头 - 2011'},
			{latLng: [40.82, 111.65], name: '内蒙古 呼和浩特 - 2011'},
			{latLng: [40.11, 113.17], name: '山西 大同 - 2011, 2013'},
			{latLng: [37.52, 112.34], name: '山西 太原 - 2011, 2013'},
			{latLng: [38.07, 114.22], name: '河北 石家庄 - 2011'},
			{latLng: [39.58, 116.18], name: '北京 - 2004, 2010, 2011'},
			{latLng: [36.07, 120.33], name: '山东 青岛 - 2011'},
			{latLng: [31.35, 120.16], name: '江苏 无锡 - 2011'},
			{latLng: [31.14, 121.29], name: '上海 - 2005, 2011, 2012, 2013'},
			{latLng: [29.56, 121.29], name: '浙江 宁波 - 2011, 2012'},
			{latLng: [27.58, 120.37], name: '浙江 温州 - 2011, 2012'},
			{latLng: [26.05, 119.18], name: '福建 福州 - 2011, 2012'},
			
			// 华东游
			{latLng: [30.32, 114.17], name: '湖北 武汉 - 2012'},
			{latLng: [24.55, 116.10], name: '广东 梅州 - 2012, 2013'},
			
			// 2013 Tourism
			{latLng: [36.18, 113.08], name: '四川 九寨沟 - 2013.04'},
			{latLng: [18.40, 109.50], name: '海南 三亚 - 2013.11.07 ~ 2013.11.11'},
          ]
});