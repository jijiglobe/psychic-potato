console.log("code initialized");

var vimage = document.getElementById("vimage");
//var dvd = document.getElementById("dvd");


var animate = function(){
    var xvel = 1;
    var yvel = 1;
    var xcor = 50;
    var ycor = 0;

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


	dvd.setAttribute("style","width: 100px;\nheight: 100px;\nposition: fixed;\ntop: "+ycor+"px;\nleft: "+xcor+"px;");
    }
    window.setInterval(bounce,10);
    console.log("click resolved");
}
var animateButton = document.getElementById("animate");
animateButton.addEventListener("click",animate);
console.log("code resolved");