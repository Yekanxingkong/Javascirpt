//设置网页名称
function SetTitleName(MyName){
   window.document.title = MyName;
}
function addMeta(name,content){//手动添加mate标签
   let meta = document.createElement('meta');
   meta.content = content;
   meta.name = name;
   document.getElementsByTagName('head')[0].appendChild(meta);
}
function addMetahttpequiv(httpequiv,content){//手动添加mate标签
   let meta = document.createElement('meta');
   meta.content = content;
   meta.name = httpequiv;
   document.getElementsByTagName('head')[0].appendChild(meta);
}



//-----------------------部署分辨率等必要参数-------------------------------
function SetHtmlViewport(){
   var setview = [
      "X-UA-Compatible",
      "Content-type",
   ];
   var setcontent = [
      "IE=edge",
      "text/html; charset=gb2312",
   ];
   for (var i=0;i<setview.length;i++){
      addMetahttpequiv(setview[i],setcontent[i]);
   }
}
//-------------------------------------------------------------------------

//-----------------------部署声明-------------------------------
function SetHtmlMeta(){
   var setmetaname = [
      "viewport",//自适应屏幕
      "keywords",//关键词
      "description",//描述
      "author",//作者
      "Copyright"//版权
   ];
   var setmetacontent = [
      "width=device-width, initial-scale=1, maximum-scale=1",//不可更改
      1,
      2,
      3,
      4
   ]
   for (var i=0;i<setmetaname.length;i++){
      addMeta(setmetaname[i],setmetacontent[i]);
   }
}
//-------------------------------------------------------------------------