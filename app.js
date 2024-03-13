//Juego del numero secreto con javascript

let NumeroSecreto = 0;
let intentos = 0;
let NumeroSorteadoArray = [] ;
let NumeroMaximo = 10;
// ---------------------------------------


//Funcion para Asignar texto
function AsignarElemento(elemento, description){
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = description;
}

// Funcion numero secreto
function GenerarNumeroSecreto(){
    let NumeroRandomGenerado = Math.floor(Math.random()*NumeroMaximo) +1; // seran del 1 al 10
    console.log(NumeroRandomGenerado);
    console.log(NumeroSorteadoArray);
    
    // si el numero generado esta en la lista array entonces yo hago algo o sino me comporto como sigo siendo 
        if(NumeroSorteadoArray.length == NumeroMaximo){
            AsignarElemento("p","Ya se sortearon todos los numeros posibles");
        }else{
            if(NumeroSorteadoArray.includes(NumeroRandomGenerado)){ // El include solo sirve para comparacion, nos devolvera true o  fals, mayormente se usa en array 
                return GenerarNumeroSecreto()
            } 
            else{
                NumeroSorteadoArray.push(NumeroRandomGenerado) // se esta añadiendo el numero random a nuestra lista array
                return NumeroRandomGenerado;
            }
        }

        
      
}

//funcion click boton intentar , es aqui en donde entrara mas logica
function ClickButtonIntentar(){
    let NumeroUsuario = parseInt(document.getElementById('ValorInput').value); //podremos editar el valor del input
    
    if(NumeroUsuario === NumeroSecreto){
        AsignarElemento("p",`Bien! . Acertaste en el intento ${intentos}` );    
        //bien ahora vamos a habilitar ese disabled del html, solo cuand,o el usuario adivine la clave
        document.getElementById('reiniciar').removeAttribute("disabled")
    }
    else{ //El usuario no acerto entonces
        AsignarElemento("p","Que pena, fallaste sigue intentando");
        if(NumeroUsuario < NumeroSecreto){
            AsignarElemento("p","El numero es mayor, sigue intentando");
        }else{
            AsignarElemento("p","El numero es menor, sigue intentando");
        }
        intentos++;     
        LimpiarCaja();
    }
}

//funcion para limpiar la caja 
function LimpiarCaja(){
    document.querySelector('#ValorInput').value = ''; 
}

//Condicionales Iniciales
function CondicionesIniciales(){
    AsignarElemento("h1","Juego del numero secreto");
    AsignarElemento("p","Indique un numero del 1 al 10 ");   
    NumeroSecreto = GenerarNumeroSecreto();
    intentos = 1
    // console.log(NumeroSecreto)
    
}

// Reinicio de Juego 
function ButtonReset(){
    //Reiniciar el juego actualizando la pagina, a veces no es la mejor opcion
    // window.location.reload();

    //Limpir la caja
    LimpiarCaja();
    //Usamos la funcion Condicionales iniciales
    CondicionesIniciales();
        
    //Deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
    
    
}

//Ejecutando la funcion CondicionalesIniciales
CondicionesIniciales();




































/*

//hacer ejercicio con array 

let  frutas =  ["Manzana","Banana"];
// console.log(frutas.length); 

//imprimir el primer elemento del array
let primero = frutas[0];
// console.log(primero)

//Añadir un elemento al final de un Array
frutas.push("fresa","arandanos","coco") 

//imprimir el ultimo elemento del array
let ultimo = frutas[frutas.length -1]; 
// console.log(ultimo)

//Recorrer un array
//for
// for(let i = 0 ; i < frutas.length; i++ ){
//     console.log(frutas[i])
// }
// //foreach
// frutas.forEach(function(elementoRecorrer){
//     console.log(elementoRecorrer);
// })

//Eliminar un elemento al final de un array
let eliminar = frutas.pop();
// console.log(eliminar);

// Añadir un elemento al principio de un array

let AsignarLongitud = frutas.unshift("Rico mango");
// console.log(frutas);

//Elimnar el primer elemento de un array

let Primero = frutas.shift() // Elimina "Rico mango" dek inicio
console.log(frutas);

//Encontrar el indice de un elemento Array
let buscadorPosocion = frutas.indexOf("Rico mango");
console.log(buscadorPosocion);

*/