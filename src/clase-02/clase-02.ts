//tipos primitivos  o tipos Basicos
//boolean
let estaConectado = true;
let estaInscrito: boolean;

estaInscrito = false;
estaInscrito = true;
//estaInscrito = 2;  // No es valido

function tieneDescuento(curso: string) {
    if (curso  === 'typescript') 
        return true;
    return false;
}

console.log(`tieneDescuento('angular'):`, tieneDescuento('angular'));


// Number
let estudiantes = 100;
//estudiantes = '1000'; // Invalido
let cantidadEstudiantes: number;
cantidadEstudiantes = 120;

function getCantidadEstudiantes(curso: string): number {
    if (curso === 'typescritp') 
        return 100;
    return 0;    
}

let inscriptsCursoTypescript: number = 100;


// type: Number, hexadecimales
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);

// type: number, binario
let binario: number = 0b1010;
console.log('binario', binario);

//type: number, octal
let octal: number = 0o755;
console.log('octal', octal);


// String
let nombre = 'enrique';
let apellido: string = 'garcia';
let nombreCompleto = nombre + ' ' + apellido;
console.log('nombre completo', nombreCompleto)


// String + ES6 template literals
let nombreCompleto2 = `${nombre} ${apellido}`;
console.log('nombreCompleto2', nombreCompleto2);
let arregloCursos = ['typeScript', 'angular'];
let mensaje = `
Mi nombre es ${nombreCompleto}, y tengo ${arregloCursos.length} cursos.
¡Gracias por asistir!
`;

console.log('mensaje', mensaje)


// Tipos Esenciales en tyspescript
//tipo: any
let desconocido; 
desconocido = 'hola';
desconocido = 24;
let desconocido2: any = 2;

// Tipo: void
let vacio: void;
function mostrarContenido(curso: string): void {
    const mensaje = curso ? `Bienvenido al curso ${curso}` :  '¡Subcribete al curso!'
    console.log('mensaje', mensaje);
}

mostrarContenido('typescript');



// Tipo : Never 
let nunca: never;

function retornaError(error: string): never {
    throw new Error('Error typescript.' + error);
    // ¡nunca retorna un valor!
}

//retornaError('Valor inesperado');
function cicloInfinito(): never {
    while (true) {

    }
}

// Tipo: Null y Undefined
let variableUndefined: undefined = undefined;
let variableNull: null = null;

function retornoNull(): null {
    return null;
}

function retornoUndefined(): undefined {
    return undefined
}

let variableSinValor = undefined;
console.log('variableSinValor', variableSinValor);


// Funciones en TypeScript

function Saludo(nombre ? : string): string {
    if(nombre)
        return 'Hola ' + nombre;
    return '¡Hola!'
}
console.log(Saludo(nombreCompleto));
console.log(Saludo());



// Arreglos en TypeScript
let Cursos: string[];
Cursos = ['TypeScript', 'Angular'];

// Arreglos con Generics
let nombres: Array<string>;
nombres = ['Enrique Garcia', 'Diana Gonzales'];

let arreglo: any[] = [2, 'cadena', true];

// Tuplas 
let infoCursos: [string, number] = ['typescript', 100];
infoCursos = ['angular',200];

let curso3: [string, number, string] = ['typescript', 150, '12/2020'];
console.log('curso', curso3);

let nuevosInscritos = 10;

console.log('fecha de inicio', (curso3[2]));
console.log('total de inscritos',curso3[1] + nuevosInscritos);
console.log('total de inscritos',curso3[1] + nuevosInscritos);


let tuplaTest: [string, string] = ['a', 'b'];
let tuplaTemp: [string, string] = ['c', 'd'];

tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp);





