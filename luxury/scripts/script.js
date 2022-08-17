

var anim = document.querySelector(".animatia")
function animatia(){

        anim.style.cssText ="visibility:visible; transition:1s; width:100%;"

}

function zero(){

        anim.style.cssText ="visibility:hidden; transition:1s; width:0;"

}

var select_h1 = document.querySelectorAll("h1");
var select_h2 = document.querySelectorAll("h2");
var select_p = document.querySelectorAll("p");
var select_li = document.querySelectorAll("li");
for(var i=0;i<select_h1.length; i++){
        var rand= parseInt(Math.random()*30)
        select_h1[i].style.cssText =`font-size: ${rand+"px"};`
}
for(var i=0;i<select_h2.length; i++){
        var rand= parseInt(Math.random()*30)
        select_h2[i].style.cssText =`font-size: ${rand+"px"};`
}
for(var i=0;i<select_p.length; i++){
        var rand= parseInt(Math.random()*30)
        select_p[i].style.cssText =`font-size: ${rand+"px"};`
}
for(var i=0;i<select_li.length; i++){
        var rand= parseInt(Math.random()*30)
        select_li[i].style.cssText =`font-size: ${rand+"px"};`
}
