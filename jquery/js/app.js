jQuery(document).ready(function($){
	$(".radio" ).mouseover(
		function(){
			$(this).find('.description').removeClass('no-display');
	}).mouseout(function(){
			$(this).find('.description').addClass('no-display');
	});

	var prevparts = $(".nb-parts").find('input').val();
	$(".nb-parts").find('input').on('keyup',
		function(){
			var nbparts = $(".nb-parts").find('input').val();
			if(nbparts >0 && nbparts<=6)
			{
				$(".nb-parts").find('.pizza-pict').removeClass().addClass('pizza-pict pizza-'+nbparts)
			}
			else if(nbparts >6)
			{
				$(".nb-parts").find('.pizza-pict').removeClass().addClass('pizza-pict pizza-6')
			}
			else if(nbparts <=0)
			{
				$(".nb-parts").find('.pizza-pict').removeClass().addClass('pizza-pict pizza-1')
			}
	});

	$('.next-step').on('click',
		function(e){
			e.preventDefault();
			$('.infos-client').removeClass('no-display');
			$('.next-step').addClass('no-display');
	});

	$('.add').on('click',
		function(){
			$('.type').find('button').before("<br><input type=\"text\">");
	});

	$('.done').on('click',
		function(){
			$('.type,.infos-client').addClass('no-display');
			$('.main').append('<h3>Merci d\'avoir choisi Pimp My Pizza !<h3>');
	});
});
