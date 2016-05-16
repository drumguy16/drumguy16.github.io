
window.onload = function() {
	var elementButton = document.querySelector('.elevator-button-1');
    	var elevator = new Elevator({
            element: elementButton,
		    mainAudio: 'audio/elevator-bossa.mp3',
		    endAudio: 'audio/elevator-ding.mp3'
  });

	var elementButton = document.querySelector('.elevator-button-2');
	    var elevator = new Elevator({
	        element: elementButton,
	    	mainAudio: 'audio/elevator-bossa.mp3',
	    	endAudio: 'audio/elevator-ding.mp3'
  });

	var elementButton = document.querySelector('.elevator-button-3');
		var elevator = new Elevator({
		    element: elementButton,
		    mainAudio: 'audio/elevator-bossa.mp3',
		    endAudio: 'audio/elevator-ding.mp3'
  });

	var elementButton = document.querySelector('.elevator-button-4');
		var elevator = new Elevator({
		    element: elementButton,
		    mainAudio: 'audio/elevator-bossa.mp3',
		    endAudio: 'audio/elevator-ding.mp3'
  });

	var elementButton = document.querySelector('.elevator-button-5');
		var elevator = new Elevator({
		    element: elementButton,
		    mainAudio: 'audio/elevator-bossa.mp3',
		    endAudio: 'audio/elevator-ding.mp3'
  });
}

// You can run the elevator, by calling.
elevator.elevate();
