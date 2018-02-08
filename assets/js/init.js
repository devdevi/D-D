(function($) {
  $(function() {
    $('.button-collapse').sideNav();
    $('select').material_select();

    $('.buttonP').click(function(){
      $('#dragD').show();
    })
  }); // end of document ready
})(jQuery);
$('#autocomplete-input').autocomplete({
  data: {
	  'Apple': null,
	  'Microsoft': null,
	  'Google': 'https://placehold.it/250x250'
  },
  limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
  onAutocomplete: function(val) {
	  // Callback function when value is autcompleted.
  },
  minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
});
	      // end of jQuery name space
function agregaPosteo() {

  // Paso 1. Rescatamos el contenedor-posteos, el nombre y el
  //   comentario del usuario
  var containerPosteos = document.getElementById("contenedor-posteos");
  var nombreFF = document.getElementById("nombre").value;
  var contenidoFF = document.getElementById("cajaposteos").value;

  // Es el elemento que creamos. Es donde irá nuestro post
  var nuevoPost = document.createElement("div");

  // Ahora veamos donde metemos esos valores
  var contenedorNombre = document.createElement("strong");
  var contenedorPost = document.createElement("p");
  var separacíon = document.createElement("hr");
  // crear elementos el corazon
  var parrafCorazon = document.createElement('p');
  var i = document.createElement('i');

  parrafCorazon.appendChild(i);

  // set attributos del corazon
  parrafCorazon.setAttribute("class", "corazon");
  i.setAttribute("class", "fa fa-heart");
  i.setAttribute("arial-hidden", "true");

  // Ahora hay que transformar el nombre a nodo de texto
  var nodoNombre = document.createTextNode(nombreFF + " escribió:");
  var nodoPosteo = document.createTextNode(contenidoFF);

  // Ahora metemos esos nodos de texto a los elementos que ya creamos
  contenedorNombre.appendChild(nodoNombre);
  contenedorPost.appendChild(nodoPosteo);


  // Ahora agregamos el nombre y el contenido del posteo al post
  nuevoPost.appendChild(contenedorNombre);
  nuevoPost.appendChild(contenedorPost);
  nuevoPost.appendChild(parrafCorazon);
  nuevoPost.appendChild(separacíon);

  // evento click en el corazon
  i.addEventListener("click", function(){
    // al elemento i se le pasa la clase rojo
    i.classList.toggle('rojo');
  });

  // Finalmente, le damos atributos a nuestro post y lo metemos en el contenedor de posteos
  nuevoPost.setAttribute("class", "posteo");
  containerPosteos.appendChild(nuevoPost);

  // Resetear los campos a blanco
  document.getElementById("nombre").value = "";
  document.getElementById("cajaposteos").value = "";
}

//ACA DECLARAREMOS NUESTRAS FUNCIONES PARA HACER POSIBLE LA TRANSFERNCIA DE DATOS
function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);//ACA INDICAMOS EL TIPO DE DATO (FORMATO) QUE VAMOS A TRANFERIR 
}

function permitirDrop(ev){
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');//ACA RECUPERAMOS LOS DATOS 
  ev.target.appendChild(document.getElementById(id_foto));
}  