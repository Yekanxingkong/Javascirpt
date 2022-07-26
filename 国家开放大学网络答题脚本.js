var XIN = 148972;//最小数字，获取video;>
var MAX = 148999;//最大数字，
var match = 0;
var a = XIN;
var openedWindow;
var time = 60000 * 10;//每分钟60，看一下平均时长
function openWindow() {
  a = a + 1;
  match = a;
  var url = "https://lms.ouchn.cn//api/uploads/video/" + match + "?preview=true";
  openedWindow = window.open(url,"_hank"+String(match));
  console.log(url);
  setTimeout(function closewin(){
    if(openedWindow){
        openedWindow.close();
    }else{
        return 0;
    }
    
    if(a == MAX){
        return 0;
    }else{
        openWindow();
    }
  },time);
}
openWindow();



var XIN = 148977;//最小数字，获取video;>
var MAX = 148999;//最大数字，
var match = 0;
for(var i = XIN;i <= MAX;i++){
    match = i;
    var url = "https://lms.ouchn.cn//api/uploads/video/" + match + "?preview=true";
    console.log(url);
    window.open(url,"_hank"+String(match));
}



document.onmousedown = function(event) {
    // var event = event || window.event//兼容ie低版本的
    if (event.button == 0) {
        //鼠标左键 
        alert("您点击了鼠标左键!");
    } else if (event.button == 2) {
        //鼠标右键 
        alert("您点击了鼠标右键!");
    } else if (event.button == 1) {
        //鼠标中键 
        alert("您点击了鼠标中键!");
    } else if (event.button == 3) {
        //鼠标侧键3 
        alert("您点击了鼠标侧键(后退)");
    } else if (event.button == 4) {
        //鼠标侧键4 
        alert("您点击了鼠标侧键(前进)");
    }
}


document.onmousedown = function(event) {
    if (event.button == 0) {
        var a = document.getElementsByTagName("BUTTON");
        for (var i = 0; i < a.length; i++) {
        if(a[i].innerHTML=="开始答题" ||)
        a[i].disabled=false;
        a[i].click();
        }
    }else{
        return 0;
    }
}
document.onmousedown = function(event) {
    if (event.button == 2) {
        var a = document.getElementsByClassName("mvp-toggle-play mvp-first-btn-margin");
        for (var i = 0; i < a.length; i++) {
        a[i].click();
        } 
    }
}

setInterval(function () {

    var current_video = document.getElementsByTagName('video')[0]
    
    current_video.play()
}


setTimeout(function closewin(){
    var a = document.getElementsByClassName("mvp-toggle-play mvp-first-btn-margin");
    for (var i = 0; i < a.length; i++) {
    a[i].click();
    } 
  },100);