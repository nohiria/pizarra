var d=document.getElementById("area_de_dibujo");
var lienzo= d.getContext("2d");
var posicion= {x:0,y:0};
lienzo.strokeStyle= "black";
var dibujando= false;


function posicionMouseDedo(d,evento){
    var ClientRect=d.getBoundingClientRect();
    var toque= evento.touches ? evento.touches[0]: evento;
    return{
        x: Math.round(toque.clientX-ClientRect.left),
        y: Math.round(toque.clientY-ClientRect.top)
    };
}

function empezarDibujo(evento){
    posicion=posicionMouseDedo(d,evento);
    dibujando=true;
    lienzo.beginPath();
}

function dibujarLinea(evento){
    if (dibujando==true){
        lienzo.moveTo(posicion.x,posicion.y);
        posicion=posicionMouseDedo(d,evento);
        lienzo.lineTo(posicion.x,posicion.y);
        lienzo.stroke();
    }
}

function terminarDibujo(evento){
    dibujando=false;
}

d.addEventListener("mousedown",empezarDibujo);
d.addEventListener("touchstart",empezarDibujo);
d.addEventListener("mousemove",dibujarLinea);
d.addEventListener("touchmove",dibujarLinea);
d.addEventListener("mouseup",terminarDibujo);
d.addEventListener("touchend",terminarDibujo);
d.addEventListener("mouseout",terminarDibujo)