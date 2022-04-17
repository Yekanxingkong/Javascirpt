setTimeout("inisetcall()",100);
//启动声明函数
function SetCallCss(){
    Csscalls = ["css/CssStyle.css"];
    for (var i=0;i<Csscalls.length;i++){
        SetCallCssloadStyle(Csscalls);
    }
}
//导入CSS
function SetCallCssloadStyle(Csscalls){
    var SetCallCss = document.createElement('link');
    SetCallCss.type = 'text/css';
    SetCallCss.rel = 'stylesheet';
    SetCallCss.href = Csscalls;
    var SetCallCsshead = document.getElementsByTagName('head')[0];
    SetCallCsshead.appendChild(SetCallCss);
}