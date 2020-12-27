export {};

// Miembros publicos
class Curso{
    public id: number;
    public nombre: string;

    constructor( id: number, nombre: string ){
        this.id = id;
        this.nombre = nombre;
    }
}


class EscuelaDigital  {
    // atributos
    public nombre: string;
    public cursos: Curso[] = [];

    // funcion que nos permite crear objetos
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('kike');
let cursoJS = new Curso(1,'JavaScript');
let cursoTS = new Curso(2, 'TypeScript');

escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atributos publicos
cursoJS.nombre = 'Diana';
cursoJS.id = 25;

console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);




