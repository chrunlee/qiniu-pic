/*
	@company 博育云
	@site : www.boyuyun.cn
	@author boyuyun
*/

byy.define(function(a){var b={hasLoad:!1,href:"modules/animate/animate.css",id:"byyanimatecss",load:function(){byy.addcss(b.href,function(){b.hasLoad=!0},b.id)},reload:function(){if(document.getElementById("byycss-"+b.id)){var a=document.getElementById("byycss-"+b.id);a.parentNode.removeChild(a)}b.load()}};b.load(),a("animate",b)});