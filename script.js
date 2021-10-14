var sec=document.getElementById("s");
var min=document.getElementById("m");
var hou=document.getElementById("h");
var d=new Date();
var i=270+(6*d.getSeconds());
var j=270+(6*d.getMinutes());
var k=270+(30*d.getHours());
var c=0;
function fun() {
    i+=6;
    i=i%360;
    if(i==270) {
        j+=6;
        c++;
    }
    j=j%360;
    if(c==60) {
        k+=30;
        c=0;
    }
    k=k%360;
    sec.style.transform='rotate('+i+'deg)';
    min.style.transform='rotate('+j+'deg)';
    hou.style.transform='rotate('+k+'deg)';
}
sec.style.transform='rotate('+i+'deg)';
min.style.transform='rotate('+j+'deg)';
hou.style.transform='rotate('+k+'deg)';
var f=setInterval("fun()",  1000);
