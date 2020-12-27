export {};
// Herencia de clases
// modificadorees  de acceso: protected/ protegido

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

class Escuela {
    protected cursos: Curso[] = [];
    constructor( protected _id: number, protected _nombre: string ){}

    get id(){
        return this._id
    }
    set id(id: number){
        this._id = id;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre ( nombre: string ){
        this._nombre = nombre;
    }

    public agregarCurso(curso: Curso){
        this.cursos.push(curso);
    }
}


class EscuelaDigital extends Escuela {
     constructor(id: number, nombre: string, private _paginaWeb: string) {
        super(id, nombre); // Reusar el constructor de la superClase
    }
    
    get paginaWeb(){
        return this._paginaWeb;
    }
    set paginaWeb(paginaWeb:string){
        this._paginaWeb = paginaWeb;
    }
}

const miEscuela = new Escuela(1,'Edteam');

const escuela = new EscuelaDigital(1, 'Udemy','udemy.com' );
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
console.log('escuela.paginaWeb', escuela.paginaWeb);




