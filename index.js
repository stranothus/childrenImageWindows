var sharedBackgrounds = document.getElementsByClassName("shared-background");

for(var i = 0; i < sharedBackgrounds.length; i++) {
	var img = sharedBackgrounds[i].dataset.src;
	var shares = sharedBackgrounds[i].getElementsByClassName("share");
	
	for(var e = 0; e < shares.length; e++) {
		shares[e].style.backgroundImage = "url('" + img + "')";
		shares[e].style.backgroundSize = "100vw";
		shares[e].style.backgroundRepeat = "no-repeat";
		shares[e].style.backgroundPosition = -shares[e].getBoundingClientRect().left + "px 0px";
	}
}
