function Dofirst()
{
   var button =document.getElementById('button');
   button.addEventListener("click",Savecrap,false);
  
}
function Savecrap()
{
    var count=0;
    if(document.getElementById('one').value)
    {
      const Username=document.getElementById('one').value;
      count++;
    }
    var email=document.getElementById('two').value;
    var phone=document.getElementById('three').value;
    var website=document.getElementById('four').value;
    var message=document.getElementById('five').value;
    if(count==1)
    {
    sessionStorage.setItem(Username,email,phone,website,message);
    }
    Display(Username,email,phone,website,message);
    document.getElementById('one').value="";
    document.getElementById('two').value="";
    document.getElementById('three').value="";
    document.getElementById('four').value="";
    document.getElementById('five').value="";
}
function Display(Username,email,phone,website,messagee)
{
    rightbox.innerHTML="We have Received:<br/>"+"<br/>Name: "+Username+"<br/><br/>Email Address: "+email+"<br/><br/>Phone: "+phone+"<br/><br/>WebSite: "+website+"<br/><br/>Message: "+messagee+"<br/><br/>Thank you.";
}


window.addEventListener("load",Dofirst,false);