
var buttons = document.querySelector(".buttons");
var arr =[7,8,9,"+",4,5,6,"-",1,2,3,"*",0,"00","=","/"]
for(var i = 0;i<arr.length;i++){
    if(typeof arr[i]=="number"){
        buttons.innerHTML += `<button type="button" onclick='vvod(${arr[i]})' class="num${arr[i]}">${arr[i]}</button>`
    }
    else if(i=="13"){
        buttons.innerHTML += `<button type="button" onclick='vvod(00)' class="num00">00</button>`
    }
    else if(i=="3"){
        buttons.innerHTML += `<button type="button" onclick='plus()' class="plus">${arr[i]}</button>`
    }
    else if(i=="7"){
        buttons.innerHTML += `<button type="button" onclick='minus()' class="minus">${arr[i]}</button>`
    }
    else if(i=="11"){
        buttons.innerHTML += `<button type="button" onclick='angam()' class="angam">${arr[i]}</button>`
    }
    else if(i=="14"){
        buttons.innerHTML += `<button type="button" onclick='havasar()' class="havasar">${arr[i]}</button>`
    }
    else if(i=="15"){
        buttons.innerHTML += `<button type="button" onclick='bajanc()' class="bajanac">${arr[i]}</button>`
    }
}
var val1 = 0
var val2 = 0 
var nshan =" "
function vvod(number){
    val2 = document.querySelector(".help").value = " "
    var nums = document.querySelector(".num"+number)
    var nums = document.querySelector(".numbers").value = document.querySelector(".numbers").value + number
}
function minus(){
    val1 = document.querySelector(".numbers").value
    document.querySelector(".numbers").value = ' '
    nshan ="-"
}

function plus(){
    val1 = document.querySelector(".numbers").value
    document.querySelector(".numbers").value = ' '
    nshan ="+"
}
function angam(){
    val1 = document.querySelector(".numbers").value
    document.querySelector(".numbers").value = ' '
    nshan ="*"
}
function bajanc(){
    val1 = document.querySelector(".numbers").value
    document.querySelector(".numbers").value = ' '
    nshan ="/"
}

function havasar(){
    val2 = document.querySelector(".numbers").value
    if(nshan=="-"){
        document.querySelector(".numbers").value = ' '
        var result =parseInt(val1) - parseInt(val2);
        
        var help = document.querySelector(".help").value = result
        nshan = " "
    }
    else if(nshan=="+"){
         document.querySelector(".numbers").value = ' '
         var result =parseInt(val1) + parseInt(val2);
        
         var help = document.querySelector(".help").value = result
         nshan = " "
     }
    else if(nshan=="/"){
        document.querySelector(".numbers").value = ' '
         var result =parseInt(val1) / parseInt(val2);
         var help = document.querySelector(".help").value = result
         nshan = " "
     }
    else if(nshan=="*"){
         document.querySelector(".numbers").value = ' '
         var result =parseInt(val1) * parseInt(val2);
        
         var help = document.querySelector(".help").value = result
         nshan = " "
     }
}

