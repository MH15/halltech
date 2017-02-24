

var profileData =  {
	"profiles": {
		"Matthew": {
			"id": "nameMatthew",
			"name": "Matthew Hall",
			"location": "Ohio",
			"companyPostion": "Dope",
			"bio": "Peter Hall is a 15 year old cofounder of Hall Technologies and a full stack developer there. He lives in Ohio, USA, and enjoys physics and engineering as well. In his spare time, he likes to run and build 3D printers."

		},
	
		"Peter": {
			"id": "namePeter",
			"name": "Peter Hall",
			"location": "Ohio",
			"companyPostion": "Dope",
			"bio": "Peter Hall is a 15 year old cofounder of Hall Technologies and a full stack developer there. He lives in Ohio, USA, and enjoys physics and engineering as well. In his spare time, he likes to run and build 3D printers."
	
		},
	
		"Daniel": {
			"id": "nameDaniel",
			"name": "Daniel Oltmanns",
			"location": "Germany",
			"companyPostion": "Dope",
			"bio": "Peter Hall is a 15 year old cofounder of Hall Technologies and a full stack developer there. He lives in Ohio, USA, and enjoys physics and engineering as well. In his spare time, he likes to run and build 3D printers."
	
		},
	
		"Ryan": {
			"id": "nameRyan",
			"name": "Ryan Wolf",
			"location": "Ohio",
			"companyPostion": "Dope",
			"bio": "Peter Hall is a 15 year old cofounder of Hall Technologies and a full stack developer there. He lives in Ohio, USA, and enjoys physics and engineering as well. In his spare time, he likes to run and build 3D printers."
	
		}
	},

	"template": `
		<div class="profile-popup">
			<!--<i class="material-icons close">clear</i>-->
			<div class="circle" id="n2"></div>
			<h1 class="card-title">{{name}}</h1>
			<p class="subtitle">{{companyPostion}}</p>
			<article>{{bio}}</article>
			<div class="social">
				<span>
					<img class="icon" src="dist/res/social/twitter.svg" width="25">
				</span>
				<span>
					<img class="icon" src="dist/res/social/github.svg" width="25">
				</span>
			</div>
		</div>
		
		`
}
