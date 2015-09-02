// main JS page
$('h2').after('<div id="circle"></div><hr/>');

$('.navbar-toggle').hover(
	function(){
		$('.icon-bar').css('background-color','#0E152F');
	},
	function(){
		$('.icon-bar').css('background-color','#ddd');
	}
);

$('.dropdown-toggle').mouseenter(
	function(){
		$(this).css('color','#0E152F');
		$(this).css('background-color','#EEEEEE');
	}
);

$('.dropdown-toggle').mouseleave(
	function(){
		$(this).css('color','#FFF');
		$(this).css('background-color','#0E152F');
	}
);