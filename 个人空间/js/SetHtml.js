function createInput(inputName, inputType, inputclassname,inputID, inputValue) {
    var input = document.createElement(inputName);
    input.setAttribute('type', inputType);
    input.className = inputclassname;
    input.id = inputID;
    input.setAttribute("value", inputValue);
    document.body.appendChild(input);
  }
createInput("input",'text',"css-class-name","input2",'inputValue');
//类型、格式、指定的颜色类、名字、标签属性
$("<div>",{
    id:"mydiv2",//添加标签ID
    text:"Javascript DIV",
 }).css({
    "font-size": "14px" ,
    "font-weight": "bold",
    "color":"green",
 }).appendTo("body");

function nerdiv(){
    var newdiv = $("<input>",{
        id:"mtest1",//添加标签ID
        type:"submit",
        name:"text",
        value:"提交",
        onclick:"test()"
     }).css({
        "font-size": "14px" ,
        "font-weight": "bold",
        "color":"green",
     }).appendTo("body");
}

nerdiv();


function test(){
   var cont1 = document.getElementById("input2").value;
   var url = "http://" + window.location.host + "/php/helloworld.php";
   ChenkGet(url,cont1);
   GetResponseText("mydiv2");
   var a = "userName=myUsername&password=myPassword";
   ChenkPost("http://" + window.location.host + "/php/Login.php",a);
}