
// cambio de titulo a Frutas

const titulo = document.getElementById("tituloDatos")// traigo el id
titulo.innerHTML = ("Frutas") // cambio el elemento

//cambia los colores al header y footer
const cambiarColor = document.getElementById("idHeader")// traigo el id
cambiarColor.classList.add("bg-red-500") // cambio el color de la classe con el metodo classlist

const cambiarColores = document.getElementById("idFooter")
cambiarColores.classList.add("bg-orange-500")

//agregar nombre al footer
const traerFooter = document.getElementById("idNombre")
traerFooter.innerHTML = ("MindHub © Lopez Angel William Leonel | Cohort53")

//agregar div
const contenedorDiv= document.getElementById("contenedor")
//const frutasConter = frutas


const elementosCard =(nombre, foto, descripción)=>{
   return`<div class=" border border-black rounded-xl p-5 bg-white m-5">
   <img class="w-48 h-48 object-contain " src="${foto}" alt="">
   <h2 class=" text-center font-bold">${nombre}</h2>
   <p class="w-[200px] text-xs">${descripción}</p>
   </div>`
}

const recorrioCard =(elementos)=>{
     
    let contadorFrutas=""
    for (const agregarfrutas of elementos) {
    contadorFrutas+=elementosCard(agregarfrutas.nombre,agregarfrutas.foto,agregarfrutas.descripcion)
}
   return contadorFrutas 
}
contenedorDiv.innerHTML=(recorrioCard(frutas))
 
//------------------------------------------------------------
const listaFrutas = document.createElement('div')
listaFrutas.id = 'lista'
listaFrutas.innerHTML = ('<h3 class="text-4xl m-10">Frutas Dulces</h3>')

// Agregar el nuevo div al main
const mainElement = document.querySelector('main')
mainElement.appendChild(listaFrutas)

// Paso 11: Crear una función para mostrar la lista de frutas dulces en el div "#lista"
function mostrarFrutasDulces(frutasDulce) {
  // Filtrar las frutas dulces
  const frutasDulces = frutasDulce.filter(fruta => fruta.esDulce=true)

  // Crear la lista desordenada (ul)
  const listaDesordenada = document.createElement('ul')

  // Iterar sobre las frutas dulces y crear nodos li para cada una
  frutasDulces.forEach(frutita => {
    const frutaCreada = document.createElement('li')
    frutaCreada.textContent = frutita.nombre // Utilizar el nombre de la fruta como contenido del nodo
    listaDesordenada.appendChild(frutaCreada) // Agregar el nodo a la lista desordenada
  });

 

  // Agregar la lista desordenada al div
  listaFrutas.appendChild(listaDesordenada)
}

// Mostrar la lista de frutas dulces en el div "#lista"
mostrarFrutasDulces(frutas)




 

   
 

 