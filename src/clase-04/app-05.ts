export {};
// METODOS SET Y GET
// atributos de solo lectura: readonly

class Curso{
    constructor(private readonly _id: number,  private readonly _nombre: string ){}

    get id(){
        // permite obtener el estado de "id"
        return this._id;
    }
    get nombre(){
        return this._nombre;
    }
}


class EscuelaDigital  {
    // atributos
    private cursos: Curso[] = [];

    // funcion que nos permite crear objetos
    constructor(private _nombre: string) {}

    public agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
}

const escuela = new EscuelaDigital('kike');
let cursoJS = new Curso(1,'JavaScript');
let cursoTS = new Curso(2, 'TypeScript');



escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);


// modo lectura
//cursoJS.nombre = 'Javascript desde 0'; // asignacion: SET
console.log('nombre cursoJS', cursoJS.nombre); // leyendo estado: GET
//cursoJS.setNombre ('Javascript desde 0')
//cursoJS.id = 25; // asignacion: SET
console.log('escuela', escuela);

console.log('escuela.nombre', escuela.nombre);  // leyendo estado: GET




