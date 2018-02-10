//esto es un comenatrio de una linea
/*
esto es un comentario de bloques
*/

/*
Variables: en JavaScript  se crean las variables utilizando  la palabra reservada "var", e.j:
var nombrevariable;
-Los nombres de las variables:

-no deben contener caracteres especiales
-no deben empezar con un numero
-no dene tener espacios 
-se sugier utilizar formato  "camelcase lowercase"  

e.j para elnombre de la variable "valor numerico 1"
 var ValorNumerico1 (came case uppercase)
 var valorNumerico1 (camel case lowercase)
 
Los tipos de valores que se pueden guardar en una variable son:
-Valores numericos             ->(NUMBER)
-Valores de cambios de texto   ->(STRING)
-Boolenaos                     ->(BOOLEAN)
-Arreglos(matrices o vectores) ->(ARRAY)
-Objetos                       ->(OBJECT)
-Funciones                     ->(FUNCTION)

*/

/*
Valores numericos ; valores numerico o decimales (flotantes)
*/
var numero1 =10;
var numero2 =20.40;

/*
Valores de cadena de texto : El valor siempre va entre comillas (dobles o simples)
*/
var texto1 = "hola";
var texto2 = "Mundo";
var texto3 = '100';

/* Valores booleanos: Valores logicos  binarios (verdadero o Falso)
true =1
false=0
*/

var verdadero =true;
var falso= false;

/* 
    Arreglos es posible almacenar mas de un valor.
    -los valores se definen entre "corchetes" y seoarados entre una coma.
    -Es posible almacenar valores  de distintos tipos
    -No se sugiere almacenar valores de distintos tipos
    -Es posible anidar arreglos
    -A cada valor se le asignan un numero de indice (index)
        este valor siempre comienza con (0) ;
*/
var sergio= ['Sergio', 'Perez', 35, true , ['Lunes', 'Martes']];
var diasSemana = ['Lunes', 'Martes','Miercoles','Jueves','Viernes'];

/*
console.log(diasSemana.length);
console.log(diasSemana[2]);
*/

/*
Operadores aritmeticos: Para realizar operaciones unicamente  con valores numericos 
    -(resta)
    +(suma) : Si alguno de los varoles es una cadena de texto (string), los valores se concatenaran
    /(division)
    *(multiplicacion)
    %(resto)
*/

var miDivision = 13 / 5;

//console.log('El resultado de la division es', miDivision);

var resto = 13%5;
//console.log ('El resultado del resto es',resto);

var numero3=20;
var numero4=40;
var resultado= numero3 + numero4;
var numero5='50';
var resultado2= numero3 + numero5;

var name='Shaila';
var lastname='Sànchez';
var age=30;

var shai= 'Mi nombre es'
     + ' ' 
     + name 
     + ' '
     + lastname 
     + ' y tengo ' 
     + age 
     + ' años';

//console.log(shai);

/* Operadores relacionales 
    < Menor que  
    > Mayor que 
    >= igual o mayor que
    <= igial o menor que
    == igual que
    != diferente  a 
    === Exactamente igual que 
    !== Exactamente diferente a 
*/

var edadSerch = 39;
var edadSerchText='39';
var edadAldo =36;
var edadShaila= 30;
var edadNayeli = 23;

var ejemplo1 = edadSerch > edadShaila;
var ejemplo2 = edadAldo == edadNayeli;
var ejemplo3 =edadSerch == edadSerchText;
var ejemplo4 = edadSerch === edadSerchText;


//console.log('Resultado ejemplo 1:', ejemplo1);
//console.log('Resultado del ejemplo 2:', ejemplo2);
//console.log('edadSerch es igual a edadSerchText', ejemplo3);
//console.log('edadSerch es exactamente igual a edadSerchText',ejemplo4);

/*
Operadores logicos : operan valores  booleanos  y siempre devuelven un valor booleano
    OR
    AND 

    OR= devolvera "true" si al menos uno de los valores es "true", de lo contrario , 
    si todos los valores  son "false" devolvera "false",

    AND = Devolvera "true" solo si todos los valores son "true",
    de lo contrario devolvera "false".

    */

    //var booleano1 =;
    //var booleano2 =;

    var esMayorEdad= edadNayeli > 18;
    var esAlumnoEdumac = true;
    //console.log(esMayorEdad && esAlumnoEdumac  )



    /*Estructura de control "if o else"
    Sintaxis
    if(condicional) {
        Codigo que se ejecuta  si la condicional es igual a "true".
        {
            else 
            Codigo que se ejectuta si la condicional es igual a "false"
        }
    }
    */
    var edadusuarioX = 70;

    if (edadusuarioX <=20) {
        //console.log('El usuario esta entre 0 y 20 años');
    } else if (edadusuarioX <=30){
        //console.log('El usuario esta entre 21 y 30 años ');
    } else if (edadusuarioX <=40){
        //console.log ('El usuario esta entre 31 y 40 años' );
    } else if (edadusuarioX <=50){
        //console.log('El usuario esta entre 41 y 50 años');
    } else {
        //console.log('Es mayor de 50 años');
    }

    /* iteraciones for

    sintaxis 
    for (var 1 = 0 ; 1 < 10; i++){
    }

    */

    var numeroIteraciones = 10;
    for (
        var i = 0; 
        i < numeroIteraciones; 
        i ++
    ){
        //console.log(i);
    }

var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    //console.log(meses[2]);
for (
var i=0;
i < meses.length;
i++
)
{ 
    //console.log(meses[i]);
}

/*
   Objetos : permiten almacenar mas de un valor .
   -los valores estan representados por duplas de "Clave/Valor" separados por 
   -Los objetos contienen "propiedades" y "metodos "
   -En donde 

   Sintaxis:
   var objetos =( 
       clave: 'valor',
       clave1: 'valor',
       clave2: 'valor',

   );

   Para accesar a las propiedades o metodos de un objeto se puede hacer :
   -Mediante notacion de corchetes 
   p.ej:
   serch[´name'];
   serch['lastname'];
   
   -Notacion de puntos
    serch.name;
    serch.lastname;

   */

var shai = {
name:'Shaila',
lastname:'Sanchez',
age: '30',
job: 'it',
adress:'sant germain',
pets:(
    {
        type: 'gato',
        name: 'gomita',
    }
),
};


/*Funciones : conjunto de instrucciones o sentencias  que se ejecutan cuando se invoca la funcion

sintaxis 
funcion() {}

*/

var sumar = function(){

    var num1 = 10;
    var num2 = 20;
    var resultado = num1 + num2;
//console.log(resultado);
}
sumar();


/*var sumar = funtion(num1,num2,num3){
    var _num1 = num1 ? num1 : 0;
    var _num2 = num2 ? num2 : 0;
    var _num3 = num3 ? num3 : 0;

};

/*EJEMPLO 1
*/

var getArea = function (base, altura) {
    return (base * altura) / 2 ;

};

var dataTriangles = [
    {
        base:10,
        altura:20,

    },
    {
        base:30,
        altura:50,

    },
   {
       base:70,
       altura:90,
    
   },
   {
       base:170,
       altura:190,
   },
   {
       base:270,
       altura:490,
   },
];

for (var i = 0; i< dataTriangles.length; i++) {
    var _base = dataTriangles[i].base;
    var _altura = dataTriangles[i].altura;
    console.log(getArea(_base, _altura));
}   