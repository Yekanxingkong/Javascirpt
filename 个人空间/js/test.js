//新建div标签元素
function afterText(){    
    //原生js写法:
        var div = document.createElement("div");
        div.id = "mydiv1";//添加标签ID
        div.style.font = "bold 14px" ;
        div.style.color = "green";
        div.innerHTML = "Javascript DIV";
        document.body.appendChild(div);  
    //JQuery写法:
    $("<div>",{
        id:"mydiv2",//添加标签ID
        text:"Javascript DIV",
     }).css({
        "font-size": "14px" ,
        "font-weight": "bold",
        "color":"green",
     }).appendTo("body");
    //简洁写法:
    var createDiv = document.createElement("div");  
    createDiv.innerHTML="Testcreateadivelement!";  
    document.body.appendChild(createDiv); 
    //载人CSS样式，分别为HTML
    var parentDiv = document.createElement("div");//创建父div
    parentDiv.innerHTML="CssStyle1"; 
    parentDiv.className="CssStyle1";//给父div设置class属性
    document.body.appendChild(parentDiv); 
    //载人CSS样式，分别为text
    var sonDiv = document.createElement("div");//创建子div
    sonDiv.innerText="sonDiv内容text";//给子sonDiv的文本节点赋值
    sonDiv.className="CssStyle2";//给子sonDiv设置class属性
    document.body.appendChild(sonDiv);//将子sonDiv赋值给父parentDiv
    HtmlClassByID();
    }
    //为标签添加ID
    function HtmlClassByID(){
    //JavaScript原生写法:用class来获取标签，并用循环函数来构建标签ID    
        var eles = document.querySelectorAll('.CssStyle1');//可以用来选取父标签下的子元素.CssStyle2
        eles.forEach(function(v, i) {
            v.setAttribute('id', 'test-' + (i + 1))
        })
    //Jquery的写法:用class来获取标签，并用循环函数来构建标签ID
        $(".CssStyle2").each(function(i) {//可以用来选取父标签下的子元素.CssStyle2
            $(this).attr('id', 'test-' + (i + 2))
        })
    
    /* 选取所有元素
        var div = document.documentElement.innerHTML = "Testcreateadivelement!";
        div.innerHTML = "hello world"; 
    */
    //获取所有的div标签然后进行统一修改
        var box2 = document.getElementsByTagName('div');
        for(var i = 0; i < box2.length; i++){
            //console.log(i);
            if(box2[i].innerText == "Testcreateadivelement!"){//循环是从0开始的，（i == 2）也是可以的
                box2[i].innerText = "hello world";
                box2[i].id = "test-3";
            }else{
                //console.log('this is not my find');
            }
    
        }
    }
