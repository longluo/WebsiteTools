// ==UserScript== 
// @name color 
// @match http://*/* 
// @match https://*/* 
// ==/UserScript==  document.body.innerHTML+='<style type=text/css>* {background-color:#cce8cf!important;}</style>'; var obj   var eType = new Array("td","div","table"); 
var mt;  
for (var i=0;i<eType.length;++i) {  
	obj = document.getElementsByTagName(eType[i]); 
	for(var j=0;j<obj.length;++j){  
		obj[j].style.backgroundColor = "#cce8cf!important"; 
	} 
	
	obj = null; 
}