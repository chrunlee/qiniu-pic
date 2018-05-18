
var SK, AK, db, result, dbname, listname, files, uptoken;
var data = {
    title: "config",
    length: 120
};

function accesstoken(str,body){
    if(body != undefined){
        var sign = CryptoJS.HmacSHA1(str+"\n"+body, SK);
    }else{
        var sign = CryptoJS.HmacSHA1(str+"\n", SK);
    }
    var encoded_signed = sign.toString(CryptoJS.enc.Base64);
    var accessToken = AK+':'+safe64(encoded_signed);
    return accessToken;
}
var uploader,xhr;
var Main = {
	init : function(){
		min.get('config',function(error,val){
	        if(error){
	        	byy.win.msg('请先修改配置')
	        }else{
	            for(var i in val){
	                $('#'+i).val(val[i]);
	            }
	            window.AK = val.AK;
	            window.SK = val.SK;
	        }
	    });
	},
	getConfig : function (name){
    	return $('#'+name).val();
	},
	bind : function(){

		//paste 绑定事件
		document.getElementById('paste').addEventListener('paste',function(event){
			if(event.clipboardData.items[0].type.indexOf('image') > -1){
				var file = event.clipboardData.files[0];
				uploader.addFile(file, byy.guid()+'.png');
			}else{
				byy.win.msg('粘贴板中没有内容或不是图片');
				return false;
			}
			return false;
		});


		uploader = Qiniu.uploader({
		    runtimes: 'html5',
		    browse_button: 'file',
		    domain: Main.getConfig('domain'),
		    // container: 'drop',
		    max_file_size: '100mb',
		    //最大文件体积限制
		    max_retries: 3,
		    //上传失败最大重试次数
		    // dragdrop: true,
		    //开启可拖曳上传
		    // drop_element: 'drops',
		    //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
		    chunk_size: '4mb',
		    //分块上传时，每片的体积
		    auto_start: false,
		    //选择文件后自动上传，若关闭需要自己绑定事件触发上传
		    init: {
		        'FilesAdded': function(up, files) {
		            getdata(up, files);
		        },
		        'UploadProgress': function(up, file) {
		        },
		        'FileUploaded': function(up, file, info) {
		            var domain = up.getOption('domain');
		            var res = jQuery.parseJSON(info);
		            console.log(res);
		            //展示图片和复制
		            var path = domain + res.key;
		            $('#paste').html('<div style="text-align:center;"><img src="'+path+'" style="max-height:200px;display:inline-block;max-width:100%;width:auto;" /></div><div><p></p><a href="target="_blank" href="'+path+'">'+path+'</a><p><span class="byy-btn" data-href="'+path+'" byy-filter="copy">复制地址</span></p></div>');
		        },
		        'Error': function(up, err, errTip) {
		            $('#progress' + err.file.id).parent().remove();
		            var content = '<input class="form-control"  value="' + errTip + '"> ';
		            $('#' + err.file.id).append(content);

		        },
		        'Key': function(up, file) {
		            return file.name;
		            // return key
		        }
		    }
		});
	},
	getList : function(delimiter,prefix){// / ''
			var bucket = $('#bucket').val();
		    str = '/list?bucket='+bucket+'&marker=&limit=1000&delimiter='+delimiter+'&prefix='+prefix;
		    var accessToken = accesstoken(str);
		    xhr = new XMLHttpRequest();
		    xhr.open("POST",'http://rsf.qbox.me'+str,true);
		    xhr.setRequestHeader("Authorization","QBox "+accessToken);
		    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

		    if(prefix != ''){

		        xhr.onreadystatechange = function(){addliststyle(prefix)};
		    }else{
		        xhr.onreadystatechange = Main.addList;
		    }
		    xhr.send(null);
	},
	addList : function(){
		if (xhr.readyState==4) {
        if (xhr.status==200){
            var res = xhr.responseText;
            res = jQuery.parseJSON(res);
            console.log(res);
        }else{
            byy.win.msg('网络连接错误，错误码:'+xhr.status);
        }
    }
	},
	start : function(){
		//要直接复制进去
		Main.init();
		Main.bind();

		//点击复制
		$('body').on('click','[byy-filter="copy"]',function(ev){
			var href = $(this).data('href');
			var div = document.createElement('input');
			div.value = href;
			div.id = 'copytarget';
			$('body').append($(div));
			div.focus();
			div.select();
			document.execCommand('copy', false, null);
			div.remove();
			// ev.clipboardData.setData("Text", href);
			byy.win.msg('复制成功');
		});

		// $('#piclist').on('click','',function(){
		// 	console.log('showlist');
		// 	Main.getList('/','');
		// })
	}
};

function getdata(up, files) {
    for (var i = 0, file; file = files[i]; i++) {
        uptoken = getuptoken(file);
        up.setOption({
            'uptoken': uptoken
        });
        uploader.start();
    }
}

//获取UPTOKEN
function getuptoken(key) {
    var timestamp = Date.parse(new Date());
    timestamp = (timestamp / 1000) + 3600;
    var bucket = $('#bucket').val();
    var putPolicy = {
        'scope': bucket + ':' + key,
        'deadline': timestamp
    };
    var put_policy = JSON.stringify(putPolicy);
    //SETP 3
    var encoded = base64encode(utf16to8(put_policy));
    //SETP 4
    var hash = CryptoJS.HmacSHA1(encoded, SK);
    var encoded_signed = hash.toString(CryptoJS.enc.Base64);
    //SETP 5
    return AK + ":" + safe64(encoded_signed) + ":" + encoded;
}


byy.require(['jquery','win','page'],function(){
	Main.start();
})