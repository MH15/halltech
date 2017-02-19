function picker(query) {
	return document.querySelector(query)
}


var header = picker("header#flat"),
	button = picker("header #close")


button.onclick = closeHeader




function closeHeader () {
	if ( parseInt(header.style.left) < 0) {
		console.log("opening")
		header.style.left = "0"
		button.style.boxShadow = "none"

	} else {
		console.log("closing")
		header.style.left = (-window.innerWidth).toString() + "px"
		button.style.boxShadow = "0 0 8px 1px #181818b3"
	}
}