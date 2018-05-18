var SK, AK,result,domain;
var Option = {
    data : {
        title: "config",
        AK:'',
        SK:'',
        domain:'',
        pipeline:'',
        bucket:'',
        length: 120,
        waterimg: '',
        dissolve: '',
        gravity: ''
    },
    setData : function(val){
        for(var i in val){
            $('#'+i).val(val[i]);
        }
    },
    getData : function(){
        min.get('config',function(error,val){
            if(error){
                min.set('config', Option.data);
                Option.setData(Option.data);
            }else{
                Option.setData(val);
            }
        });
    },
    bind : function(){
        $("#save").on('click','',function(){
           for(var i in Option.data){
                Option.data[i] = $('#'+i).val();
            }
            min.set('config', Option.data,function(error){
                if(error){
                    byy.win.msg('保存失败');
                }else{
                    byy.win.msg('保存成功');
                }
            }); 
        })
    },
    start : function(){
        Option.getData();
        Option.bind();
    }
};
byy.require(['jquery','win'],function(){
    Option.start();
});
