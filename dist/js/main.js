
// Main UI

function picker(query) {
	return document.querySelector(query)
}

var header = picker("header#flat"),
	button = picker("header #close"),
	modal = picker("section#contact-form"),
	contactButton = picker("#button"),
	blackout = picker("#blackout"),
	close = picker(".close")



button.onclick = closeHeader
contactButton.onclick = openContactForm
blackout.onclick = closeContactForm


function closeHeader () {
	if ( parseInt(header.style.left) < 0) {
		header.style.left = "0"
		button.style.boxShadow = "none"
	} else {
		header.style.left = (-window.innerWidth).toString() + "px"
		button.style.boxShadow = "0 0 8px 1px #181818b3"
	}
}

function openContactForm () {
	modal.style.visibility = "visible"
	modal.style.opacity = 1
	blackout.style.visibility = "visible"
	blackout.style.opacity = 0.5
}
function closeContactForm () {
	modal.style.opacity = 0
	modal.style.visibility = "hidden"
	blackout.style.opacity = 0
	blackout.style.visibility = "hidden"
}

// Portfolio Madness

let profileButtons = document.querySelectorAll("button.uniqueJavaScriptName")
var profilePopup = picker("section#profile")
var profileBlackout = picker("div#profileBlackout")

// populated dynamically for each form
var content = {
	
}
// mustache.js template
var template = profileData.template



for(let buttonClick of profileButtons) {
	buttonClick.onclick = function(){
		generatePopup(buttonClick)
	}
}

function generatePopup(buttonClick) {
	var index = buttonClick.id

	switch (index) {
		case "nameMatthew":
			populateContent("Matthew")
			break
		case "namePeter":
			populateContent("Peter")
			break
		case "nameDaniel":
			populateContent("Daniel")
			break
		case "nameRyan":
			populateContent("Ryan")
			break
		default:
			break
	}

	var html = Mustache.to_html(template, content)
	// var profile = document.createElement("div")
	// profile.innerHTML = html
	// profile.className = "pro"
	picker("div.profile-popup").innerHTML = html


	showProfile()
}


profileBlackout.onclick = hideProfile

function populateContent(person) {
	content = profileData.profiles[person]
	
}

function showProfile () {
	profileBlackout.style.visibility = "visible"
	profileBlackout.style.opacity = 0.5
	profilePopup.style.visibility = "visible"
	profilePopup.style.opacity = 1
}

function hideProfile () {
	profilePopup.style.opacity = 0
	profilePopup.style.visibility = "hidden"
	profileBlackout.style.opacity = 0.5
	profileBlackout.style.visibility = "hidden"
	console.log("closing")
}