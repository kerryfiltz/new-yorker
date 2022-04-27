var maxDiameter;
var theta1;
var theta2;
var theta3;
var theta4;
var theta5;
var theta6;

function setup() {
  createCanvas(400, 400);
  
  maxDiameter = 45;
  theta1 = 0;
  theta2 = 0;
  theta3 = 0;
  theta4 = 0;
  theta5 = 0;
  theta6 = 0;
  
}

function draw() {
  background('#183a55');
  
  light(200,200);
 
}

function light(x, y) {
   // big
  var haloColor = color(300);
  haloColor.setAlpha(50);
  stroke(haloColor);
  fill(haloColor);
  ellipse(x,y,300);
  
  fill('#A4D5D5')
  strokeWeight(8);
  stroke(100);
  ellipse(x,y,200);
  
  // light 1
  var diam1 = 60 + sin(theta1) * maxDiameter;
  theta1 += 0.01
  
  borderColor1 = color(diam1*2);
  borderColor1.setAlpha(diam1);
  stroke(borderColor1);
  strokeWeight(18);
  fill('WHITE');

  ellipse(x, y-60, diam1, diam1);
  
  // light 2
  var diam2 = 60 + sin(theta2) * maxDiameter;
  theta2 += 0.013
  
  borderColor2 = color(diam2*2);
  borderColor2.setAlpha(diam2);
  stroke(borderColor2);
  ellipse(x, y+60, diam2, diam2);
  
  // light 3
  var diam3 = 60 + sin(theta3) * maxDiameter;
  theta3 += 0.008
  
  borderColor3 = color(diam3*2);
  borderColor3.setAlpha(diam3);
  stroke(borderColor3);
  
  ellipse(x-50, y-30, diam3, diam3);
  
  // light 4
  var diam4 = 60 + sin(theta4) * maxDiameter;
  theta4 += 0.020
  
  borderColor4 = color(diam4*2);
  borderColor4.setAlpha(diam4);
  stroke(borderColor4);
  
  ellipse(x+50, y-30, diam4, diam4);
  
  // light 5
  var diam5 = 60 + sin(theta5) * maxDiameter;
  theta5 += 0.022
  
  borderColor5 = color(diam5*2);
  borderColor5.setAlpha(diam5);
  stroke(borderColor5);
  
  ellipse(x-50, y+30, diam5, diam5);
  
  // light 6
  var diam6 = 60 + sin(theta6) * maxDiameter;
  theta6 += 0.0095
  
  borderColor6 = color(diam6*2);
  borderColor6.setAlpha(diam6);
  stroke(borderColor6);
  
  ellipse(x+50, y+30, diam6, diam6);
  
}