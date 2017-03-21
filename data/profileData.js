var profileData =  {
	"profiles": {
		"Matthew": {
			"id": "nameMatthew",
			"name": "Matthew Hall",
			"location": "Ohio",
			"companyPostion": "Technical Lead",
			"image": "n3",
			"bio": "Matthew Hall is a 17 year old designer & developer in Dayton, Ohio. He is skilled in Javascript/NodeJS, C#, Less, and the Unity Game Engine. In his free time he explores exotic mathematics, builds 3D printers, and runs lots. He is currently an engineering student. "
		},
		"Peter": {
			"id": "namePeter",
			"name": "Peter Hall",
			"location": "Ohio",
			"companyPostion": "Systems Engineer",
			"image": "n2",
			"bio": "Peter Hall is a 15 year old developer at Hall Tech. He lives in Dayton, Ohio. He is skilled primarily in Javascript, Less, and PHP. He has interests in physics, mathematics, astronomy, and engineering as well and has built a 3D printer from scratch with his brother Matthew."
		},
		"Daniel": {
			"id": "nameDaniel",
			"name": "Daniel Oltmanns",
			"location": "Germany",
			"companyPostion": "Full-Stack Developer",
			"image": "n1",
			"bio": "Daniel Oltmanns is a 16 year old full-stack Web Developer in Germany. In his early days, he was fascinated by code and started by creating games. Later on he got into web development and is skilled in HTML5, JavaScipt, Node.js, Crystal, and PHP."
		},
	
		"Ryan": {
			"id": "nameRyan",
			"name": "Ryan Wolf",
			"location": "Ohio",
			"companyPostion": "Front-End Developer",
			"image": "n4",
			"bio": "Ryan Wolf is a front end developer living in Dayton, Ohio. He is talented it Javascript/JQuery, Java, and HTML5. He enjoys [insert stuff here]."
		}
	},
	"template": `
			<!--<i class="material-icons close">clear</i>-->
			<div class="circle" id="{{image}}"></div>
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
		
		`
}
