"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Decoradores
function Entidad(config) {
    console.log('Entidad', config);
    return function (target) {
        // Dinamicamente: asignamos la propiedad clave a la clase
        target.clave = config.clave;
        console.log('target', target);
    };
}
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Curso = __decorate([
        Entidad({
            clave: 'CURSO'
        })
    ], Curso);
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital() {
    }
    EscuelaDigital = __decorate([
        Entidad({
            clave: 'ESCUELA_DIGITAL'
        })
    ], EscuelaDigital);
    return EscuelaDigital;
}());
function analizarClase(clase) {
    console.log('Clave:', clase.clave);
}
var typeScript = new Curso(1, 'TypeScript');
analizarClase(Curso); // parametro: Una clase
var escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);
