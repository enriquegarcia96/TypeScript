export {}; // modulo en ts

//* alias para tipos de datos en ts

let curso: string = 'TypeScript';
// cursos codigo: javascript = 1 , typescript = 2
let cursoNuevo: string | number;
cursoNuevo = 'JavaScript';
cursoNuevo = 2; // typescript

function getCurso(): string | number {
    //return 'JavaScript'
    return 1;
}

// Arreglos 
let cursos: string[] = ['JavaScript', 'typeScript'];
let cursos2: (string | number)[] = ['JavaScript', 'typeScript', 2 ];

console.log('cursos', cursos);
console.log('cursos2', cursos2);



