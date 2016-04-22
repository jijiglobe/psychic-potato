console.log("code initialized");

var vimage = document.getElementById("vimage");
//var dvd = document.getElementById("dvd");

<<<<<<< HEAD
var animate = function(){
    var xvel = 1;
    var yvel = 1;
    var xcor = 50;
    var ycor = 0;
=======
var bounce = function(mydvd){
    console.log("bouncing");
    var dvd = mydvd;
    if(xcor >= 400){
	xvel = -1;
    }
    if(ycor >= 400){
	yvel = -1;
    }
    if(xcor<=0){
	xvel = 1;
    }
    if(ycor<=0){
	yvel = 1;
    }
    
>>>>>>> 53de4f0d537425d242f4cb22750f4d35f41ee575

    console.log("button pressed");
    var myImage = document.createElement("img");
    console.log("image created");
    myImage.setAttribute("src","dvd.jpg");
    console.log("src set");
    myImage.setAttribute("style","width: 100px;\nheight: 100px;\nposition: fixed;\ntop: 0px;\nleft: 50px;");
    console.log("style set");
    vimage.appendChild(myImage);
    console.log("child appended");
    var bounce = function(){
	console.log("bouncing");
	var dvd = myImage;
	if(xcor >= 400){
	    xvel = -1;
	}
	if(ycor >= 400){
	    yvel = -1;
	}
	if(xcor<=0){
	    xvel = 1;
	}
	if(ycor<=0){
	    yvel = 1;
	}
	

	xcor += xvel;
	ycor += yvel;

<<<<<<< HEAD
	dvd.setAttribute("style","width: 100px;\nheight: 100px;\nposition: fixed;\ntop: "+ycor+"px;\nleft: "+xcor+"px;");
    }
    window.setInterval(bounce,10);
=======
var animate = function(){
    console.log("button pressed");
    var myimage = document.createElement("img");
    myImage.setAttribute("src","dvd.jpg");
    myImage.setAttribute("style","width: 100px;\nheight: 100px;\nposition: relative;\ntop: 0px;\nleft: 50px;");
    vimage.appendChild(myImage);
    window.setInterval(bounce(myImage),10);
>>>>>>> 53de4f0d537425d242f4cb22750f4d35f41ee575
    console.log("click resolved");
}
var animateButton = document.getElementById("animate");
animateButton.addEventListener("click",animate);
console.log("code resolved");