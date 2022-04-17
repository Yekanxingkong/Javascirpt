//如何调用JS，引用CSS
//新建标签元素
//Jquery、CSS的使用
window.onload = function(){
    //window.onload事件是指文档结构包括js加载完毕,才会触发执行函数方法  
    SetCallJS(); 
}
document.write("<script language=javascript src='js/XMLHttpRequest.js'></script>"); 
//导入JS的另一种方法,在开局声明不然会有冲突，无法加载标签的时候就是这个覆盖了
var jquery = document.createElement('script');
jquery.src = 'js/jquery-3.6.0.js';
document.getElementsByTagName('head')[0].appendChild(jquery);
var vue = document.createElement('script');
vue.src = 'js/vue-2.6.14.js';
document.getElementsByTagName('head')[0].appendChild(vue);
function SetCallJS(){
    calls=[
    "login.js",
    //设置登陆信息，和服务器交换
    "MyName.js",
    //设置的网页信息
    "postheards.js",
    //设置POST传输信息
    "getheards.js",
    //设置get传输信息
    "SetHtml.js",
    //设置网页布局
    "ledCss.js"
    //设置颜色和大小
];
    for (var i=0;i<calls.length;i++){
        var setcalls = document.createElement('script');
        setcalls.src = 'js/' + calls[i];
        document.getElementsByTagName('head')[0].appendChild(setcalls);    
    }
}

function inisetcall(){
    SetCallCss();
    SetTitleName("hello world!!!");
//设置网页名称
}