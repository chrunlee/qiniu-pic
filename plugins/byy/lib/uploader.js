/*
	@company 博育云
	@site : www.boyuyun.cn
	@author boyuyun
*/

var logInfo=function(a){console&&console.log&&console.log("%cINFO : "+a,"color:red;")},noop=function(){},ext=["icon-file","icon-file-excel","icon-file-pdf","icon-file-word","icon-file-image","icon-file-text","icon-file-zip","icon-file-audio","icon-file-video","icon-file-ppt","icon-close","icon-checkbox-checked","icon-play","icon-pause"],config={extpre:"byyicon",extmap:{def:ext[0],xls:ext[1],xlsx:ext[1],pdf:ext[2],doc:ext[3],docx:ext[3],jpg:ext[4],jpeg:ext[4],png:ext[4],gif:ext[4],bmp:ext[4],txt:ext[5],zip:ext[6],rar:ext[6],mp3:ext[7],mp4:ext[8],avi:ext[8],m4v:ext[8],mpeg:ext[8],rmvb:ext[8],mpg:ext[8],flv:ext[8],mov:ext[8],ppt:ext[9],pptx:ext[9]},imageAccept:{title:"图片",extensions:"gif,jpg,jpeg,png,bmp",mimeTypes:"image/jpg,image/jpeg,image/png,image/bmp,image/gif"},fileAccept:{title:byy.lang.upload.acceptTitle,extensions:"doc,docx,xls,xlsx,ppt,pptx,pdf,txt,jpg,jpeg,png,bmp,gif,avi,mp4,m4v,mpeg,mpg,rmvb,mov,flv,rar,zip",mimeTypes:["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel,application/x-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/pdf","text/plain","image/jpg","image/jpeg","image/png","image/bmp","image/gif","video/x-msvideo","video/mp4","video/x-m4v","video/mpeg",".mpg","application/vnd.rn-realmedia","video/quicktime",".flv","video/x-flv","application/x-rar-compressed",".rar","application/x-zip-compressed"].join(",")}},getPath=byy.basePath,ready={csspath:getPath+"css/modules/uploader/default/uploader.css",swfpath:getPath+"css/modules/uploader/Uploader.swf",jsonpath:getPath+"css/modules/uploader/config.json",checkMd5:"/UploaderMd5_checkMd5.do"};!function(a,b){byy.require(["jquery","win","webuploader"],function(){var c=byy.jquery||c||jQuery,d=byy.win,e=byy.webuploader;b(a,c,d,e)})}(window,function(a,b,c,d,e){var f=(a.document,function(a){return new f.fn.init});f.fn=f.prototype={version:"1.0",constructor:f,init:function(){this.addCss();var a=this.guid();return this.id=a,this}},f.fn.init.prototype=f.fn,byy.extend(f,{getIcon:function(a){return a?(a=a.replace(".",""),a=(""+a).toLowerCase(),'<i class="'+config.extpre+" "+(config.extmap[a]?config.extmap[a]:config.extmap.def)+' "></i>'):'<i class="'+config.extpre+" "+config.extmap.def+' "></i>'}}),f.prototype.addCss=function(){byy.link(ready.csspath,null,"uploader")},f.prototype.getCfg=function(){return{dnd:null,disableGlobalDnd:!1,paste:null,selector:"",server:getPath+"css/modules/uploader/controller.jsp",accept:{},noaccept:[],size:5368709120,modal:!1,trunked:!1,auto:!1,md5:!1,progress:!1,compress:!1,skin:"default",duplicate:!1,onMd5:noop,onMd5Progress:noop,tips:"",onSuccess:noop,onError:noop,onComplete:noop}},f.prototype.guid=function(){var a=0;return function(b){for(var c=(+new Date).toString(32),d=0;d<5;d++)c+=Math.floor(65535*Math.random()).toString(32);return"up_"+c+(a++).toString(32)}()},f.prototype.getComplete=function(){var a=this,c=(a.webUpload,a.id),d=b("#"+c).parent();d.find(".byy-byywin-title").find(".title");return d.find(".file-block").size()==d.find(".file-block .status[complete]").size()},f.prototype.hideWin=function(){var a=this;a.getComplete()&&byy.win.min(a.winIndex,a.winConfig)},f.prototype.createUI=function(){var a=this,c=a.opts||{},d=a.id;return b("#"+d).length>0?1==c.hideDialog?b("#"+d).parent().addClass("hide"):(b("#"+d).parent().show(),b("#"+d).parent().attr("area")&&byy.win.restore(a.winIndex)):(a.winConfig={type:1,title:'<span class="title">'+byy.lang.upload.dialogTitle+"</span>"+(0==c.tips||null==c.tips?"":'<span class="pull-right"><a class="uploader-tip-a" href="javascript:;">'+byy.lang.upload.uploadTip+'<div class="uploader-tips">'+(c.tips||"")+"</div></a></span>"),maxmin:!0,content:"",shade:c.modal||!1,fixed:!0,move:!1,btn:[],id:a.id,skin:"uploader-win",restore:function(a){b("#"+d).parent().find(".uploader-tip-a").show()},min:function(a){a.css({right:"",bottom:""}),b("#"+d).parent().find(".uploader-tip-a").hide()},offset:"rb",cancel:function(a,c){return b("#"+d).parent().hide(),b("html").attr("style",""),!1},area:["600px","400px"]},a.winIndex=byy.win.open(a.winConfig),1==c.hideDialog&&b("#"+d).parent().addClass("hide")),a},f.prototype.getFileTypeIcon=function(a){if(byy.isNull(a))return'<i class="'+config.extpre+" "+config.extmap.def+'"></i>';a=a.toString().toLowerCase();var b=config.extmap[a]?config.extmap[a]:config.extmap.def;return'<i class="'+config.extpre+" "+b+'"></i>'},f.prototype.addFileUI=function(a){var c=this,d=c.formatSize,e=c.id,f=a.ext,g=a.name,h=d(a.size),i=a.id,j=b("#"+e),k=c.getFileTypeIcon(f),l=g,m=byy.device();m.ie&&m.ie<10&&(l=l.substring(0,10)+(l.length>10?"...":""));var n='<div class="file-block" id="'+i+'"><div class="pro"></div><span title="'+g+'" class="name">'+k+g+'</span><span class="status"></span><span class="size">'+h+'</span><span class="operate"><i class="'+config.extpre+" "+ext[10]+'" title="'+byy.lang.upload.removeFile+'"></i></span></div>';return j.append(n),c},f.prototype.updateError=function(a,c){var d=this,e=a.id,f=d.id,g=b("#"+f),h=g.find("#"+e),i=h.find(".status"),j=h.find(".pro"),k=h.find(".operate");j.length>0&&j.css("width","0%"),h.addClass("upload-error"),i.html('<span style="font-size:12px;">'+byy.lang.upload.uploadFailP+':<span style="color:red;">'+byy.lang.upload.uploadFail+(c<2?byy.lang.upload.uploadFailTry:"")+"</span></span>"),k.html('<i class="'+config.extpre+" "+ext[10]+'" style="color:red;" title="'+byy.lang.upload.removeFile+'"></i>')},f.prototype.updateStatus=function(a,c,d){var e=this,f=e.id,g=b("#"+f),h=a.id,i=g.find("#"+h),j=i.find(".status");return d&&(c='<i class="'+config.extpre+" "+ext[11]+'"></i>'+c,j.attr("complete",!0)),j.html(c),e},f.prototype.updateProgress=function(a,c){var d=this,e=d.id,f=b("#"+e),g=a.id,h=f.find("#"+g),i=h.find(".pro");return c=(100*c).toFixed(2),i.css("width",c+"%"),d},f.prototype.updateTitle=function(){var a=this,c=(a.webUpload,a.id),d=b("#"+c).parent(),e=d.find(".byy-byywin-title").find(".title"),f=d.find(".file-block").size(),g=d.find(".file-block .status[complete]").size();return e.html(byy.lang.upload.uploadInfo+':<span style="color:red;">'+g+"</span>/"+f),a},f.prototype.deleteFile=function(a){var c=this,d=c.webUpload,e=c.id,f=c.opts,g=b("#"+e),h=g.find("#"+a),i=d.getFile(a);return d.removeFile(a,!0),h.animate({opacity:0},500,function(){h.remove(),c.updateTitle()}),f.onDelete&&f.onDelete(i),c},f.prototype.successFile=function(a){var c=this,d=c.id,e=b("#"+d),f=a.id,g=e.find("#"+f);return g.find(".pro").css("width","0%"),g.find(".operate").html('<i class="'+config.extpre+" "+ext[10]+'" title="'+byy.lang.upload.removeFile+'"></i>'),c},f.prototype.changeOperate=function(a){var c=this,d=c.id;if(!c.opts.pause&&1)return c;var e=b("#"+d),f=a.id;return e.find("#"+f).find(".operate").html('<i class="'+config.extpre+" "+ext[13]+'" title="'+byy.lang.upload.pauseFile+'"></i>'),c},f.prototype.emptyOperate=function(a){var c=this,d=c.id,e=b("#"+d),f=a.id;return e.find("#"+f).find(".operate").html(""),c},f.prototype.stopFile=function(a){var c=this,d=c.id,e=c.opts;b("#"+d).find("#"+a).find(".operate").html('<i class="'+config.extpre+" "+ext[12]+'" title="'+byy.lang.upload.startFile+'"></i>');var f=c.webUpload;if(f.stop(a),e.onStop){var g=f.getFile(a);e.onStop(g)}return c},f.prototype.startFile=function(a){var c=this,d=c.id,e=c.opts;b("#"+d).find("#"+a).find(".operate").html('<i class="'+config.extpre+" "+ext[13]+'" title="'+byy.lang.upload.pauseFile+'"></i>');var f=c.webUpload;if(f.upload(a),e.onStart){var g=f.getFile(a);e.onStart(g)}return c},f.prototype.formatSize=function(a,b,c){var d;for(c=c||["B","KB","M","G","TB"];(d=c.shift())&&a>1024;)a/=1024;return("B"===d?a:a.toFixed(b||2))+d},f.prototype.listen=function(){var a=this,c=a.webUpload,d=a.opts,e=a.id,f=d.dialog;b("body").on("click","#"+e+" ."+ext[10],function(){var c=b(this),d=c.parent().parent(),e=d.attr("id");a.deleteFile(e)}),b("body").on("click","#"+e+" ."+ext[13],function(){var c=b(this),d=c.parent().parent(),e=d.attr("id");a.stopFile(e)}),b("body").on("click","#"+e+" ."+ext[12],function(){var c=b(this),d=c.parent().parent(),e=d.attr("id");a.startFile(e)}),c.on("beforeFileQueued",function(a){return 0===a.size?(c.trigger("error","F_EMPTY_FILE",a),!1):!d.onBefore||d.onBefore(a)}),c.on("fileQueued",function(e){if(logInfo("文件"+e.name+"加入队列"),d.onSelect){if(!1===d.onSelect(e))return!1}f&&(a.createUI(),a.addFileUI(e)),d.md5?(logInfo("开始校验文件MD5值"),c.md5File(e).progress(function(b){if(!f&&d.onMd5Progress)d.onMd5Progress(b);else{b=(100*b).toFixed(2);var c=byy.formatStr(byy.lang.upload.scan,b+"%");a.updateStatus(e,c)}}).then(function(g){!f&&d.onMd5&&d.onMd5(g),logInfo("获得文件MD5值 ("+g+")"),b.ajax({url:d.checkMd5||ready.checkMd5,type:"POST",data:{fileMd5:g},success:function(b){logInfo("获得查询结果("+b+")");var h=byy.json(b);if("string"==typeof h);else{var i=h.success;h.msg;if(i){var j=h.file,k="true"==j.issuccess||1==j.issuccess,l=j.chunks;k?(logInfo("服务器已存在该文件，停止上传"),c.skipFile(e),f?(a.updateStatus(e,byy.lang.upload.secondUpload,!0),a.successFile(e),a.updateTitle(),a.hideWin()):c.reset(),d.onSuccess&&(e.md5=g,d.onSuccess(e,{info:[j],msg:byy.lang.upload.secondUpload})),d.onComplete&&(e.md5=g,d.onComplete(e))):(logInfo("服务器已存在该文件，但是不完整，继续上传"),e.md5=g,e.hasPart=l.split(","),d.auto?c.upload(e):a.stopFile(e.id))}else logInfo("服务器不存在该文件，上传"),e.md5=g,d.auto?c.upload(e):a.stopFile(e.id)}},error:function(){a.updateError(e)}})})):d.auto?c.upload(e):f&&!d.auto?(c.upload(e),a.stopFile(e.id)):c.upload(e)}),c.on("uploadBeforeSend",function(b,c){var e=b.file,f=e.md5;for(var g in d.formData)c[g]||(c[g]=d.formData[g]);c.fileMd5=f||"",a.changeOperate(e)}),c.on("uploadSuccess",function(b,e){f||c.reset(),logInfo("文件上传成功"),d.onSuccess&&d.onSuccess(b,e),f&&(a.successFile(b),a.updateStatus(b,byy.lang.upload.uploadSuc,!0),a.updateTitle())}),c.on("error",function(c){var f={Q_EXCEED_NUM_LIMIT:byy.lang.upload.Q_EXCEED_NUM_LIMIT,Q_EXCEED_SIZE_LIMIT:byy.lang.upload.Q_EXCEED_SIZE_LIMIT,F_EXCEED_SIZE:byy.formatStr(byy.lang.upload.F_EXCEED_SIZE,a.formatSize(a.opts.fileSingleSizeLimit||a.opts.size)),Q_TYPE_DENIED:byy.lang.upload.Q_TYPE_DENIED,F_DUPLICATE:byy.lang.upload.F_DUPLICATE,F_EMPTY_FILE:byy.lang.upload.F_EMPTY_FILE};b("#"+e).parent().show(),a.updateTitle(),d.onError?d.onError(c,f[c]):byy.win.msg(f[c])}),c.on("uploadComplete",function(b){f&&a.hideWin(),d.onComplete&&d.onComplete(b)}),c.on("uploadError",function(a,b){});(new Date).getTime();return c.on("uploadProgress",function(b,c){logInfo("上传进度:"+100*c.toFixed(2));var e=(100*c).toFixed(2);a.updateStatus(b,'<span style="font-size:12px;">'+byy.formatStr(byy.lang.upload.progress,e+"%")+"</span>"),a.updateProgress(b,c),d.onProgress&&d.onProgress(b,100*c.toFixed(2)),e>=100&&(a.updateStatus(b,'<span style="font-size:12px;">'+byy.lang.upload.afterUpload+"</span>"),a.emptyOperate(b))}),c.on("uploadAccept",function(b,c){!1===c.success&&(a.updateError(b.file),d.onError?d.onError("server",c.msg):byy.isNull(c.msg)||byy.win.msg(c.msg))}),a},f.prototype.createPicker=function(){var a=this,b=a.guid(),c=document.createElement("div");return c.id=b,c.innerHTML=byy.lang.upload.btnText,document.body.appendChild(c),a.id=b,a},f.prototype.selectFile=function(){var a=this.id;return b("#"+a).find('input[type="file"]')[0].click(),thiz},f.prototype.resetQueue=function(){var a=this;return a.webUpload.reset(),a},f.prototype.create=function(){var a=this,c=a.opts;return logInfo("创建WEBUPLOADER实例"),c.md5&&(logInfo("注册Before-send事件"),d.Uploader.register({"before-send":"checkchunk"},{checkchunk:function(a){var c=a.file,d=b.Deferred(),e=c.hasPart||[],f=a.chunk,g=!1;if(e.length>0)for(var h=0;h<e.length;h++){var i=e[h];if((i=parseInt(i,10))===f){g=!0;break}}return g?(logInfo("分片"+f+"已跳过.."),d.reject()):(logInfo("分片"+f+"正在上传.."),d.resolve()),d.promise()}})),a.webUpload=d.create({swf:ready.swfpath,server:c.server,fileNumLimit:c.count,fileSizeLimit:c.fileSizeLimit,fileSingleSizeLimit:c.fileSingleSizeLimit||c.size,duplicate:1==c.duplicate,auto:1!=c.md5&&c.auto,pick:{id:c.selector,multiple:null==c.count||c.count==e||c.count>1},accept:c.accept,timeout:0,thumb:c.thumb||!1,compress:c.compress||!1,prepareNextFile:!0,chunked:c.md5||!1,chunkSize:c.chunkSize,chunkRetry:c.chunkRetry||3,threads:c.threads||3,formData:c.formData||{},fileVal:c.fileVal||"file",method:"POST"}),a.listen(),a},f.prototype.simpleImage=function(a){var b=this,c={count:1,accept:config.imageAccept,auto:!0,dialog:!1,md5:!1,progress:!1,compress:!1,formData:a.formData||{},fileVal:"file"},d=byy.extend(b.getCfg(),c);return a=byy.extend(d,a),b.opts=a,b.create(),b},f.prototype.simpleFile=function(a){var b=this,c={count:1,trunked:!1,accept:config.fileAccept,auto:!0,dialog:!1,md5:!1,progress:!1,compress:!1,formData:a.formData||{},fileVal:"file"},d=byy.extend(b.getCfg(),c);return a=byy.extend(d,a),b.opts=a,b.create(),b},f.prototype.multiImage=function(a){var b=this,c={accept:config.imageAccept,auto:!0,md5:!1,dialog:!0,hideDialog:!1,progress:!1,compress:!1,formData:a.formData||{},fileVal:"file"},d=byy.extend(b.getCfg(),c);return a=byy.extend(d,a),b.opts=a,b.create(),b},f.prototype.multiFile=function(a){var b=this,c={accept:config.fileAccept,auto:!0,dialog:!0,hideDialog:!1,md5:!1,progress:!1,compress:!1,formData:a.formData||{},fileVal:"file"},d=byy.extend(b.getCfg(),c);return a=byy.extend(d,a),b.opts=a,b.create(),b},byy.define(function(a){a("uploader",f)})});