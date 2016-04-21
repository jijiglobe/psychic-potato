console.log("code initialized");
var xvel = 1;
var yvel = 1;
var xcor = 50;
var ycor = 0;

var vimage = document.getElementById("vimage");
//var dvd = document.getElementById("dvd");

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
    

    xcor += xvel;
    ycor += yvel;

    dvd.setAttribute("style","width: 100px;\nheight: 100px;\nposition: relative;\ntop: "+ycor+"px;\nleft: "+xcor+"px;");
//    dvd.setAttribute("top", ycor);
//    dvd.setAttribute("left",xcor);
}

var animate = function(){
    console.log("button pressed");
    var myimage = document.createElement("img");
    myImage.setAttribute("src","dvd.jpg");
    myImage.setAttribute("style","width: 100px;\nheight: 100px;\nposition: relative;\ntop: 0px;\nleft: 50px;");
    vimage.appendChild(myImage);
    window.setInterval(bounce(myImage),10);
    console.log("click resolved");
}
var animateButton = document.getElementById("animate");
animateButton.addEventListener("click",animate);
console.log("code resolved");