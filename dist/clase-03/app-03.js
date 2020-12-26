"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Aserciones de tipo en typescript | type Assertions
var codigoCurso;
codigoCurso = 100;
var numeroCurso = codigoCurso;
console.log('numeroCurso', numeroCurso);
var estudiante2 = {};
estudiante2.nombre = 'enrique';
estudiante2.curso = 'DENO';
var estudiante3 = "{\"nombre\": \"Kike\", \"Curso\": \"Deno\"}";
var objetoEstudiante = JSON.parse(estudiante3);
console.log('estudiante', objetoEstudiante);
