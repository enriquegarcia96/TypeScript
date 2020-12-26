// Enumerados en typescript

//type Curso: string | number;

enum Curso  {
    JavaScript,
    TypeScript,
    Angular
}


let cursoNum: Curso = Curso.TypeScript; 
console.log('curso', cursoNum);
console.log('curso', Curso[cursoNum]);


// otro ejemplo
enum Dia {
    Lunes, // i = 0
    Martes, // i = 1
    Miercoles, // i = 2
    Jueves, //  i = 3
    Viernes // i = 4
}

console.log('Viernes', Dia.Viernes)

enum FinSemana{
    Sabado = 5, // modifico el valor del indice
    Domingo = 6
}
console.log('Sabado', FinSemana.Sabado);
console.log('domingo', FinSemana.Domingo);


// Control sobre los valores para Enumerados
enum Mes {
    Enero = 'Ene',
    Febrero = 'Feb',
    Marzo = 'Mar',
    Abril = 'Abr'
}

console.log('Marzo', Mes.Marzo);