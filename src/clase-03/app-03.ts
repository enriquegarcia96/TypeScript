export {};

//* Aserciones de tipo en typescript | type Assertions
let codigoCurso: any;
codigoCurso = 100;

let numeroCurso: number = <number>codigoCurso;
console.log('numeroCurso', numeroCurso);

/*
let estudiante:  {nombre: string, curso: string} = {};
estudiante.nombre = 'kike';
estudiante.curso = 'angular';  */


type Estudiante = {nombre: string, curso: string};

let estudiante2 = <Estudiante>{};
estudiante2.nombre = 'enrique';
estudiante2.curso = 'DENO';

let estudiante3 = `{"nombre": "Kike", "Curso": "Deno"}`;
let objetoEstudiante: Estudiante = <Estudiante>JSON.parse(estudiante3);



console.log('estudiante',objetoEstudiante);