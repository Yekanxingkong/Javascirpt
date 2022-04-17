var XmlHttp;
function createXmlHttpRequestObject(){
    if(window.ActiveXobject){ // 判断是否是ie浏览器
      try { // try开始 
          xmlhttp = new ActiveXobject("Microsoft.XMLHTTP"); // 使用ActiveX对象创建ajax
      }catch(e){
          xmlHttp = false;
        } // try end
  }else{   //Chrome、FireFox等非ie内核
      try{
        xmlHttp = new XMLHttpRequest(); //视为非ie情况下
      }catch(e){
          xmlHttp = false; // 其他非主流浏览器
      }
    } // 判断结束,如果创建成功则返回一个DOM对象,如果创建不成功则返回一个false         
        if(xmlHttp)
        {
            return xmlHttp;
        }else{
            alert("对象创建失败,请检查浏览器是否支持XmlHttpRequest!");
        }
} // 函数体
//-------------------GET  PHP  ChenkGet--------------------
function ChenkGet(GetUrl,GetCont){//PHP的地址，需要发送的数据
    createXmlHttpRequestObject();
    xmlHttp.onreadystatechange = ajaxok; // 判断浏览器状态栏 (接收玩数据触发的事件)
    xmlHttp.open("get",GetUrl + "?type=" + GetCont,false); // GET向服务器端发送数据
    xmlHttp.send(null);
}
function ajaxok(){
    if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
    // readyState == 4 为请求完成，status == 200为请求陈宫返回的状态     
    // 表示数据已接收完成
      return xmlHttp.responseText;
    }else{
      console.log("错误代码:ajaxok");
      return false;
    }
} 
//-------------------------------------------------------

//----------------返回后的服务器数据---------------------
function GetResponseText(GetLabel){//需要显示返回数据的标签ID
  document.getElementById(GetLabel).innerHTML = xmlHttp.responseText;
}
//-------------------------------------------------------