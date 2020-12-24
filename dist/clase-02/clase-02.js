"use strict";
//tipos primitivos  o tipos Basicos
//boolean
var estaConectado = true;
var estaInscrito;
estaInscrito = false;
estaInscrito = true;
//estaInscrito = 2;  // No es valido
function tieneDescuento(curso) {
    if (curso === 'typescript')
        return true;
    return false;
}
console.log("tieneDescuento('angular'):", tieneDescuento('angular'));
// Number
var estudiantes = 100;
//estudiantes = '1000'; // Invalido
var cantidadEstudiantes;
cantidadEstudiantes = 120;
function getCantidadEstudiantes(curso) {
    if (curso === 'typescritp')
        return 100;
    return 0;
}
var inscriptsCursoTypescript = 100;
// type: Number, hexadecimales
var decimal = 10;
var hexadecimal = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);
// type: number, binario
var binario = 10;
console.log('binario', binario);
//type: number, octal
var octal = 493;
console.log('octal', octal);
// String
var nombre = 'enrique';
var apellido = 'garcia';
var nombreCompleto = nombre + ' ' + apellido;
console.log('nombre completo', nombreCompleto);
// String + ES6 template literals
var nombreCompleto2 = nombre + " " + apellido;
console.log('nombreCompleto2', nombreCompleto2);
var arregloCursos = ['typeScript', 'angular'];
var mensaje = "\nMi nombre es " + nombreCompleto + ", y tengo " + arregloCursos.length + " cursos.\n\u00A1Gracias por asistir!\n";
console.log('mensaje', mensaje);
// Tipos Esenciales en tyspescript
//tipo: any
var desconocido;
desconocido = 'hola';
desconocido = 24;
var desconocido2 = 2;
// Tipo: void
var vacio;
function mostrarContenido(curso) {
    var mensaje = curso ? "Bienvenido al curso " + curso : '¡Subcribete al curso!';
    console.log('mensaje', mensaje);
}
mostrarContenido('typescript');
// Tipo : Never 
var nunca;
function retornaError(error) {
    throw new Error('Error typescript.' + error);
    // ¡nunca retorna un valor!
}
//retornaError('Valor inesperado');
function cicloInfinito() {
    while (true) {
    }
}
// Tipo: Null y Undefined
var variableUndefined = undefined;
var variableNull = null;
function retornoNull() {
    return null;
}
function retornoUndefined() {
    return undefined;
}
var variableSinValor = undefined;
console.log('variableSinValor', variableSinValor);
// Funciones en TypeScript
function Saludo(nombre) {
    if (nombre)
        return 'Hola ' + nombre;
    return '¡Hola!';
}
console.log(Saludo(nombreCompleto));
console.log(Saludo());
// Arreglos en TypeScript
var Cursos;
Cursos = ['TypeScript', 'Angular'];
// Arreglos con Generics
var nombres;
nombres = ['Enrique Garcia', 'Diana Gonzales'];
var arreglo = [2, 'cadena', true];
// Tuplas 
var infoCursos = ['typescript', 100];
infoCursos = ['angular', 200];
var curso3 = ['typescript', 150, '12/2020'];
console.log('curso', curso3);
var nuevosInscritos = 10;
console.log('fecha de inicio', (curso3[2]));
console.log('total de inscritos', curso3[1] + nuevosInscritos);
console.log('total de inscritos', curso3[1] + nuevosInscritos);
var tuplaTest = ['a', 'b'];
var tuplaTemp = ['c', 'd'];
tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp);
