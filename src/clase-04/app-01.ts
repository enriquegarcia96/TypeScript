export {};

class EscuelaDigital {
    // atributos
    nombre: string;
    cursos: string [] = [];

    // funcion que nos permite crear objetos
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarCurso(curso: string){
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('kike')
escuela.agregarCurso('Node');
escuela.agregarCurso('Angular');
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);




