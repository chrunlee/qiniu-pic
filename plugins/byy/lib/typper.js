/*
	@company 博育云
	@site : www.boyuyun.cn
	@author boyuyun
*/

byy.define("jquery",function(a){var b=function(a,b){b=b||75;var c=$(a),d=c.html(),e=0;c.html("");var f=setInterval(function(){"<"==d.substr(e,1)?e=d.indexOf(">",e)+1:e++,c.html(d.substring(0,e)+(1&e?"_":"")),e>=d.length&&(c.html().endWith("_")&&c.html(c.html().substring(0,c.html().length-1)),clearInterval(f))},b)};byy.fn.extend({typper:function(a){var c=this.$ele;b(c,a)}}),a("typper",b)});