"use strict"

//Utilizando operador spread

const concatenar = ()=>{

    //1. Contantenando arrays
    let array1 = ["valor1", "valor2", "valor3"]
    let array2 = ["valor4", "valor5", "valor6"]
    let array3 = [...array1, ...array2]         

    console.log(array1)
    console.log(array2)
    console.log(array3)

    //2. Descompone los arrays en sus elementos individuales
    console.log(...array1)
    console.log(...array2)
    console.log(...array3)
}


//3. Utilizando operador spread y parametro rest

const sumar = (...numeros) => {

    let sumatoria = 0

    for (let n of numeros){
        sumatoria += n
    }

    return sumatoria
}

//Caso de prueba
let lista = [5, 10, 15, 20, 25, 25]

let resultado = sumar(...lista)
console.log(resultado)




