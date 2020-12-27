"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// METODOS SET Y GET
// atributos de solo lectura: readonly
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
            // permite obtener el estado de "id"
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    // funcion que nos permite crear objetos
    function EscuelaDigital(_nombre) {
        this._nombre = _nombre;
        // atributos
        this.cursos = [];
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    Object.defineProperty(EscuelaDigital.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return EscuelaDigital;
}());
var escuela = new EscuelaDigital('kike');
var cursoJS = new Curso(1, 'JavaScript');
var cursoTS = new Curso(2, 'TypeScript');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// modo lectura
//cursoJS.nombre = 'Javascript desde 0'; // asignacion: SET
console.log('nombre cursoJS', cursoJS.nombre); // leyendo estado: GET
//cursoJS.setNombre ('Javascript desde 0')
//cursoJS.id = 25; // asignacion: SET
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre); // leyendo estado: GET
