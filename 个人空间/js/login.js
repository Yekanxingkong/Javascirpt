//---------------PHPLogin-------------------------
function UrlPHPLogin(){
  var PostUrl = 'http://'+ window.location.host +'/php/Login.php';
  return PostUrl
}
//---------------PHPLogin-------------------------



//---------------PHPLogin-------------------------
function UrlPHPLoginPostObject(){
  var PostObject = "userName=myUsername&password=myPassword";
  return PostObject
}
//---------------PHPLogin-------------------------


function UseName(){
  ChenkPost(UrlPHPLogin,UrlPHPLoginPostObject);

}




