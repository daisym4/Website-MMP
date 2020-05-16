var textX=0;
var diam=10;

function setup() {
  createCanvas (500,500);
}

function draw() {
  background("#B19CD9");
  fill(40,20,60,120);
  stroke(70,40,70)
  strokeWeight(0);
  textSize(15);
  textFont("GEORGIA");
  textStyle(BOLD);
  textAlign(CENTER);
  text('MMP 100',textX,height/1);
//textX=textX+2;
if (textX>500) {
	textX=0;
}else{
	textX=textX+2;
}
fill("#FFD1DC"); //light pink fill
strokeWeight(2);
ellipse(200,500,diam,diam);
ellipse(400,500,diam,diam);
ellipse(30,500,diam,diam);
ellipse(16,20,diam,diam);
ellipse(460,5,diam,diam);
ellipse(270,10,diam,diam);
ellipse(500,250,diam,diam);
ellipse(10,250,diam,diam);
ellipse(270,240,diam,diam);
if (diam>300){
	diam=10;}else{
		diam=diam+10;
	}
  fill("#AEC6CF");
  textSize(30);
  textFont("GEORGIA");
  textStyle(ITALIC);
  textAlign(LEFT);
  text('PROGRAMMING',textX,height/2);
//textX=textX+2;
if (textX>500) {
	textX=0;
}else{
	textX=textX+2;
}
 }
