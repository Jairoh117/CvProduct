let mostrar =(a )=>{
    return console.log(a);
   }
   
/*//Creamos un objeto
var auto ={
    Marca:'Mercedes',
    anio:1980,
    categoria:'alta',
    NuProduccion:12345,
    rendimiento:'4.5klm'
}

//Revisamos el objeto
alert(auto.Marca);

const marcas = ['Rolls Roice', 'Ferrari','Lamborguini'];
//agregamos algo al final
marcas.push('Final');
//agregamos algo al principio
marcas.unshift('Principio');

marcas.forEach(conteo=>{
    alert(conteo);
})
//Remplazamos el indice indicado
marcas[1]='BugattiChiron'
console.log(marcas[1]);
console.log(marcas.indexOf('Ferrari'));
//Elimina al final
marcas.pop();
for(let i of marcas){
    console.log(i);
}
//Elimina al principio
marcas.shift();

for(let i of marcas){
    console.log(i);
}

const clasificacion = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio'];
clasificacion.forEach(clasificados =>{

    console.log(clasificados);
})
console.log("===========================================");
clasificacion.splice(5,1);
clasificacion.unshift('Martha');

clasificacion[2] = 'Roberto';
clasificacion[3] = 'Maya';

clasificacion[4] = 'Osvaldo';
clasificacion[5] = 'CELIA';
clasificacion[6]='Raul';
clasificacion.push('Maria');

clasificacion.forEach(clasificados =>{
    console.log(clasificados);
})


//Funciones

function prueba(){
    //Codigo
    return null;
}

console.log(prueba());

var prueba2 = ()=>{
   return null;
}

console.log(prueba2());


const persona={
    nombre: 'Jairo',
    edad: 22,
    peso: 84,
    estatura: 1.75,
    a:(imc)=>{
      return imc = this.estatura * imc;
    }
}

console.log(persona.nombre)

console.log(persona.a(5))
*/

// mostrar(document.title);

// document.title = 'cambio de nombre';
// mostrar(document.title)

// var a = document.getElementById('header-title');
// var broma = 'La lista negra';
// a.textContent = `${broma}`;

// var pruebaClase = document.getElementsByClassName('list-group-item')
// pruebaClase[0].textContent = 'Jairo';
// pruebaClase[1].textContent = 'Julio'

// var pruebaetiqueta = document.getElementsByTagName('li');
// pruebaetiqueta[2].textContent = 'Cesar';

//Seleccionamos las clases
var prueba = document.querySelector('#main-header');
 mostrar(prueba);
//Modificamos su estilo
prueba.style.border =' solid black';

 var prueba2 = document.querySelector('.list-group-item')
mostrar(prueba2);
prueba2.style.border=' solid black';

var prueba3 = document.querySelectorAll('.list-group-item');

for(let a in prueba3){
 prueba3[a].style.color='red';
 prueba3[a].style.border=' solid black';
 
} 

var submit = document.querySelector('input[type=submit]')

mostrar(submit);