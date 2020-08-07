const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () =>{
    const andhoFondo = (window.pageYOffset / altura) * 300;
    if(andhoFondo <=100){
        fondo.style.width = andhoFondo + '%';
    }
}