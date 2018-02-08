(function($) {
  $(function() {
    $('#dragD').hide();
    $('.button-collapse').sideNav();
    $('select').material_select();

    $('.buttonP').click(function() {
      $('#dragD').show();
      $('#initD').hide();

});
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
// ACA DECLARAREMOS NUESTRAS FUNCIONES PARA HACER POSIBLE LA TRANSFERNCIA DE DATOS
function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);// ACA INDICAMOS EL TIPO DE DATO (FORMATO) QUE VAMOS A TRANFERIR 
}

function permitirDrop(ev) {
  ev.preventDefault();
}
function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');// ACA RECUPERAMOS LOS DATOS 
  ev.target.appendChild(document.getElementById(id_foto));
} 

var config = {
  apiKey: 'AIzaSyCRo9Y6hu2fPg88S00vd4-2lb9E-2nzgws',
  authDomain: 'draganddrop-ca86f.firebaseapp.com',
  databaseURL: 'https://draganddrop-ca86f.firebaseio.com',
  projectId: 'draganddrop-ca86f',
  storageBucket: 'draganddrop-ca86f.appspot.com',
  messagingSenderId: '402962922580'
};
firebase.initializeApp(config); 
var provider = new firebase.auth.FacebookAuthProvider();