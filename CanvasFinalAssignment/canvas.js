var count=100;
let angle=0;
var x=document.getElementById('Canvas1');
var test1=['Deliver','innovation','with','ease.'];
let a='a';
const context=x.getContext('2d');
var window_height=window.innerHeight;
var window_width=window.innerWidth;

x.width=window_width;
x.height=window_height;
x.style.background="#00bfff";
context.font=("bold 72px  'Exo 2', sans-serif");
context.fillText(a,0,0);
class squares
{
    constructor(xpos,ypos)
    {
      this.Xpos=xpos;
      this.Ypos=ypos;
    }
    Draw(context)
    {
        context.beginPath(); 
        context.fillStyle="white";
        context.fillRect(this.Xpos,this.Ypos,50,50);
        context.closePath();
        
    }
    Draw1(context)
    {
      context.beginPath();
        context.fillStyle="#00bfff";
        context.fillRect(this.Xpos,this.Ypos,50,50);
        context.closePath();
    }
    Rotate(angle)
    {
      context.beginPath();
        context.fillStyle="#00bfff";
        context.translate(window_width/2,window_height/2);
        context.rotate(angle);
        context.fillRect(0,0,50,50);
        context.translate(-window_width/2,-window_height/2);
        
        context.closePath();
        
    }
    Clear(context)
    {
      context.clearRect(0,0,window_width,window_height);
    }
    Rotate1()
    {
      context.beginPath();
      context.fillStyle="White";
      context.translate(window_width/2+100,window_height/2+80);
      context.rotate(51);
      context.fillRect(0,0,50,50);
      context.translate(-window_width/2+100,-window_height/2+80);
      context.rotate(-51);
      context.rotate(-angle);
      context.rotate(-angle);
      context.rotate(-angle);
      context.closePath();
      
    }
}
FirstRotation();
SecoundRotation();
ThirdRotation();
setTimeout(function()
{
  context.translate(-150,-450);
  context.fillStyle="#00bfff";
  context.fillRect(0,0,800,800);
  context.fillStyle="white";
  context.fillRect(380,150,35,35);
  context.fillRect(420,150,35,35);
  context.fillRect(380,190,35,35);
  context.fillRect(420,190,35,35);
  context.fillRect(460,190,35,35);
  context.fillRect(380,230,35,35);
  context.fillRect(420,230,35,35);
  context.fillRect(460,230,35,35);
  context.translate(490,130);
  context.rotate(51);
  context.fillRect(0,0,35,35);
  context.rotate(-51);
  context.translate(-490,-130);
  context.fillText("Syncfusion",500,260);
  let place=380;
  setTimeout(function(){Write();},500)
  let place1=513;
  setTimeout(function(){Write1();},1000)
  let place2=695;
  setTimeout(function(){Write2();},1500)
  let place3=778;
  setTimeout(function(){Write3();},2000)
  function Write()
  {
    context.font=("normal 35px arial");
    context.fillText(test1[0],place,320);
  }
 function Write1()
 {
  context.fillText(test1[1],place1,320);
 }
 function Write2()
 {
  context.fillText(test1[2],place2,320);
 }
 function Write3()
 {
  context.fillText(test1[3],place3,320);
 }
},2000)


function FirstRotation()
{
let squareNine=new squares(window_width/2+60,window_height/2+60,50,50);
setTimeout(function(){squareNine.Rotate(angle);},count);
count+=100;
let squareSeven=new squares(window_width/2-60,window_height/2+60,50,50);
setTimeout(function(){squareSeven.Draw(context);},count);
count+=100;

angle+=100;
count+=100;
let squareFour=new squares(window_width/2-60,window_height/2,50,50);
setTimeout(function(){squareFour.Draw(context);},count);
count+=100;
let squareOne=new squares(window_width/2-60,window_height/2-60,50,50);
setTimeout(function(){squareOne.Draw(context);},count);
count+=100;
let squareEight=new squares(window_width/2,window_height/2+60,50,50);
setTimeout(function(){squareEight.Draw(context);},count);
count+=100;


setTimeout(function(){squareSeven.Clear(context);},count);

let squareFour1=new squares(window_width/2-60,window_height/2,50,50);
setTimeout(function(){squareFour1.Draw1(context);},count);
count+=100;
let squareOne1=new squares(window_width/2-60,window_height/2-60,50,50);
setTimeout(function(){squareOne1.Draw1(context);},count);
count+=100;
let squareEight1=new squares(window_width/2,window_height/2+60,50,50);
setTimeout(function(){squareEight1.Draw1(context);},count);
}
function SecoundRotation()
{
let squareNine=new squares(window_width/2+60,window_height/2+60,50,50);
setTimeout(function(){squareNine.Rotate(angle);},count);
let squareSeven=new squares(window_width/2-60,window_height/2+60,50,50);
setTimeout(function(){squareSeven.Draw(context);},count);
let squareFour=new squares(window_width/2-60,window_height/2,50,50);
setTimeout(function(){squareFour.Draw(context);},count);
let squareOne=new squares(window_width/2-60,window_height/2-60,50,50);
setTimeout(function(){squareOne.Draw(context);},count);
let squareEight=new squares(window_width/2,window_height/2+60,50,50);
setTimeout(function(){squareEight.Draw(context);},count);
count+=100;
let squareCenter=new squares(window_width/2,window_height/2,50,50);
setTimeout(function(){squareCenter.Draw(context);},count);
count+=100;
let squareTwo=new squares(window_width/2,window_height/2-60,50,50);
setTimeout(function(){squareTwo.Draw(context);},count);
let squareThree=new squares(window_width/2+60,window_height/2-60,50,50);
setTimeout(function(){squareThree.Draw(context);},count);
count+=100;
context.clearRect(0,0,x.width,x.height);
let squareFour1=new squares(window_width/2-60,window_height/2,50,50);
setTimeout(function(){squareFour1.Draw1(context);},count);
let squareOne1=new squares(window_width/2-60,window_height/2-60,50,50);
setTimeout(function(){squareOne1.Draw1(context);},count);
setTimeout(function(){squareSeven.Clear(context);},count);
let squareEight1=new squares(window_width/2,window_height/2+60,50,50);
setTimeout(function(){squareEight1.Draw1(context);},count);
let squareCenter1=new squares(window_width/2,window_height/2,50,50);
setTimeout(function(){squareCenter1.Draw1(context);},count);
let squareTwo1=new squares(window_width/2,window_height/2-60,50,50);
setTimeout(function(){squareTwo1.Draw1(context);},count);
let squareThree1=new squares(window_width/2+60,window_height/2-60,50,50);
setTimeout(function(){squareThree1.Draw1(context);},count);
count+=100;

}
function ThirdRotation()
{
  let squareNine=new squares(window_width/2+60,window_height/2+60,50,50);
setTimeout(function(){squareNine.Rotate(angle);},count);

  let squareSeven=new squares(window_width/2-60,window_height/2+60,50,50);
setTimeout(function(){squareSeven.Draw(context);},count);

let squareFour=new squares(window_width/2-60,window_height/2,50,50);
setTimeout(function(){squareFour.Draw(context);},count);

let squareOne=new squares(window_width/2-60,window_height/2-60,50,50);
setTimeout(function(){squareOne.Draw(context);},count);

let squareEight=new squares(window_width/2,window_height/2+60,50,50);
setTimeout(function(){squareEight.Draw(context);},count);
let squareCenter=new squares(window_width/2,window_height/2,50,50);
setTimeout(function(){squareCenter.Draw(context);},count);
let squareTwo=new squares(window_width/2,window_height/2-60,50,50);
setTimeout(function(){squareTwo.Draw(context);},count);
let squareThree=new squares(window_width/2+60,window_height/2-60,50,50);
setTimeout(function(){squareThree.Draw(context);},count);
count+=200;
let squaresix=new squares(window_width/2+60,window_height/2,50,50);
setTimeout(function(){squaresix.Draw(context);},count);
count+=100;
let squarenine=new squares(window_width/2+60,window_height/2+60,50,50);
setTimeout(function(){squarenine.Draw(context);},count);
count+=100;
let squarenine1=new squares(window_width/2+60,window_height/2+60,50,50);
setTimeout(function(){squarenine1.Draw1(context);},count);
count+=100;
let squarenine2=new squares(window_width/2+60,window_height/2+60,50,50);
setTimeout(function(){squarenine2.Rotate1(context);},count);
count+=100;

}

