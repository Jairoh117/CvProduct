let m =(a )=>{
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
// var prueba = document.querySelector('#main-header');
//  mostrar(prueba);
// //Modificamos su estilo
// prueba.style.border =' solid black';

//  var prueba2 = document.querySelector('.list-group-item')
// mostrar(prueba2);
// prueba2.style.border=' solid black';

// var prueba3 = document.querySelectorAll('.list-group-item');

// for(let a in prueba3){
// //  prueba3[a].style.color='red';
// //  prueba3[a].style.border=' solid black';
 
// } 

// var submit = document.querySelector('input[type="submit"]')
// submit.value= "Enviar";
// // mostrar(submit);


// //parentnode //se nos da la etiqueta contenedor del padre
//  let itemlist = document.querySelector('#items');
// m(itemlist.parentNode);
 
// // ===================
// //parentElement
// // Nos muestra los elementos del contenedor
// mostrar(itemlist.parentElement);
 



// // =========ChildNodes==========

// mostrar(itemlist.childNodes)

// // =========Children==========
// mostrar(itemlist.children)

// // firstChild
// //firtelementChile
// // primer elemento de la lista
// mostrar(itemlist.firstElementChildChild);

// //Lastchild
// //Ultimo elemento de la lista
// mostrar(itemlist.lastChild);

// previusSibling
// mostrar(itemlist.previousElementSibling)
 
// // nextelementsiblibd

// mostrar(itemlist.nextElementSibling)



// // Crear elementos en nuestra pagina web

// var nuevodiv = document.createElement('div');
// nuevodiv.className= 'hola';
// nuevodiv.id= 'div-hola';
// nuevodiv.setAttribute('title','Hola mundo');

// // create text mode
// var nuevonodotext = document.createTextNode('hola mundo')
// nuevodiv.appendChild(nuevonodotext)

// m(nuevodiv)

// // agregarlo a la pagina html

// var contenedor = document.querySelector('.container')

// var h1 = document.querySelector('h1');
// m(h1);

// contenedor.insertBefore(nuevodiv,h1)



// eventos
// // onclick para le html
// function hacerclick(){
//     alert("creaste una funcion y la conectaste");
// }

// //forma correcta de hacer los eventos 
// document.getElementById('id').addEvenelistener('click', ()=>{
//     alert("Xd");
// })

// agregar un elemento

var form = document.getElementById('agregarform');

var lista = document.getElementById('items')


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var nuevoitem = document.getElementById('itemEnviar').value;

    var li = document.createElement('li');

    li.className='list-group-item';
    li.appendChild(document.createTextNode(nuevoitem));
    var evebo = document.createElement('button');
    evebo.className='btn btn-danger btn-sm float-right'
    evebo.appendChild(document.createTextNode('x'));

    li.appendChild(evebo);

    lista.appendChild(li);
})