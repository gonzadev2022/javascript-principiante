"use strict"

//Utilizando objeto date
//Practica: Creando reloj y determinando fecha

const agregarCeros = n => (n.toString().length > 1) ? n : "0" + n.toString() 

const obtenerHora = () =>{

    const tiempo = new Date();

    let horas = agregarCeros(tiempo.getHours());
    let minutos = agregarCeros(tiempo.getMinutes());
    let segundos = agregarCeros(tiempo.getSeconds());

    document.querySelector(".hora").textContent = horas;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;
}

const obtenerFecha = () =>{

    const fecha = new Date();

    let dia = agregarCeros(fecha.getDate())
    let mes = agregarCeros(fecha.getMonth()+1)
    let año = agregarCeros(fecha.getFullYear())

    document.querySelector(".dia").textContent = dia;
    document.querySelector(".mes").textContent = mes;
    document.querySelector(".año").textContent = año;
}

obtenerFecha()
obtenerHora()
setInterval(obtenerHora, 1000)







