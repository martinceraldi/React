// let numero = 23;
// let numero2 = 23;

// let resultado = numero < numero2;




// num1 = 12;
// num2 = 24;
// num3 = 25;
// num4 = 92;
// num5 = 91;


// op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);
    
// document.write(op)


// nombre = "lucas";

// if (nombre == "lucas"){
//     alert("tu nombre ess Luquitas");
// }

// else if (nombre =="dalto"){
//     alert ("tu nombre es salchicha");
// }
// // else son infinitos//
// else {
//     alert ("tu nombre es otro");
// }




// function saludar (){
//     alert ("hola");
//         return "la funcion se cumplio correctamente"
// }
// let saludo= saludar ();

// document.write(saludo) ("<br>");


// let num1 = 32;
// let num2 = 12;
// let res = num1 + num2;
// document.write(res) ("<br>");

// function suma(pepe1,pepe2){
//     let res= pepe1+pepe2;
//     return res
// }

// let resultado = suma(20,25);

// document.write(resultado)
const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro','Miguel']

//CALCULADORA 
function calculadora (primerNumero, segundoNumero, operacion){
    switch (operacion) {
        case "+":
        return primerNumero + segundoNumero;
        break;
        case "-":
        return primerNumero - segundoNumero;
        break;
        case "*":
        return primerNumero * segundoNumero;
        break;
        case "/":
        return primerNumero / segundoNumero;
        break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(2, 3, "+"));   



//calcular precio

const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)



//METODOS PERSONALIZADOS
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
    this.juan = function(){ console.log("YO TENGO "+ this.edad + " AÑOS DE EDAD")}
    this.pelotas = function(){ console.log("VIVO EN  "+ this.calle)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();
persona1.juan();
persona2.juan();
persona1.pelotas();
persona2.pelotas();


//CLASES
class Personas{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre);
    }
}
const persona3 = new Personas("Homero", 39, "Av. Siempreviva 742");
persona3.hablar();
//otro ejemplo de class
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
