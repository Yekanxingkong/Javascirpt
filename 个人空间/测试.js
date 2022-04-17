new Vue({
    el:'#app',
    data:{
      msg:'按钮',
      my_cls:'btn'
    },
    methods:{
      btnClick:function(){
        if(this.my_cls=='btn'){
          this.my_cls='botton'
        }else{
          this.my_cls='btn'
        }
      }
    }
  })


  <style>
    .btn {
      width: 100px;
      height: 40px;
      background: orange;
    }
    .botton {
      width: 200px;
      height: 80px;
      background-color: yellowgreen;
    }
  </style>



<script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
<div id="dianzan">
		<like>
			
		</like>
	</div>

Vue.component('like',{
     
    template:'<button @click="toggle_like">?{
 {like_count}}</button>',
    data:function () {
 
        return {
 
            like_count:10,
            liked:false,
        }
    },
    methods:{
 
        toggle_like:function(){
 
            if (!this.liked)
            this.like_count++;
        else
            this.like_count--;

        this.liked=!this.liked;
        }
    }
});
new Vue({
 
    el:'#dianzan',
});


$.post('/register',hash).then((response) =>{console.log(response)},
(request) => {
let {errors} = request.responseJSON;/*等价于----
-------let {errors} = JSON.parse(request.responseText)*/
if(errors.email  &&  errors.email === 'invalid'){
   $('#RegisterForm').find('[name = "email"]')
.siblings('.error').text('邮箱输错了');
}
})
})
4.服务

function name_myself(){
  
}




通过 id 查找 HTML 元素
document.getElementById("intro");
通过标签名查找 HTML 元素
getElementsByTagName("p")
通过类名找到 HTML 元素
document.getElementsByClassName("intro");
---------
添加属性：
obj.setAttribute('attr_name','attr_value');
获取属性值：
obj.getAttribute('attr_name');
删除属性：
obj.removeAttribute('attr_name');




function MyName(self){
    
  afterText();
}
function afterText(){    
  var createDiv = document.createElement("div");  
  createDiv.innerHTML="Testcreateadivelement!";  
  document.body.appendChild(createDiv); 
  console.log('1111');
}
function WindowShowRes(){
//获取html标签
var htmlObj = $("html"); 
console.log(htmlObj);
//获取屏幕分辨率
var dpi  = window.screen.height;

//获取需要调整样式的div标签
var layoutBox = document.getElementById("layoutBox");

console.log(layoutBox);
//判断分辨率
if(dpi < 1080) {
  //调整html标签样式
  
  htmlObj.css({"overflow-x": "hidden", "overflow-y": "hidden"});
  //当一个块级元素的内容在水平方向发生溢出时，CSS属性overflow-x决定应该截断溢出内容，或者显示滚动条，或者直接显示溢出内容。
/* 
visible
内容不会被截断，且可以显示在内容盒之外。
hidden
内容会被截断，且不会显示滚动条。
scroll
桌面浏览器总是显示滚动条，无论内容是否发生溢出。这可以避免滚动条的显示与消失所导致的元素尺寸不确定的问题。而打印机可能会打印溢出的内容。
auto
取决于浏览器本身。当内容发生溢出时，桌面浏览器如Firefox会显示滚动条。 
*/

/* 
overflow-y:
当一个块级元素（div元素、p元素之类的）的内容在垂直方向发生溢出时，
CSS属性overflow-y 决定如何处理溢出的内容。
隐藏溢出内容（hidden），或者显示滚动条（scroll），或者直接显示溢出内容（visible），或者让浏览器来处理（auto）。
具体的注释：https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-y
*/
  //调整div标签样式
layoutBox.setAttribute("style", "transform :scale(0.88) translate(-70px, -40px);"); 

  //将Id为"layoutBox"的div背景颜色设置为红色。
  layoutBox.style.background = "red"; 

}

}

$(function(){
  $("<input>",{
  type:'text',
  val:'text',
  function:function(){
      $(this).addClass('active');
  },
  focusout:function(){
      $(this).removeClass('active');
  }
}).appendTo("div");
})

function onreadystatechange(self){
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
     // readyState == 4 为请求完成，status == 200为请求陈宫返回的状态
     console.log(xmlhttp.responseText);
     return xmlhttp.responseText;
  }else{
     console("错误代码:onreadystatechange");
  }
}


/* 创建 XMLHttpRequest 对象 */ 
var xmlHttp; 
function GetXmlHttpObject(){ 
if (window.XMLHttpRequest){ 
// code for IE7+, Firefox, Chrome, Opera, Safari 
xmlhttp=new XMLHttpRequest(); 
}else{// code for IE6, IE5 
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
} 
return xmlhttp; 
} 


// -----------ajax方法-----------// 
function getLabelsPost(){ 
xmlHttp=GetXmlHttpObject(); 
if (xmlHttp==null){ 
alert('您的浏览器不支持AJAX！'); 
return; 
} 
var url="http://www.lifefrom.com/t/"+Math.random(); 
xmlhttp.open("POST",url,true); 
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
xmlhttp.send(); 
xmlHttp.onreadystatechange = getLabelsOK;//发送事件后，收到信息了调用函数 
} 
function getOkPost(){ 
if(xmlHttp.readyState==1||xmlHttp.readyState==2||xmlHttp.readyState==3){ 
// 本地提示：加载中/处理中 
} 
if (xmlHttp.readyState==4 && xmlHttp.status==200){ 
var d=xmlHttp.responseText; // 返回值 
// 处理返回值 
} 
} 
function ajaxok(){
  if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
// readyState == 4 为请求完成，status == 200为请求陈宫返回的状态
     document.getElementById("hakecc").innerHTML = xmlHttp.responseText;
// 表示数据已接收完成
     console.log(xmlHttp.responseText);
     return xmlHttp.responseText;
  }else{
     console.log("错误代码:onreadystatechange");
}




function chenkPost() {
var stu={
name:"冷荣富",
age:22,
sex:"男"
};
$.ajax({
type : "POST", //提交方式
url : "http://192.168.247.129/php/Login.php",//路径,www根目录下
data : {
"student" : stu
},//数据，这里使用的是Json格式进行传输
success : function(result) {//返回数据根据结果进行相应的处理
alert(result);
}
});
}






//get请求
document.querySelector(".getbtn").onclick= function(){
var xmlhttp = new XMLHttpRequest();
// get方法带参数是将参数写在url里面传过去给后端
xmlhttp.open("GET", "http://192.168.1.200:8080/php/test.php?name='zhansgang'&age=12", true);
xmlhttp.setRequestHeader("token","header-token-value");
xmlhttp.setRequestHeader("dingyi","header-dingyi-value");
xmlhttp.send();
// readyState == 4 为请求完成，status == 200为请求陈宫返回的状态
xmlhttp.onreadystatechange = function(){
 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
     console.log(xmlhttp.responseText);
 }
}
};

function ChenkPost(){ 
  var httpRequest = $.ajax
  (
     {
     async:false,
     type: "post",
     url: ,
     data: {
        
     },
     
     dataType: "text",//json
     success:mycall(Date),
     error : function() {
       alert('smx失败 ');
   },
   complete:function(responseText){
     alert(responseText);
  }
     }
  )

  //document.getElementById("test-3").innerHTML = Data + fn + type;
}
/* async作用
async. 默认是 true，即为异步方式，$.ajax执行后，会继续执行ajax后面的脚本，直到服务器端返回数据后，触发$.ajax里的success方法，这时候执行的是两个线程。

async 设置为 false，则所有的请求均为同步请求，在没有返回值之前，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。 */




  // 先创建一个对象实例

// 使用事件对象获取文本框ID的值
 //待发送URL
xmlHttp.onreadystatechange = ajaxok; // 判断浏览器状态栏 (接收玩数据触发的事件)
xmlHttp.open("get",url,false); // GET向服务器端发送数据
xmlHttp.send(null);
// 开始提交数据
// 回调函数 用于接收服务器返回过来的数据
ChenkPost();
}


<input type="text" id="url_text" name="text"/>
<input type="submit" id="ok" value="提交" onclick="ChenkGet()"/>    
<div width="300px" Heiget="300px" id="hakecc"></div>
<div class="postbtn btn">POST请求</div>
<div class="getbtn btn">GET请求</div>


function all(){
  return 15;
}
console.log(all);
