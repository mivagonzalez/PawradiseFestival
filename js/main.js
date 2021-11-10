$(document).ready(function() {
	if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { click = 'click'; }

	$('div.burger').on(click, function(){
		if( !$(this).hasClass('open') ){ openMenu(); } 
		else { closeMenu(); }
	});

	$('div.menu ul li a').on(click, function(){
		closeMenu();
	});		
	var blurPage = 'blur(0px)';
	var unBlurPage = 'blur(4px)';
	$('#comprarEntradasButton').mouseenter(function () {
		$('#blur').css('filter', blurPage);
		$('#dog').css('opacity', '0');
		$('#dog2').css('opacity', '1');
	});
	
	$('#comprarEntradasButton').mouseleave(function () {
		$('#blur').css('filter', unBlurPage);
		$('#dog2').css('opacity', '0');
		$('#dog').css('opacity', '1');
	});
	
	$('#amount1').on(click, function(){
		$('#amount1').css('background-color', '#DC959D');
		$('#amount1').css('border', '4px solid #FADFE4');
		$('#amount1').css('box-shadow', 'inset 0 0 3px 0px #000000');
		
		$('#amount2').css('background-color', '#FADFE4');
		$('#amount2').css('border', '4px solid #DC959D');
		$('#amount2').css('box-shadow', 'none');
		
		$('#amount3').css('background-color', '#FADFE4');
		$('#amount3').css('border', '4px solid #DC959D');
		$('#amount3').css('box-shadow', 'none');
		
		$('#amount4').css('background-color', '#FADFE4');
		$('#amount4').css('border', '4px solid #DC959D');
		$('#amount4').css('box-shadow', 'none');
	});
	
	$('#amount2').on(click, function(){
		$('#amount2').css('background-color', '#DC959D');
		$('#amount2').css('border', '4px solid #FADFE4');
		$('#amount2').css('box-shadow', 'inset 0 0 3px 0px #000000');
		
		$('#amount1').css('background-color', '#FADFE4');
		$('#amount1').css('border', '4px solid #DC959D');
		$('#amount1').css('box-shadow', 'none');
		
		$('#amount3').css('background-color', '#FADFE4');
		$('#amount3').css('border', '4px solid #DC959D');
		$('#amount3').css('box-shadow', 'none');
		
		$('#amount4').css('background-color', '#FADFE4');
		$('#amount4').css('border', '4px solid #DC959D');
		$('#amount4').css('box-shadow', 'none');
	});
	
	$('#amount3').on(click, function(){
		$('#amount3').css('background-color', '#DC959D');
		$('#amount3').css('border', '4px solid #FADFE4');
		$('#amount3').css('box-shadow', 'inset 0 0 3px 0px #000000');
		
		$('#amount2').css('background-color', '#FADFE4');
		$('#amount2').css('border', '4px solid #DC959D');
		$('#amount2').css('box-shadow', 'none');
		
		$('#amount1').css('background-color', '#FADFE4');
		$('#amount1').css('border', '4px solid #DC959D');
		$('#amount1').css('box-shadow', 'none');
		
		$('#amount4').css('background-color', '#FADFE4');
		$('#amount4').css('border', '4px solid #DC959D');
		$('#amount4').css('box-shadow', 'none');
	});
	
	$('#amount4').on(click, function(){
		$('#amount4').css('background-color', '#DC959D');
		$('#amount4').css('border', '4px solid #FADFE4');
		$('#amount4').css('box-shadow', 'inset 0 0 3px 0px #000000');
		
		$('#amount2').css('background-color', '#FADFE4');
		$('#amount2').css('border', '4px solid #DC959D');
		$('#amount2').css('box-shadow', 'none');
		
		$('#amount3').css('background-color', '#FADFE4');
		$('#amount3').css('border', '4px solid #DC959D');
		$('#amount3').css('box-shadow', 'none');
		
		$('#amount1').css('background-color', '#FADFE4');
		$('#amount1').css('border', '4px solid #DC959D');
		$('#amount1').css('box-shadow', 'none');
	});

	function openMenu(){
		$('div.circle').addClass('expand');		
		$('div.burger').addClass('open');	
		$('div.x, div.y, div.z').addClass('collapse');
		$('.menu li').addClass('animate');
		setTimeout(function(){ 
			$('div.y').hide(); 
			$('div.x').addClass('rotate30'); 
			$('div.z').addClass('rotate150'); 
		}, 70);
		setTimeout(function(){
			$('div.x').addClass('rotate45'); 
			$('div.z').addClass('rotate135');  
		}, 120);
	}

	function closeMenu(){
		$('div.burger').removeClass('open');	
		$('div.x').removeClass('rotate45').addClass('rotate30'); 
		$('div.z').removeClass('rotate135').addClass('rotate150');				
		$('div.circle').removeClass('expand');
		$('.menu li').removeClass('animate');
		setTimeout(function(){ 			
			$('div.x').removeClass('rotate30'); 
			$('div.z').removeClass('rotate150'); 			
		}, 50);
		setTimeout(function(){
			$('div.y').show(); 
			$('div.x, div.y, div.z').removeClass('collapse');
		}, 70);													
	}	
});


