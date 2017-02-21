function picker(query) {
	return document.querySelector(query)
}


var header = picker("header#flat"),
	button = picker("header #close")


button.onclick = closeHeader




function closeHeader () {
	if ( parseInt(header.style.left) < 0) {
		header.style.left = "0"
		button.style.boxShadow = "none"

	} else {
		header.style.left = (-window.innerWidth).toString() + "px"
		button.style.boxShadow = "0 0 8px 1px #181818b3"
	}
}




var modal = picker("section#contact-form"),
	contactButton = picker("#button"),
	blackout = picker("#blackout")


contactButton.onclick = openContactForm

blackout.onclick = closeContactForm



function openContactForm () {
	modal.style.visibility = "visible"
	modal.style.opacity = 1
	blackout.style.visibility = "visible"
	blackout.style.opacity = 0.5
}

function closeContactForm () {
	console.log("closing")
	modal.style.opacity = 0
	modal.style.visibility = "hidden"
	blackout.style.opacity = 0
	blackout.style.visibility = "hidden"
}
