window.addEventListener("load", function(){
	var wiz = $('#wizard');
	wiz.style.pointerEvents = 'initial';

	var css = document.createElement('style');
	css.textContent = `@keyframes squishyAnim {
	  0%,
	  100% {
		transform: scale(1);
		transform-origin: bottom;
	  }
	  25% {
			transform: scale(1.3, 0.8);
		}
	  75% {
		transform: scale(0.8, 1.3);
	  }
	}`;
	document.head.appendChild(css);

	wiz.onclick = (function() {
		var colours = [ 'red', 'blue', 'darkorchid', 'lime' ];
		var currentColour = $('#wizard svg #wiz-hat').style.fill;
		var nextColour;
		wiz.style.animation = 'none';

		do {
			nextColour = colours[Math.floor(Math.random() * colours.length) ];
		} while(nextColour == currentColour);

		$('#wizard svg #wiz-hat').style.fill = nextColour;

		setTimeout(function() {
			wiz.style.animation = 'squishyAnim 0.22s ease-out';
		}, 0);
	});
});