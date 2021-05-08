var sharedBackgrounds = document.getElementsByClassName("shared-background");

for(var i = 0; i < sharedBackgrounds.length; i++) {
	var img = sharedBackgrounds[i].dataset.src;
	var shares = sharedBackgrounds[i].getElementsByClassName("share");
	
	for(var e = 0; e < shares.length; e++) {
		shares[e].style.backgroundImage = "url('" + img + "')";
		shares[e].style.backgroundAttachment = "fixed";
	}
}

window.addEventListener("scroll", function() {
	for(var i = 0; i < sharedBackgrounds.length; i++) {
		var shares = sharedBackgrounds[i].getElementsByClassName("share");
		
		for(var e = 0; e < shares.length; e++) {
			var scrolled = -shares[e].getBoundingClientRect().top;
			
			shares[e].style.backgroundPosition = "0px " + -scrolled + "px";
		}
	}
});

window.scroll(0, 1);//to start the scroll function off at the beginning. Some appearance errors may occur if not incldued
