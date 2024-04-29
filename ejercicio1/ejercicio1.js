const lista = document.getElementById("listaNumeros");

  // Utiliza un bucle for para agregar números del 1 al 10 como elementos de lista
  for (let i = 1; i <= 10; i++) {
    // Crea un nuevo elemento de lista LI
    const itemLista = document.createElement('li');
    // Establece el texto del elemento de lista como el número actual del bucle
    itemLista.textContent = i;
    // Agrega el elemento de lista a la lista UL
    lista.appendChild(itemLista);
  }