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
			var i=0;
			var nbparts = $(".nb-parts").find('input').val();
			if(nbparts >0 && nbparts<=6)
			{
				$(".nb-parts").find('.pizza-pict').removeClass().addClass('pizza-pict pizza-'+nbparts);
				
			}
			if(nbparts>6){

				while(i<nbparts){
					alert(i);
				
					if(i%6==0){
						var element = $(".nb-parts").find('.pizza-pict').last();
						var new_element = element.clone();
						$(".nb-parts").find('.pizza-pict').after(new_element).removeClass().addClass('pizza-pict pizza-'+(nbparts-i));
					}
				
				i++;
				}
			}
			/*
			else if(nbparts >6)
			{
				$(".nb-parts").find('.pizza-pict').removeClass().addClass('pizza-pict pizza-6');
				var element = $(".nb-parts").find('.pizza-pict');

				var new_element = element.clone();
				$(".nb-parts").find('.pizza-pict').after(new_element);
			}
			else if(nbparts <=0)
			{
				$(".nb-parts").find('.pizza-pict').removeClass().addClass('pizza-pict pizza-1');

			}*/
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
