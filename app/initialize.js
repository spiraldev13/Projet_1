$(document).ready(function(){


  var app = {
    init: function() {
      console.log('App : init');


  $('.menu_burger').on('click', app.burger)

// Fonctions
  },

  burger: function(){
    $(this).toggleClass('activeburger');
    $('.testa').toggleClass('active')
    $(".menu li").slideToggle('fast');

    console.log('click');
  }


  };

  $(app.init);

// Fin chargement DOM
});
