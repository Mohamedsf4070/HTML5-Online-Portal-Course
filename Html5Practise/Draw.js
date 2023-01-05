function DoFrist()
{
    var x=document.getElementById('canvas');
    canvas=x.getContext('2d');
    /*canvas.strokeRect(10,10,100,100);
    canvas.fillRect(10,10,100,100);
    canvas.clearRect(20,20,50,40);*/
    canvas.font=("bold 22px Tahoma");
    canvas.textAlign="start";
    canvas.fillText("start",10,30);
    canvas.translate(100,70);
    canvas.fillText("After Translate",0,0);
    canvas.rotate(7);
    canvas.fillText("After Rotating",0,0);
    canvas.scale(1.5,4);
    canvas.fillText("After scaling",0,20);
}
window.addEventListener("load", DoFrist,false);