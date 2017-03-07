$(document).ready(function() {

$('.learnmore').on('click', function(event){
	event.preventDefault();
	$('.learnmore').hide();
	$('#learnmoretext').slideDown();
    	
  });

 $('.readmore a').on('click', function(event){
		event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore a').hide();
    $('.readless').show();
  });
  $('.readless').on('click', function(event){
		event.preventDefault();
	$('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore a').show();
  });

});
