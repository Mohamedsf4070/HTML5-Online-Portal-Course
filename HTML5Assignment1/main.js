
function Store(e)
{
  console.log('hrjd')
  e.preventDefault();
  var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var Phone = document.getElementById('phone').value;
    var Website = document.getElementById('website').value;
    var text=document.getElementById('five').value;
    Display(Name,Email,Phone,Website,text);
}
function Display(Name,Email,Phone,Website,text)
{
  let rightbox=document.getElementById('rightbox');
  rightbox.innerHTML="We Have Received"+"<br><br>Name:"+" "+Name+"<br><br>Email:"+" "+Email+"<br><br>Phone:"+" "+Phone+"<br><br>Website:"+Website+"<br><br>Message:"+text; 
 
}

