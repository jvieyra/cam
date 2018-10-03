/* main.js*/
	//menu
$(document).ready(function(){

	let openMenu = $('#open-menu');
	let menu = $('#menu');
	let closeMenu = $('#close-menu');

	openMenu.on('click',function(e){
		e.preventDefault();
		menu.css( "display", "block" );
		menu.removeClass('animated bounceOutUp');
		menu.addClass('animated bounceInDown');

	});

	closeMenu.on('click',function(e){
		e.preventDefault();
		menu.removeClass('animated bounceInDown');
		menu.addClass('animated bounceOutUp');
		setTimeout(function(){
  		menu.css("display","none");
		}, 2000);
		
	});

});