"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Herencia de clases
// modificadorees  de acceso: protected/ protegido
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
var Escuela = /** @class */ (function () {
    function Escuela(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.cursos = [];
    }
    Object.defineProperty(Escuela.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Escuela.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Escuela.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return Escuela;
}());
var EscuelaDigital = /** @class */ (function (_super) {
    __extends(EscuelaDigital, _super);
    function EscuelaDigital(id, nombre, _paginaWeb) {
        var _this = _super.call(this, id, nombre) || this;
        _this._paginaWeb = _paginaWeb;
        return _this;
    }
    Object.defineProperty(EscuelaDigital.prototype, "paginaWeb", {
        get: function () {
            return this._paginaWeb;
        },
        set: function (paginaWeb) {
            this._paginaWeb = paginaWeb;
        },
        enumerable: false,
        configurable: true
    });
    return EscuelaDigital;
}(Escuela));
var miEscuela = new Escuela(1, 'Edteam');
var escuela = new EscuelaDigital(1, 'Udemy', 'udemy.com');
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
console.log('escuela.paginaWeb', escuela.paginaWeb);
