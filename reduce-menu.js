/* Detecta el scroll para cambiar estilos */

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 10) {
    $("nav").addClass("scroll");
  } else {
    $("nav").removeClass("scroll");
  }
});

/* despliega el menu mobile al precsionar el boton */

$("#menu-button").on("click", function () {
  $("nav").toggleClass("on");
});
