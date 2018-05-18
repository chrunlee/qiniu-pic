/*
	@company 博育云
	@site : www.boyuyun.cn
	@author boyuyun
*/

byy.define("jquery",function(a){var b=function(a){var b=$(window).scrollTop(),c=$("body").find(".list-panel .byy-panel-title");if(c.length>0){c=$(c.get(0));var d=c.parent().width(),e=parseInt(c.attr("top")?c.attr("top"):c.attr("top",c.offset().top)&&c.offset().top,10);c.height();c.css("width",d),b>e?c.addClass("fixed"):c.removeClass("fixed")}},c={version:"1.0",name:"博育云智慧教育服务平台",hide:b};$(window).on("scroll",b);var d=function(){byy(".list-panel").list(),b()};$(window).resize(d),a("school",c)});