var foto = document.querySelector('.fotos')
for (var i = 1; i <=8; i++) {
    if(i==7){
        foto.innerHTML += `<img src="img/baby${i}.webp">`
        continue
    }
    foto.innerHTML += `<img src="img/baby${i}.jpg">`
}


var anim = document.querySelector(".animatia")
function animatia(){
    if(window.innerWidth<=500){
        anim.style.cssText ="visibility:visible; transition:0.5s; width:100%;"
    }
    else(
        anim.style.cssText ="visibility:visible; transition:0.5s; width:500px;"
    )
    
}

function zero(){
    
    anim.style.cssText ="visibility:hidden; transition:0.5s; width:0;"
}