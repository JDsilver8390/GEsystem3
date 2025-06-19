//loading
$(window).on('load', function(){
  $('#loaderBox').fadeOut();
});
//時間限制
$(document).ready(function(){
  setTimeout( function(){ $('#loaderBox').fadeOut(); },2500)
});