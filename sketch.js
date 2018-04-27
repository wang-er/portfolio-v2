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
	background(100,180,255);
	noStroke();





//grass
fill(80,180, 0);
	rect(0, windowHeight*(13/16), windowWidth, windowHeight*0.3);

//sun
	fill(255, 230, 0, 150);
	ellipse(windowWidth*1/8, windowHeight*1/4, 120, 120);

	//moon

		ellipse(windowWidth*7/8, windowHeight*1/4, 120, 120);



//middle mountain
triangle(windowWidth*1/8, windowHeight*13/16, windowWidth*1/2, windowHeight*3/16, windowWidth*7/8, windowHeight*13/16);


//mirror is (w - , h, w - , h , w-, h)

//two front mountains
triangle(0, windowHeight*13/16, windowWidth*1/8, windowHeight/2, windowWidth/4, windowHeight*13/16);

triangle(windowWidth - 0, windowHeight*13/16, windowWidth - windowWidth*1/8, windowHeight/2, windowWidth - windowWidth/4, windowHeight*13/16);

//mid far edge mountians

triangle(windowWidth*1/16 - windowWidth*5/16, windowHeight*13/16, windowWidth/16, windowHeight*5/16, windowWidth*3/8, windowHeight*13/16);

triangle(windowWidth*15/16 + windowWidth*5/16, windowHeight*13/16, windowWidth - windowWidth/16, windowHeight*5/16, windowWidth - windowWidth*3/8, windowHeight*13/16);

//middle side mountains back
triangle(windowWidth*1/4 - windowWidth*3/8, windowHeight*13/16,windowWidth*1/4, windowHeight*4/16, windowWidth*5/8,windowHeight*13/16);
triangle(windowWidth*3/4 + windowWidth*3/8, windowHeight*13/16, windowWidth - windowWidth*1/4, windowHeight*4/16, windowWidth - windowWidth*5/8,windowHeight*13/16);

}