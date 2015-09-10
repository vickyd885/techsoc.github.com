// main JS for all custom JS
$(document).ready(
	function(){
		console.log("I <3 TechSoc");
		SupportKit.init({
			appToken: 'bduztoii0oqw4werjrkqk3lcr',
			givenName: 'rando'
		});
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

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


$(function(){

        $("#typer").typed({
            strings: ["simple.", "accessible.", "problem-solving.", "collaboration.", "building the future, <strong>now</strong>."],
            typeSpeed: 100,
            backDelay: 1000,
            loop: false,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function(){ call(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typer").typed('reset');
        });

    });

    function newTyped(){ /* A new typed object */ }

    function call(){ console.log("We know you <3 TechSoc too."); }
