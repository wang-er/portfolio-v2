var canvas;

var w;
var h;


function windowResized(){


	resizeCanvas(windowWidth, windowHeight);
}

function setup() {

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
}

function draw(){
	noStroke();

var from = color(240,126,7);
var to = color(115,67,75);

var interA = lerpColor(from, to, 2/32);
var interB = lerpColor(from, to, 3/32);
var interC = lerpColor(from, to, 4/32);
var interD = lerpColor(from, to, 6/32);
var interE = lerpColor(from, to, 8/32);
var interF = lerpColor(from, to, 16/32);
var interG = lerpColor(from, to, 24/32);
fill(from);
rect(0, 0, windowWidth/16, windowHeight);
fill(interA);
rect(windowWidth*1/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interB);
rect(windowWidth*2/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interC);
rect(windowWidth*3/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interD);
rect(windowWidth*4/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interE);
rect(windowWidth*5/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interF);
rect(windowWidth*6/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interG);
rect(windowWidth*7/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(to);
rect(windowWidth/2 - windowWidth/32, 0, windowWidth/16, windowHeight);

from = color(115,67,75);
to = color(0, 51, 102);

var interA = lerpColor(from, to, 8/32);
var interB = lerpColor(from, to, 16/32);
var interC = lerpColor(from, to, 24/32);
var interD = lerpColor(from, to, 26/32);
var interE = lerpColor(from, to, 28/32);
var interF = lerpColor(from, to, 39/32);
var interG = lerpColor(from, to, 30/32);

fill(from);
rect(windowWidth/2 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interA);
rect(windowWidth*9/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interB);
rect(windowWidth*10/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interC);
rect(windowWidth*11/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interD);
rect(windowWidth*12/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interE);
rect(windowWidth*13/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interF);
rect(windowWidth*14/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(interG);
rect(windowWidth*15/16 - windowWidth/32, 0, windowWidth/16, windowHeight);
fill(to);
rect(windowWidth - windowWidth/32, 0, windowWidth/16, windowHeight);





//grass
fill(67, 102, 25);
	rect(0, windowHeight*(13/16), windowWidth, windowHeight*0.3);

//sun
	// fill(255, 230, 0);
	fill(255,200, 0);
	ellipse(windowWidth*1/8, windowHeight*1/4, 120, 120);

	//moon
	fill(240,255,150);

		ellipse(windowWidth*7/8, windowHeight*1/4, 120, 120);




//mirror is (w - , h, w - , h , w-, h)

//middle side mountains back
fill(128,117,156);
triangle(windowWidth*1/4 - windowWidth*3/8, windowHeight*13/16,windowWidth*1/4, windowHeight*4/16, windowWidth*5/8,windowHeight*13/16);
fill(105,139,194);
triangle(windowWidth*3/4 + windowWidth*3/8, windowHeight*13/16, windowWidth - windowWidth*1/4, windowHeight*4/16, windowWidth - windowWidth*5/8,windowHeight*13/16);


//mid far edge mountians
fill(160,121,163);
triangle(windowWidth*1/16 - windowWidth*5/16, windowHeight*13/16, windowWidth/16, windowHeight*5/16, windowWidth*3/8, windowHeight*13/16);

fill(135,168,222);
triangle(windowWidth*15/16 + windowWidth*5/16, windowHeight*13/16, windowWidth - windowWidth/16, windowHeight*5/16, windowWidth - windowWidth*3/8, windowHeight*13/16);


//middle mountain
fill(150,180,225);
triangle(windowWidth*1/8, windowHeight*13/16, windowWidth*1/2, windowHeight*3/16, windowWidth*7/8, windowHeight*13/16);
fill(175,141,179);
triangle(windowWidth*1/8, windowHeight*13/16, windowWidth*1/2, windowHeight*3/16, windowWidth*1/2, windowHeight*13/16);



//two front mountains
fill(185,145,189);
triangle(0, windowHeight*13/16, windowWidth*1/8, windowHeight/2, windowWidth/4, windowHeight*13/16);

fill(172,203,252);
triangle(windowWidth - 0, windowHeight*13/16, windowWidth - windowWidth*1/8, windowHeight/2, windowWidth - windowWidth/4, windowHeight*13/16);






}