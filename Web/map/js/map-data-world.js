// JavaScript Document 

// Location Data - Full - World 
// UPDATE: JULY 2013 
// http://www.dandyweng.com 

//$('#map').vectorMap({map: 'cn_merc_en'});
$('#map').vectorMap({
	map: 'world_mill_en',
	backgroundColor: 'transparent',
	zoomMin: 0.9,
	zoomMax: 3.9, 
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
	onRegionClick: function(event, code){
                        if(code == "CN") {
							var obj = document.getElementById('link-to-china');
							if(document.all){
								obj.click();
							} else {
								var evt = document.createEvent("MouseEvents");
								evt.initEvent("click", true, true);
								obj.dispatchEvent(evt);
							}
						}
	},
	onRegionOver: function(event, code){
						if(code == "CN") {	
							$('#map').css({cursor:'pointer'});
						}
　　　　},
	onRegionOut: function(event, code){
						if(code == "CN") {	
							$('#map').css({cursor:'auto'});
						}
　　　　},
	markers: [
			// 中华人民共和国 PRC / China 
            {latLng: [22.95, 113.36], name: '广东 广州 - 家'},
			{latLng: [18.40, 109.50], name: '海南 三亚 - 2002'},
			{latLng: [34.76, 113.65], name: '河南 郑州 - 2010'},
			{latLng: [22.47, 108.22], name: '广西 南宁 - 2007, 2011'},
			{latLng: [25.04, 102.73], name: '云南 昆明 - 2007, 2012'},
			{latLng: [26.86, 100.25], name: '云南 丽江 - 2007, 2012'},
			{latLng: [25.85, 114.92], name: '江西 赣州 - 2008'},
			{latLng: [32.04, 118.78], name: '江苏 南京 - 2009'},
			{latLng: [25.29, 110.28], name: '广西 桂林 - 2011'},
			{latLng: [28.21, 113.00], name: '湖南 长沙 - 2011, 2012, 2013'},
			{latLng: [26.36, 106.42], name: '贵州 贵阳 - 2011'},
			{latLng: [30.39, 104.02], name: '四川 成都 - 2011'},
			{latLng: [29.41, 98.35], name: '西藏 昌都 - 2011'},
			{latLng: [29.39, 91.07], name: '西藏 拉萨 - 2011'},
			{latLng: [36.32, 94.52], name: '青海 格尔木 - 2011'},
			{latLng: [36.38, 101.45], name: '青海 西宁 - 2011'},
			{latLng: [38.26, 106.18], name: '宁夏 银川 - 2004, 2009, 2011'},
			{latLng: [40.82, 111.65], name: '内蒙古 呼和浩特 - 2011'},
			{latLng: [37.52, 112.34], name: '山西 太原 - 2011, 2013'},
			{latLng: [39.58, 116.18], name: '北京 - 2004, 2010, 2011'},
			{latLng: [36.07, 120.33], name: '山东 青岛 - 2011'},
			{latLng: [31.14, 121.29], name: '上海 - 2005, 2011, 2012, 2013'},
			{latLng: [26.05, 119.18], name: '福建 福州 - 2011, 2012'},
			{latLng: [30.32, 114.17], name: '湖北 武汉 - 2012'},
			{latLng: [34.13, 108.57], name: '陕西 西安 - 2009, 2012'},
			{latLng: [36.65, 117.00], name: '山东 济南 - 2013'},
			{latLng: [38.88, 121.37], name: '辽宁 大连 - 2013'},
			{latLng: [41.80, 123.38], name: '辽宁 沈阳 - 2013'},
			{latLng: [45.75, 126.63], name: '黑龙江 哈尔滨 - 2013'},
			{latLng: [48.33, 134.15], name: '黑龙江 抚远 - 2013'},
			{latLng: [50.22, 127.53], name: '黑龙江 黑河 - 2013'},
			{latLng: [53.48, 122.37], name: '黑龙江 漠河 - 2013'},
			{latLng: [49.58, 117.47], name: '内蒙古 呼伦贝尔 满洲里 - 2013'},
			{latLng: [43.08, 115.13], name: '内蒙古 锡林郭勒 - 2013'},
			
			// 文莱 Brunei 
			{latLng: [5.0, 115.0], name: '文莱 斯里巴加湾 - 2008'},
			
			// 马来西亚 Malaysia
			{latLng: [5.53, 116.81], name: '马来西亚 沙巴 - 2008'},
			
			// 日本 Japan
			{latLng: [34.70, 135.50], name: '日本 大阪 - 2010'},
			{latLng: [35.70, 139.75], name: '日本 东京 - 2010'},
			
			// 中华民国 ROC / Taiwan 
			{latLng: [22.60, 120.30], name: '台湾 高雄 - 2012'},
			{latLng: [25.05, 121.50], name: '台湾 台北 - 2012'},
          ]
});