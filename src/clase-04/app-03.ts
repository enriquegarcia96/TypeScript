export {};

// Miembros privado
class Curso{
    constructor(private id: number, private nombre: string ){}
}


class EscuelaDigital  {
    // atributos
    private cursos: Curso[] = [];

    // funcion que nos permite crear objetos
    constructor(private nombre: string) {}

    public agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('kike');
let cursoJS = new Curso(1,'JavaScript');
let cursoTS = new Curso(2, 'TypeScript');

escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);

console.log('escuela', escuela);





