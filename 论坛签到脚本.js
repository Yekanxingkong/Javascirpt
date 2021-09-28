// ==UserScript==
// @name         签到助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       夜看星空
// @match        *://www.yunzmb.com/*
// @match        *://www.52pojie.cn/*
// @match        *://www.xuepojie.com/*
// @icon         http://www.hacg.me/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    function UserSignToday(){
        var lastSignDate = window.localStorage.getItem('key');
        if(lastSignDate){
            return new Date(lastSignDate).toDateString() === new Date().toDateString();
        }else{
            return false;
        }
    }
    function getHref(HrefUser){
        var hrefArr = document.getElementsByTagName('a'); //获取这个页面的所有A标签
        for( var i=0; i<hrefArr.length; i++ ){
            hrefURL = hrefArr[i].href;
            if(hrefURL = HrefUser){
              return hrefURL;
            }else{
            }
        }
      }
    function TodaySign(){
        setTimeout(UserSignToday,"2000")
        if(!UserSignToday()){//这里可以加个判断，确定是哪个网站
            var myCars=new Array();
            myCars[0]='home.php?mod=task&do=apply&id=2';//吾爱破解
            myCars[1]='plugin.php?id=dsu_amupper&ppersubmit=true&formhash=235e3006';//云中漫步
            myCars[2]='zb7com_sign-sign.html?signop=sign&formhash=4aea440d';//学破解
        //ExitWhenA=循环整数A
    for (ExitWhenA=0;ExitWhenA<myCars.length;ExitWhenA++){
        let UserImg = getHref(myCars[ExitWhenA]);
        console.log(UserImg);
        //<img class="qq_bind" src="https://static.52pojie.c…tic/image/common/qds.png" alt="" align="absmiddle">
        if(UserImg){
            new Ajax().getHTML(UserImg);
            console.log("签到完毕");
            window.localStorage.setItem('key',new Date().toDateString());
        }else{
        }
    
    }
        }
    
    }
    TodaySign();
    })();