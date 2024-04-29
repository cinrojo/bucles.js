
// Definimos un array de frutas
const nombres = ["Manzana", "Banana", "Naranja", "Mandarina", "Frutilla"];

// Seleccionamos el elemento <ul> donde queremos mostrar las frutas
const listaFrutas = document.getElementById('listaFrutas');;

// Utilizamos forEach para imprimir cada fruta en la lista
frutas.forEach(fruta => {
  // Creamos un elemento de lista <li>
  const itemLista = document.createElement('li');
  // Establecemos el texto del elemento de lista como la fruta actual
  itemLista.textContent = fruta;
  // Agregamos el elemento de lista a la lista <ul>
  listaFrutas.appendChild(itemLista);
});
