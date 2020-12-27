"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Miembros privado
var Curso = /** @class */ (function () {
    function Curso(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    // funcion que nos permite crear objetos
    function EscuelaDigital(nombre) {
        this.nombre = nombre;
        // atributos
        this.cursos = [];
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigital;
}());
var escuela = new EscuelaDigital('kike');
var cursoJS = new Curso(1, 'JavaScript');
var cursoTS = new Curso(2, 'TypeScript');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
console.log('escuela', escuela);
