var canvas;

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



fill(80,180, 0);
	rect(0, windowHeight-windowHeight/5, windowWidth, windowHeight*0.3);

	fill(255, 230, 0);
	ellipse(windowWidth*0.1, windowHeight*0.2, 100, 100);









}