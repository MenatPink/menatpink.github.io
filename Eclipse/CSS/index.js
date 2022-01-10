$(document).ready(function(){
    $(window).scroll(function(){

var wScroll = $(this).scrollTop();

if(wScroll > $('.section3').offset().top - ($(window).height()/4)){

  $('.featureWrapper').each(function(i)){
    setTimeout(function(){
            $('.featureWrapper').eq(i).addClass('isShowing');
          }, 150 * (i+1));
  };

};

  });
});
