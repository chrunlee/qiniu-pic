/*
	@company 博育云
	@site : www.boyuyun.cn
	@author boyuyun
*/

byy.define("jquery",function(a){function b(a){return e.raw?a:decodeURIComponent(a.replace(d," "))}function c(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")),a=b(a);try{return e.json?JSON.parse(a):a}catch(a){}}$=window.jQuery||byy.jquery;var d=/\+/g,e=$.cookie=function(a,d,f){if(void 0!==d){if(f=$.extend({},e.defaults,f),"number"==typeof f.expires){var g=f.expires,h=f.expires=new Date;h.setDate(h.getDate()+g)}return d=e.json?JSON.stringify(d):String(d),document.cookie=[e.raw?a:encodeURIComponent(a),"=",e.raw?d:encodeURIComponent(d),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var i=document.cookie.split("; "),j=a?void 0:{},k=0,l=i.length;k<l;k++){var m=i[k].split("="),n=b(m.shift()),o=m.join("=");if(a&&a===n){j=c(o);break}a||(j[n]=c(o))}return j};e.defaults={},$.removeCookie=function(a,b){return void 0!==$.cookie(a)&&($.cookie(a,"",$.extend({},b,{expires:-1})),!0)},a("cookie",{cookie:function(a,b,c){$.cookie(a,b,c)},removeCookie:function(a,b){$.removeCookie(a,b)}})});