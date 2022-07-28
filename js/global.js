
let goTop = document.querySelector(".goTop");

cargarListener();
function cargarListener(){

    //Scroll
    goTop.addEventListener("click",topFunction);
    
    //topShow
    window.addEventListener('scroll',()=>{
        const scrollPX = window.scrollY;
        //console.log(scrollPX);
        if(scrollPX > 200){
            goTop.style.display="flex";      
        }else{
            goTop.style.display="none";
        }
    });
}

function topFunction(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}
