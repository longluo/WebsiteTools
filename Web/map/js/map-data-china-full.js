/* 
		JavaScript Document 
	Simplified Edition
	
	Name: China Location Data 
	Author: Long Luo
	Version: 1.0  
	Website: http://www.imlongluo.com 
	Date: 26th, Nov.,2013 
*/

//$('#map').vectorMap({map: 'cn_merc_en'});
$('#map').vectorMap({
	map: 'cn_merc_en',
	backgroundColor: 'transparent',
	zoomMin: 0.9,
	zoomMax: 1.9, 
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
            {latLng: [22.95, 113.36], name: '广东 广州 - 家'},
			// 早期
			{latLng: [18.40, 109.50], name: '海南 三亚 - 2002'},
			{latLng: [36.60, 109.47], name: '陕西 延安 - 2009'},
			{latLng: [34.76, 113.65], name: '河南 郑州 - 2010'},
			// 2007 云南
			{latLng: [22.47, 108.22], name: '广西 南宁 - 2007, 2011'},
			{latLng: [23.91, 106.62], name: '广西 百色 - 2007'},
			{latLng: [25.04, 102.73], name: '云南 昆明 - 2007, 2012'},
			{latLng: [25.69, 100.19], name: '云南 大理 - 2007, 2012'},
			{latLng: [26.86, 100.25], name: '云南 丽江 - 2007, 2012'},
			{latLng: [28.26, 98.52], name: '云南 迪庆州 德钦 - 2007, 2011'},
			// 2008 江西
			{latLng: [23.68, 116.63], name: '广东 潮州 - 2008'},
			{latLng: [25.85, 114.92], name: '江西 赣州 - 2008'},
			// 2009 安徽
			{latLng: [28.68, 115.89], name: '江西 南昌 - 2009'},
			{latLng: [29.17, 117.11], name: '江西 景德镇 - 2009, 2012, 2013'},
			{latLng: [32.04, 118.78], name: '江苏 南京 - 2009'},
			{latLng: [30.17, 118.14], name: '安徽 黄山 - 2009'},
			{latLng: [33.63, 116.97], name: '安徽 宿州 - 2009'},
			{latLng: [31.86, 117.27], name: '安徽 合肥 - 2009, 2013'},
			// 2011 湖南
			{latLng: [25.29, 110.28], name: '广西 桂林 - 2011'},
			{latLng: [27.92, 109.43], name: '湖南 湘西州 凤凰 - 2011'},
			{latLng: [28.21, 113.00], name: '湖南 长沙 - 2011, 2012, 2013'},
			{latLng: [26.98, 112.39], name: '湖南 衡阳 - 2011, 2012'},
			// 西藏行
			{latLng: [22.46, 110.35], name: '广西 玉林 - 2011'},
			{latLng: [24.70, 108.06], name: '广西 河池 - 2011'},
			{latLng: [26.36, 106.42], name: '贵州 贵阳 - 2011'},
			{latLng: [29.33, 106.34], name: '重庆 - 2011'},
			{latLng: [29.31, 103.20], name: '四川 峨眉山 - 2011'},
			{latLng: [30.39, 104.02], name: '四川 成都 - 2011'},
			{latLng: [30.00, 102.52], name: '四川 雅安 - 2011, 2012'},
			{latLng: [29.02, 100.17], name: '四川 甘孜州 稻城 - 2011'},		
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
			{latLng: [25.47, 113.01], name: '湖南 郴州 - 2012'},
			{latLng: [30.32, 114.17], name: '湖北 武汉 - 2012'},
			{latLng: [30.15, 120.09], name: '浙江 杭州 - 2012, 2013'},
			//{latLng: [31.19, 120.37], name: '江苏 苏州 - 2012'},
			{latLng: [29.57, 122.18], name: '浙江 舟山 - 2012'},
			{latLng: [25.05, 117.01], name: '福建 龙岩 - 2012'},
			{latLng: [24.55, 116.10], name: '广东 梅州 - 2012, 2013'},
			// 甘川行
			{latLng: [29.22, 113.05], name: '湖南 岳阳 - 2012, 2013'},
			{latLng: [32.03, 112.38], name: '湖北 襄阳 - 2012, 2013'},
			{latLng: [32.65, 110.79], name: '湖北 十堰 - 2012'},
			{latLng: [34.13, 108.57], name: '陕西 西安 - 2009, 2012'},
			{latLng: [34.24, 107.08], name: '陕西 宝鸡 - 2012'},
			{latLng: [34.26, 104.26], name: '甘肃 陇南 - 2012'},
			//{latLng: [34.59, 102.54], name: '甘肃 合作 - 2012'},
			{latLng: [34.05, 102.37], name: '甘肃 甘南州 碌曲 - 2012'},
			{latLng: [32.38, 103.35], name: '四川 阿坝州 松潘 - 2012'},
			{latLng: [27.53, 102.14], name: '四川 西昌 - 2012'},
			// 台湾游
			{latLng: [22.64, 121.50], name: '台湾 高雄 - 2013'},
			{latLng: [25.15, 122.15], name: '台湾 台北 - 2013'},
			// 东北行
			{latLng: [26.23, 117.61], name: '福建 三明 - 2013'},
			{latLng: [30.52, 117.03], name: '安徽 安庆 - 2013'},
			{latLng: [32.89, 115.81], name: '安徽 阜阳 - 2013'},
			{latLng: [34.44, 115.65], name: '河南 商丘 - 2013'},
			{latLng: [34.26, 117.20], name: '江苏 徐州 - 2013'},
			{latLng: [36.65, 117.00], name: '山东 济南 - 2013'},
			{latLng: [37.45, 116.29], name: '山东 德州 - 2013'},
			{latLng: [38.33, 116.83], name: '河北 沧州 - 2013'},
			{latLng: [39.13, 117.20], name: '天津 - 2013'},
			{latLng: [39.95, 119.57], name: '河北 秦皇岛 - 2013'},
			{latLng: [40.65, 122.18], name: '辽宁 营口 - 2013'},
			{latLng: [38.88, 121.37], name: '辽宁 大连 - 2013'},
			{latLng: [40.13, 124.37], name: '辽宁 丹东 - 2013'},
			{latLng: [41.80, 123.38], name: '辽宁 沈阳 - 2013'},
			{latLng: [43.53, 125.19], name: '吉林 长春 - 2013'},
			{latLng: [45.75, 126.63], name: '黑龙江 哈尔滨 - 2013'},
			{latLng: [46.80, 130.20], name: '黑龙江 佳木斯 - 2013'},
			{latLng: [46.33, 132.17], name: '黑龙江 宝清 - 2013'},
			{latLng: [46.78, 134.00], name: '黑龙江 饶河 - 2013'},
			{latLng: [48.33, 134.15], name: '黑龙江 抚远 - 2013'},
			{latLng: [48.93, 130.00], name: '黑龙江 嘉荫 - 2013'},
			{latLng: [50.22, 127.53], name: '黑龙江 黑河 - 2013'},
			{latLng: [52.32, 124.70], name: '黑龙江 塔河 - 2013'},
			{latLng: [53.48, 122.37], name: '黑龙江 漠河 - 2013'},
			{latLng: [50.78, 121.52], name: '内蒙古 呼伦贝尔 根河 - 2013'},
			{latLng: [50.45, 120.08], name: '内蒙古 呼伦贝尔 额尔古纳 - 2013'},
			{latLng: [49.22, 119.73], name: '内蒙古 呼伦贝尔 海拉尔 - 2013'},
			{latLng: [49.58, 117.47], name: '内蒙古 呼伦贝尔 满洲里 - 2013'},
			{latLng: [48.20, 116.82], name: '内蒙古 呼伦贝尔 巴尔虎左旗 - 2013'},
			{latLng: [47.30, 119.90], name: '内蒙古 阿尔山 - 2013'},
			{latLng: [45.53, 116.97], name: '内蒙古 东乌珠穆沁旗 - 2013'},
			{latLng: [43.08, 115.13], name: '内蒙古 锡林郭勒 - 2013'},
			{latLng: [40.82, 114.87], name: '河北 张家口 - 2013'},
			{latLng: [36.18, 113.08], name: '山西 长治 - 2013'},
			{latLng: [33.01, 112.53], name: '河南 南阳 - 2013'},
			{latLng: [30.30, 111.50], name: '湖北 荆州 - 2013'},
			
          ]
});