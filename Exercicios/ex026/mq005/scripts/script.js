
const navMenu = document.getElementById("navMenu");
function clickMenu(){
    if(navMenu.style.display == "block"){
        navMenu.style.display = "none"
    }else{
        navMenu.style.display = "block"
    }
}

function mudouTamanho(){
    if(window.innerWidth >= 768){
        navMenu.style.display = "block";
    }else{
        navMenu.style.display = "none";
    }
}