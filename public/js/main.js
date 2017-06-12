console.log("Bienvenido");
var contador = 1;
var imagenes = [
  {
    urlImg: "assets/img/1.png"
  },
  {
    urlImg: "assets/img/2ivysaur.png"
  }

];
var cargarPagina = function () {
    cargarPokemons();
    cargarModal();
    // $(document).on("click", ".pokemon", mostrarDetallePokemon);
};

var cargarModal = function(){
  $('.modal').modal();
};

var cargarPokemons = function () {
    var url = 'https://pokeapi.co/api/v2/pokemon';
   $.getJSON(url, function(response){//se agrega JSON a $.get --> con esto espera automáticamente como respuesta un JSON / se usa $.get cuando no se sabe de que tipo será la respuesta
       var pokemons = response.results;
      //  console.log(pokemons);
       mostrarPokemon(pokemons);
   });
};

var plantillaTarjeta =
// '<div class="pokemon">'+
//       // '<img src=__urlImg__ alt="pokemon" class="responsive-img">'+
//       '<h6 >__nombre__</h6>'+
//     '</div>';

    '<section class="pokemon">'+
        '<div class="">'+
          '<div class="card blue-grey lighten-2">'+
            '<div class="card-content white-text">'+
              '<a class="waves-effect waves-light center" href="#pok'+contador+'">'+
                '<img src="assets/img/5charmeleon.png" alt="pokemon" class="responsive-img">'+
              '</a>'+
              '<span data-name="" class="center">__nombre__</span>'+
            '</div>'+
          '  <div id="pok'+ contador +'"'+ 'class="modal">'+
          '  <div class="modal-content">'+
              '<h4>__nombre__</h4>'+
              '<p>A bunch of text</p>'+
            '</div>'+
            '<div class="modal-footer">'+
              '<a href="#!" class="modal-action modal-close waves-effect waves-blue btn-flat">Cerrar</a>'+
            '</div>'+
          '</div>'+
          '</div>'+
        '</div>'+
    '</section>';


var mostrarPokemon = function (pokemons) {
    var tarjetaPokemon = "";
    var $contenedorTarjetas = $("#tarjetas");

    pokemons.forEach(function (pokemon) {
      tarjetaPokemon += plantillaTarjeta.replace('__nombre__',pokemon.name)
      contador++;
      // console.log(contador);
    });
    $contenedorTarjetas.html(tarjetaPokemon);

};

var mostrarDetallePokemon = function(){
    // var url = ($(this).data("url"));
    // var $planetaContenedor = $("#planeta");
    // $.getJSON(url, function (response){
    //     $planetaContenedor.html(
    //         plantillaPlaneta.replace('__nombre__', response.name).replace('__clima__', response.climate)
    //     );
    // });
}

$(document).ready(cargarPagina);
