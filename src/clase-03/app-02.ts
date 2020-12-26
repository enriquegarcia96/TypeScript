export {}; // modulo en ts

//* alias para tipos de datos en ts, parte 2

let curso: string = 'TypeScript';
// cursos codigo: javascript = 1 , typescript = 2

type Curso = string | number;

let cursoNuevo: Curso ;
cursoNuevo = 'JavaScript';
cursoNuevo = 2; // typescript

function getCurso(): Curso {
    //return 'JavaScript'
    return 1;
}

// Arreglos 
let cursos: string[] = ['JavaScript', 'typeScript'];
let cursos2: Curso[] = ['JavaScript', 'typeScript', 2 ];

console.log('cursos', cursos);
console.log('cursos2', cursos2);



