function Dofirst()
{
   var button =document.getElementById('button');
   button.addEventListener("click",Savecrap,false);
  
}
function Savecrap()
{
    var username=document.getElementById('One').value;
    var password=document.getElementById('Two').value;
    sessionStorage.setItem(username,password);
    Display(username);
}
function Display(username)
{
    var rightbox=document.getElementById('rightbox');
    var password=sessionStorage.getItem(username);
    rightbox.innerHTML="Username:"+username+"<br/>password:"+password;
}
window.addEventListener("load",Dofirst,false);