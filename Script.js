//var primero = 'hola mundo';
//console.log(primero);
/*
var nombre;
const numero = 5;
//let nombre;

let opcion = prompt('Agrega un nombre');

document.write('Tu nombre es: ', opcion);

opcion = prompt('Agrega un numero para sumarlo');
opcion= parseInt(opcion);
let suma = numero+opcion;
document.writeln('<br>',suma);
alert("Esto es una alerta");
*/

document.write('<title>SOY EL PRIMER SCRIPT</title>');

document.write('<h1>HOLA MUNDO!!</h1>');

alert('Que facil es incluir \'comillas simples\' y \"comillas dobles"\ en javascript ');
/** 
let numero1 = prompt('Ingresa un primer numero');

let numero2 = prompt('Ingresa un segundo numero');

if(numero1< numero2){
  alert('El segundo numero si es menor');
}else{
    alert('El primer numero es menor');

}
*/
/**
document.write('Hola usuario');
var edad = prompt('Ingresa tu edad');
if(edad > 18){
alert('Vaya eres mayor de edad');
}else{
    alert('Eres menor de edad');
} */
/**
let contra = 'JairoSilverioh117';
let contracorrec = prompt('Ingresa la contraseña');
if(contra === contracorrec){
alert('Contraseña correcta')

}else{
    alert('Contraseña incorrecta')
} */
/*
var num1 = prompt('Ingrese el numero a dividir');

var num2 = prompt('Ingrese el numero a divisor');

let resul = num1/num2;

if(num1 !=0 && num2 !=0){
   alert('El resultado es: '+resul);
}else{
    alert("Sintax Error");
}*/
/**let num1 = prompt('Ingresa un numero entero');

let num2 = num1%2;

if(num2!= 0){
alert('El numero: '+ num1+' es impar');
}else{
    alert('El numero: '+ num1+' es par')
} */
/*
let nombre,edad,salario;

nombre = prompt('Ingresa tu nombre');
edad = prompt('ingresa tu edad');
salario = prompt('Ingresa tu salario');

alert('Hola '+ nombre);

if( edad>=18 && salario>=1000){
 alert('OH OH YA ES HORA DE PAGAR AL SAT')
}else{
alert('AUN A SALVO')
}*/
/*
var nombre = prompt('Ingresa tu nombre');
var genero = prompt('ingresa tu sexo hombre(M), Femenino(F)');

if((genero == 'f' && nombre.charAt(0)<='m') || (genero == 'm' && nombre.charAt(0)>='n') ){
   alert('a')
}else{
    alert('b')
}
*/
/*
let renta = prompt('Cuanto pagas de renta?');

if(renta< 10000){
alert('5%');
}else if(renta > 10000 && renta< 20000){
    alert('10%');
}else if(renta > 20000 && renta< 35000){
    alert('15%');
}else if(renta > 35000 && renta < 60000){
    alert('20%');
}else if( renta > 60000){
    alert('25%');
}
*/
/**
let puntaje = prompt('Ingrese su puntaje de empleado: 0.0, 0.4, 0.6, 0.8 etc ')
let cal ;
if(puntaje == 0.0){
  cal = 2400* puntaje;
    alert('inaceptable ganancias generadas: '+ cal);
}else if (puntaje > 0 && puntaje<0.4){
    cal = 2400* puntaje;
    alert('aceptable ganancias generadas: '+ cal);
}else if (puntaje > 0.4 ){
    cal = 2400* puntaje;
    alert('excelente ganancias generadas: '+ cal);
} */
/**
let edad = prompt('ingresa tu edad ')
let cal ;
if(edad<= 4){
  
    alert('No pagas boleto');
}else if (edad>4 && edad<=18){
       
    alert('Pagas 5pesos el boleto');    
}else if (edad>18){
    alert('excelente pagas 10 pesos el boleto');
}
 */

/**let opcion= prompt('Tenemos pizzas vegetariana y pizzas no vegetariana, cual deseas?');

if(opcion == 'vegetariana'){
    alert("Ingredientes: tofu y pimiento");
    opcion = prompt("tofu o pimiento");
    if(opcion == 'tofu'){
        alert('Tu pizza es de tofu con jitomate y mozarrella')
    }else{
        alert('Tu pizza es de pimiento con jitomate y mozarrella')
    }
}else if(opcion == 'no vegetariana'){
    alert("Ingredientes: peperoni, jamon, salchicha");
    opcion = prompt("cual deseas?");
    if(opcion == 'peperoni'){
        alert('Tu pizza es de peperoni con jitomate y mozarrella')
    }else if(opcion == 'jamon'){
        alert('Tu pizza es de jamon con jitomate y mozarrella')
    }else{
        alert('Tu pizza es de salchicha con jitomate y mozarrella')
       
    }
}

let cal ;
if(edad<= 4){
  
    alert('No pagas boleto');
}else if (edad>4 && edad<=18){
       
    alert('Pagas 5pesos el boleto');    
}else if (edad>18){
    alert('excelente pagas 10 pesos el boleto');
}
 */
/**alert('1.enero.\n2.febrero.\n3.Marzo.\n4.Abril.\n5.Mayo.\n6.Junio.\n7.Julio.\n8.Agosto.\n9.Septiembre.\n10.Octubre.\n11.Noviembre.\n12.Diciembre')

var mes = prompt('En que mes estas?No.');
mes = parseInt(mes);
switch (mes) {
    case 1:
        alert('Nieves de enero');
        break;
        case 2:
        alert('Mes del amor caaaaa');
        break;
        case 3:
        alert('que hay en marzo?');
        break;
        case 4:
        alert('Abril');
        break;
        case 5:
        alert('Mes de la mom');
        break;
        case 6:
        alert('Mes de la mamoy');
        break;
        case 7:
        alert('Julio Silverio');
        break;
        case 8:
        alert('Mes de la tronadas');
        break;
        case 9:
        alert('Mes patriotico');
        break;
        case 10:
        alert('Mes de la brujas');
        break;
        case 11:
        alert('Mes de los muertos');
        break;
        case 12:
        alert('Es Navidad caaaa');
        break;

    default:
        alert('Deja de meter mamadas crack')
        break;
}
 */
/*
let bomba = parseInt(prompt('Ingresa el numero de bomba'));

switch (bomba) {
    case 0:
        alert('Numero de motor no encontrado')
        break;
        case 1:
        
        alert('Motor de agua')
        break;
        case 2:
        
        alert('Motor de Carro')
        break;
        case 3:
        
        alert('Motor de aire')
        break;
        case 4:
        
        alert('Motor de Fuego')
        break;

    default:
        alert('Valor incorrecto')
        break;
}
*/
/*
let pc = prompt('la antiguedad del modelo de tu pc? actual o antiguo')

switch(pc){
    case 'antiguo':
    alert('Tu modelo debe de ser remplazado')
    break

    case'actual':
    
    alert('Tu modelo aun esta apto')
    break
    default:
        alert('Opcion no encontrada')
        break;
}*/

//===========================================================================================================

//for(var i = 1; i<=100; i++){
//console.log(i);
//}
/**
for(var i = 100; i>=1; i--){
console.log(i);
} */

/*var cal=0;
var cont=0;
for(var i = 1; i<=100; i++){

    if(i%2== 0){
      console.log(i)
    }
}
*//**for(var i = 1; i<=100; i++){

    if(i%2==1){
      console.log(i)
    }
} */
/*
var sum=1;
var cont=0;
for(var i = 1; i<=100; i++){
  
//   sum = i+sum;
// cont = sum;
cont = cont+i;


   console.log(cont);

}

var i = 1;
var sum =0;
/*
for(i; i<=100; i++){
   
    if(i%2 ==0){
console.log( sum = sum+i); 
    }


}

for(i; i<=100; i++){
   
    if(i%2 !=0){
console.log( sum = sum+i); 
    }


}
var contador=0;
var cal =0;
 for(i; i<=100; i++){
    cal =i%2;
    contador+=cal;
    if(cal != 0){
      
        sum = sum+i;
    }
   
 }
console.log(contador);

console.log(sum);
*/
//==============================================================================================================

//var op=1;
/*
while(op == 1){
opcion= parseInt(prompt("Ingresa un numero"));  

if(opcion%2 == 0){
    alert('El numero: '+ opcion+' es par');
}else
{
    alert('El numero: '+ opcion+' es inpar');

}
op=parseInt(prompt('Quieres seguir en el sistema 1.si/2.no?'));
}

op=parseInt(prompt('ingresa un numero'));

while(op != 1){
  
    if(op%2==0){
        op=op/2;
        console.log(op);
    }else{
        op=op*3+1;
    }

}


var palabra, parar = 'si';


while(parar == 'si'){
    palabra = prompt('Ingresa una palabra')
alert(palabra.length);
parar = prompt('agregar otra palabra? si/no');
}

var numero =0;
while(numero<11){
numero++;
console.log(numero);
}


var cont =0
var calc;
while(calc!=60){
cont++;
calc = cont*6;

console.log(calc);
}

let num=1,calc=0,calc2=0, conta=0,opcion=1;

while(num!=0){
 num = prompt('numero');
 num= parseInt(num);
 ++conta;
 calc+=num;
 if(num==0){
    --conta;
 }

}
calc2=calc/conta;
console.log('La media de los numero es = '+calc2);

var num =0;
var tabla=0;

tabla = parseInt(prompt('Agrega la tabla a calcular: '));
while(num<10){
   num++;
console.log(num*tabla);   

}

var factorial=0,valor=0;
var calc=1;
factorial= parseInt(prompt('ingresa el factorial'));
valor= factorial
//    100       1
while(factorial>1){
    
    calc=calc*factorial;
    factorial--; 




}
console.log(calc);

//==========================================================)===========================================================
var numero=0;

do{
    numero = parseInt(prompt('Ingresa un numero'));

console.log(numero);


}while(numero!=0)



var numero =0;
var calc=0;
numero=parseInt(prompt('INGRESA UN NUMERO'));
do{
calc=calc+numero;
numero--;


}while(numero>0)
console.log(calc);


var promedio=0,calificacion=0, cont=0;

do{
calificacion=parseInt(prompt('ingresa calificacion:'));

promedio+=calificacion;
cont++;

}while(calificacion!=0);


console.log((promedio/cont));
*/
/*
var numero, mayor=0, menor=0;

do{
numero= parseInt(prompt('Ingresa un numero:'));

if(numero>mayor){
mayor= numero;
}

}while(numero!=0)
console.log(mayor);



var cantidad=0, precio=0, calculo=0, concan=0, conpre=0;

do{
cantidad= parseInt(prompt('Ingresa la cantidad del producto'));

precio= parseInt(prompt('Ingresa el precio del producto'));
concan += cantidad*precio


}while(cantidad=!0 && precio!=0 ) 
    
console.log(concan);



var num1=0,num2=0,num3=0;
num1=parseInt(prompt('Ingresa el numero'));
do{

if(num1%2!=0){
num2+=num1
}
console.log(num1);
num1--;

}while(num1!=0)
console.log(num2);


var num1=3,num2=0,num3=0;

do {
   num3++;
   num2 = num1*num3 
   if(num2>=15){
    console.log(num2)

   }
  
} while (num3!=10);
*/
/*
var num1=3,num2=0,num3=0;

do {
   num3++;
   num2 = num1*num3 
   if(num2>=15){
    console.log(num2)

   }
  
} while (num2!=45);

//=============FUNCIONES======================================
function prueba(gradofa){
 var celcius = (gradofa-32)*5/9;
 return celcius;
}

var temperatura1 = 32;
var temperatura2 = 68;
alert(prueba(temperatura2));


function calcularEdad(yearNacimiento){

    return 2022-yearNacimiento;
}

var edad = 2000;

var edad1 = 2010;

var edad2 = 2020;


alert(calcularEdad(edad));

alert(calcularEdad(edad1));

alert(calcularEdad(edad2));


function jubilacion(nombre,yearNacimiento){
     var calc = 65-(2022 - yearNacimiento);

    return 'Nombre: '+ nombre+ ' Te jubilas en: '+ calc+' años';
}

alert(jubilacion('Jairo',2000))

var a= 10, b=5;
var nombre = 'jairo';

//template string

alert(`Hola: ${nombre}`)

 var  prueba =()=>{
    return 'Prueba'
}

alert(prueba())



 var examen = (nombre,positivo,negativo)=>{
  
   var respo= (100*positivo)/100;
   var resne= (100*negativo)/100;
   if (respo > 90) {
    alert(`Hola ${nombre}`);
    alert(`felicidades respuestas positivas = ${respo}% y respuestas negativas =${resne}%`);
   }else if(respo<90 && respo>70){

    alert(`Hola ${nombre}`);
    alert(`Que pedo? respuestas positivas = ${respo}% y respuestas negativas =${resne}% estas quedando mal`);
   }else if(respo<70 && respo>45){
    
    alert(`Hola ${nombre}`);
    alert(`tas quedando mal respuestas positivas = ${respo}% y respuestas negativas =${resne}%`);
   }else if(respo<45){
    
    alert(`Hola ${nombre}`);
    alert(`Nmms pana ya date de baja respuestas positivas = ${respo}% y respuestas negativas =${resne}%`);
   }



 }

examen('Jairo',20,80);
var a =()=>{
const colores= ['rojo','vrese','gucci']

for(let color of colores){
    console.log(color);
}


}

a();

var formulario = ()*/

//======================================================================================
//Crear un arreglo
var frutas =['Pera','Sandia','Piña'];
//Recorrer el arreglo
frutas.forEach(fruta => {
    console.log(fruta);
});
//Recorre el arreglo
for(fruta of frutas){
    console.log(fruta);
}

var nombres = ['Jairo','jULIO'];
//Agregar al final
nombres.push('final');
//Agregar al Principio
nombres.unshift('Principio');
//recorrer aregglos con un for
for(nombre of nombres){
    console.log(nombre);
}
//Eliminar al final
nombres.pop();

//Eliminar al principio
nombres.shift();
for(nombre of nombres){
    console.log(nombre);
}
//indexOf es para saber en que indice esta lo que se busca
console.log(nombres.indexOf('Jairo'));
//.Splice(Posicion, rango) elimina desde la posicio que se le ponga hasta la que se le de
 nombres.splice(0,2);


for(nombre of nombres){
    console.log(nombre);
}

//Se puede crear arrays no importa el tipo de contenido
const persona =['Jairo',22,1.73,'Edomex']

persona.forEach(person => {
    console.log(person);
});

//array de tipo objeto
const objetos = {
     
    nombre:'jairo',
    edad:22,
    gustos: ['Peliculas','VideoJuegos','Ingles'],
    trabajo: 'Instructor',
    casado: false
};
//Acceder a los datos del jason
console.log(objetos.nombre);
console.log(objetos['trabajo']);


//Sintaxys objet


var persona = new Object();
//agregamos las propiedades del objeto
persona.nombre = 'Jairo';
persona.edad = 22;
persona['trabajo']= 'desarrollo';

//mostramos igual que en el otro ejemplo
console.log(persona.nombre);

//objetos y metodos

var auto = {
    modelo:'mercedes',
    anio: 1980,
    combustible:58,
    kilometraje: 8,
    //se pueden agregar funciones dentro del objeto
    gasto: (a,b)=>{
     return a+b;
    }
}

console.log(auto);

console.log(auto.gasto(50,8));