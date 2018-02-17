// Es es un comentario de una línea
/*
    Esto es un bloque de comentarios
*/

/*
    Variables: En JavaScript se crean las variables
        utilizando la palabra reservada "var", p.ej:
            var nombreVariable;
        
        - Los nombre de las variables:
            - No deben contener caracteres especiales.
            - No deben comenzar con un número.
            - No debe tener espacios.
            - Se sugiere utilizar formato "camelcase lowercase"
        
            p.ej para el nombre de la variable "valor númerico 1"
                var ValorNumerico1 (camel case uppercase) X
                var valorNumerico1 (camel case lowercase) <--

        Lo tipos de valores que se pueden guardar en una variable son:
            - Numéricos                         -> (NUMBER)
            - Cadena de texto                   -> (STRING)
            - Booleanos                         -> (BOOLEAN)
            - Arreglos (matrices o vectores)    -> (ARRAY)
            - Objetos                           -> (OBJECT)
            - Funciones                         -> (FUNCTION)
*/

/*
    Valores numéricos: valores númericos, entero o decimales (flotantes)
*/

var numero1 = 10;
var numero2 = 20.40;

/*
    Valores de cadena de texto: El valor siempre va entre comillas (dobles o simples)
*/
var texto1 = 'Hola';
var texto2 = 'Mundo';
var texto3 = '100';

/*
    Valores booleanos: Valores lógicos binarios (Verdadero o Falso);
        true === 1;
        false === 0;
*/

var verdadero = true;
var falso = false;

/*
    Arreglos: Es posible almacenar más de un valor.
        - Los valores se definen entre "corchetes" y separados por una coma.
        - Es posible almacenar valores de distinto tipo.
        - No se sugiere almacenar valores de distintos tipos.
        - Es posible anidar arreglos.
        - A cada valor se le asigna un número de índice (index),
            éste valor siempre comienzo con "cero" (0);
*/

var sergio = ['Sergio', 'Pérez', 35, true, ['Lunes', 'Martes']];
var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

//console.log(diasSemana.length);
//console.log(diasSemana[2]);

/*
    Operadores aritméticos: Para realizar operaciones únicamente con 
        valores numéricos.

        - (Resta)
        + (Suma): Si alguno de los valores es una cadena de texto (STRING),
            los valores se concatenarán.
        / (División)
        * (Multiplicación)
        % (Resto) 
*/

var division = 13 / 5;
//console.log('El resultado de la división 13 entre 5 es : ', division);

var resto = 13 % 5;
//console.log('El resultado del resto 13 entre 5 es: ', resto);

var numero3 = 20;
var numero4 = 40;
var numero5 = '50';
var resultado = numero3 + numero4;
var resultado2 = numero3 + numero5;

var name = 'Sergio';
var lastName = 'Pérez';
var age = 39;

var serch = 'Mi nombre es '
    + name
    + ' '
    + lastName
    + ' y tengo '
    + age
    + ' años.';

//console.log(serch);

/*
    Opedadores relacionales: Siempre devuelven un valor booleano (BOOLEAN)
        >   Mayor que
        <   Menor que
        >=  Igual o mayor que
        <=  Igual o menor que
        ==  Igual que
        !=  Diferente a
        === Exactamente igual que
        !== Exactamente diferente a
*/

var edadSerch = 39;
var edadSerchText = '39';
var edadAldo = 36;
var edadNayeli = 23;
var edadShayla = 30;

var ejemplo1 = edadSerch > edadShayla;
var ejemplo2 = edadAldo == edadNayeli;
var ejemplo3 = edadSerch == edadSerchText;
var ejemplo4 = edadSerch === edadSerchText;
var ejemplo5 = edadNayeli !== edadShayla;
var ejemplo6 = edadSerch !== edadSerchText;

// console.log('Resultado ejemplo 1: ', ejemplo1);
// console.log('Resultado ejemplo 2: ', ejemplo2);
// console.log('edadSerch es igual a edadSerchText', ejemplo3);
// console.log('edadSerch es exáctamente igual a edadSerchText', ejemplo4);
// console.log('¿edadNayeli es exactamente diferente a edadShayla?: ', ejemplo5);
// console.log('edadSerch es exactament diferente a edadSerchText?: ', ejemplo6);

/*
    Operadores lógicos: Operan con valores booleanos
        y siempre devuelven un valor booleano
            || OR
            && AND

        OR: Devolverá "true" si al menos uno de los valores es "true",
            de lo contrario, si todos los valores son "false" devolverá "false".

        AND: Devolverá "true" sólo si todos los valores son "true",
            de lo contrario devolverá "false".
*/

var booleano1 = true && true && false && true;
var booleano2 = true || false || false || true || false;
//console.log(booleano1);
//console.log(booleano2);

var esMayorEdad = edadNayeli > 18;
var esAlumnaEdumac = true;
//console.log(esMayorEdad && esAlumnaEdumac);

// valorCampoNombre !== '';
// valorCampoEdad !== '';
// valorCampoEdad && valorCampoNombre

/*
    Incremento y Decremento: Operan unicamente con valores numéricos.
        ++ Incrementa uno
        -- Decrementa uno
*/

var miEdad = 39;
miEdad++;
miEdad++;
miEdad--;
miEdad--;
miEdad--;
miEdad--;
miEdad--;

// console.log(miEdad);

/*
    Estructura de control "if, else"
        Sintaxis:
        
        if (condicional) {
            Código que se ejecuta su la condicional es igual a "true".
        } else {
            Código que se ejecuta su la condicional es igual a "false".
        }
*/

/*
if (edadUsuarioX <= 18) {
    console.log('El usuario es menor de edad');
} else {
    if (edadUsuarioX <= 60) {
        console.log('El usuario es Adulto, menor de 60 años');
    } else {
        console.log('EL usuario es adulto mayor');
    }
}
*/

var edadUsuarioX = 15;

if (edadUsuarioX <= 20) {
    //console.log('El usuario está en el rango de 0 a 20 años');
} else if (edadUsuarioX <= 30) {
    //console.log('El usuario está en el rango de 21 a 30 años');
} else if (edadUsuarioX <= 40) {
    //console.log('El usuario está en el rango de 31 a 40 años');
} else if (edadUsuarioX <= 50) {
    //console.log('El usuario está en el rango de 41 a 50 años');
} else {
    //console.log('El usuario es mayor de 50 años');
}

/*
    Iteración "for"
    Sintaxis: 
        for (var i = 0; i < 10; i++) {
            code here...
        }
*/
var numeroIteraciones = 10;

for (var i = 0; i < numeroIteraciones; i++) {
    //console.log(i);
}

var meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

for (var i = 0; i < meses.length; i++) {
    //console.log(meses[i]);
}

/*
    Objetos: Permiten almacenar más de un valor.
        - Los valores están representados por duplas de "Clave/Valor" separados por comas.
        - Los objetos continen "Propiedades" y "Métodos"
        - En donde método es una "función" (FUNCTION)

        Sintaxis:

        var objeto = {
            clave: 'valor',
            clave1: 'valor1',
            clave2: 'valor2',
            ...
        };

        Para accesar a las propiedades o métodos de un objeto, se puede hacer:
            - Notación de corchetes
                serch['name'];
                serch['lastName];

            - Notación de puntos
                serch.name;
                serch.lastName;
        

*/

var serch = {
    name: 'Sergio',
    lastName: 'Pérez Gómez',
    age: 39,
    job: 'Web UI Developer',
    address: 'Av Canal Nacional 260',
    pets: [
        {
            type: 'Gato',
            name: 'Bombi',
            age: 2
        },
        {
            type: 'Perro',
            name: 'Perseo',
            age: 10
        }
    ],
    wife: {
        name: 'Magda',
        lastName: 'Barroso',
        age: 40
    },
    children: [
        {
            gender: 'male',
            name: 'Eduardo',
            lastName: 'Pérez Barroso',
            age: 5
        },
        {
            gender: 'female',
            name: 'Juana',
            lastName: 'Pérez Barroso',
            age: 10
        }
    ],
    saludar: function() {
        console.log('Hola, me llamo ' + this.name);
    }
};

//console.log(serch['name']);
//console.log(serch.name);
var dataMyWife = 'Mi esposa se llama '
    + serch.wife.name
    + ' '
    + serch.wife.lastName
    + ', y tiene '
    + serch.wife.age
    + ' años.';


/*
    Funciones: Conjunto de instrucciones o sentencias que se ejecutan
        cuando se invoca a la función.

        Sintaxis:
            function() {}
*/

// var sumar = function() {
//     var num1 = 10;
//     var num2 = 20;
//     var resultado = num1 + num2;
//     console.log(resultado);
// };

// sumar();
// serch.saludar();

/*
    Resuelve las siguiente sumas:

    10 + 20 = x
    40 + 50 = x
    324 + 345 = x
    193745 + 384758 = x
*/

var sumar = function(num1, num2, num3) {
    var _num1 = num1 ? num1 : 0;
    var _num2 = num2 ? num2 : 0;
    var _num3 = num3 ? num3 : 0;

    console.log(_num1 + _num2 + _num3);
};

//sumar(10); //10
//sumar(10, 20); //30
//sumar(10, 20, 30); //60

var areaTriangulo1 = getArea(10, 20);
//console.log('Area del triangulo es: ', areaTriangulo1);



/*
    Ejemplo 1
*/
var getArea = function(base, altura) {
    return (base * altura) / 2;
};

var dataTringles = [
    {
        base: 10,
        altura: 20
    },
    {
        base: 30,
        altura: 50
    },
    {
        base: 70,
        altura: 90
    },
    {
        base: 170,
        altura: 190
    },
    {
        base: 270,
        altura: 490
    }
];

for (var i = 0; i < dataTringles.length; i++) {
    var _base = dataTringles[i].base;
    var _altura = dataTringles[i].altura;
    console.log(getArea(_base, _altura));
}
