"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EscuelaDigital = /** @class */ (function () {
    // funcion que nos permite crear objetos
    function EscuelaDigital(nombre) {
        this.cursos = [];
        this.nombre = nombre;
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigital;
}());
var escuela = new EscuelaDigital('kike');
escuela.agregarCurso('Node');
escuela.agregarCurso('Angular');
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
