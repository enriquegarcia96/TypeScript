// interfaces en typescript

interface ICurso {
    nombre: string;
    identificador?: number;
};

let cursoTypescript: ICurso = {
    nombre: 'TypeScript',
    identificador: 1
};

cursoTypescript = {
    nombre: 'Angular',
    identificador: 2
};

let curso2: ICurso;
curso2 = {
    nombre: 'Java',
    
};
curso2 = {
    nombre: 'Node',
    identificador: 100
}

console.log('cursoTypeScript', cursoTypescript);



// Extendiendo interfaces | herencia de interfaces

interface CursoEDteam extends ICurso{
    costo: number;    
}


const primerCurso: CursoEDteam = {
    nombre: 'MEAN', // ICurso
    identificador: 200, // ICurso
    costo: 500 // CursoEDteam
}

console.log('primerCurso', primerCurso)