
window.onload = function() {
	var elementButton = document.querySelector('.elevator-button-1');
    	var elevator = new Elevator({
            element: elementButton,
		    mainAudio: 'audio/elevator-bossa.mp3',
		    endAudio: 'audio/elevator-ding.mp3'
  });
}
$(window).scroll(function(i){
    var scrollVar = $(window).scrollTop();
    // $('.elevator-button-1').css({'top': .7*scrollVar });
    $('.elevator-button-1').css({'opacity':( -800 + scrollVar )/100});
})

// You can run the elevator, by calling.
elevator.elevate();


