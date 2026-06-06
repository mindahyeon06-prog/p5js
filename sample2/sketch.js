function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(255, 170, 140);
  noStroke();
  //배경1(연한주황)//
  fill(255, 180, 140, 120);
  ellipse(300, 200, 700, 400);
  //배경2(핑크)//
  fill(255, 120, 150, 120);
  ellipse(300, 220, 650, 350);
  //배경3(보라빛)//
  fill(220, 100, 80, 80);
  ellipse(300, 250, 600, 300);
  //배경4(노란빛-해 주변)//
  fill(255, 200, 120, 150);
  ellipse(300, 260, 400, 200);
  //강//
  fill(140, 210, 240);
  rect(0, 250, 600, 150);
  //해--> 나중에 움직일 예정//
  let sunX = 0;
  let sunY = 0;
  fill(255, 200, 0);
  ellipse(sunX, sunY, 100, 100);
  //뒷머리//
  fill(50, 30, 20); 
  ellipse(300, 200, 280, 360);
  rect(170, 226, 95, 330, 60);
  rect(330, 226, 95, 330, 60);
  //얼굴//
  fill(255, 220, 200);
  ellipse(300, 180, 180, 200);
  //옷//
  fill(25, 50, 110);
  triangle(300, 260, 180, 330, 420, 330);
  rect(180, 330, 240, 200);
  //목//
  fill(255, 220, 200); 
  rect(270, 230, 60, 80, 30);
  //귀//
  ellipse(220, 190, 30, 40);
  ellipse(380, 190, 30, 40);
  //눈//
  fill(255);
  ellipse(260, 170, 60, 35);
  ellipse(340, 170, 60, 35);
  fill(50, 30, 20);
  ellipse(260, 170, 30, 40);
  ellipse(340, 170, 30, 40);
  fill(255); 
  ellipse(260, 170, 12, 15);
  ellipse(340, 170, 12, 15);
  stroke(50, 30, 20);
  noFill();
  strokeWeight(1.7);
  arc(260, 157, 45, 20, radians(190), radians(350)); 
  arc(340, 157, 45, 20, radians(185), radians(340)); 
  //속눈썹//
  stroke(0);
  strokeWeight(2);
  line(240, 145, 250, 155);
  line(260, 140, 260, 150);
  line(280, 145, 270, 155);
  line(320, 145, 330, 155);
  line(340, 140, 340, 150);
  line(360, 145, 350, 155);
  noStroke();
  //코//
  stroke(50, 30, 20);
  strokeWeight(2);
  arc(300, 200, 10, 10, radians(470), radians(200)); 
  //입//
  line(290, 230, 310, 230);
  //볼터치//
  noStroke();
  fill(255, 211, 214, 200);
  ellipse(240, 210, 25, 15);
  ellipse(360, 210, 25, 15);
  //점//
  fill(0);
  ellipse(235, 190, 3, 3);
  //귀걸이//
  fill(250, 245, 230);
  circle(390, 203, 8); 
  circle(210, 203, 8);
  //목걸이// 
  stroke(250, 245, 230);
  strokeWeight(1);
  line(255, 285, 300, 330);
  line(345, 285, 300, 330);
  circle(300, 330, 10); 
  //앞머리//
  noStroke()
  fill(50, 30, 20);
  arc(260, 110, 150, 120, radians(140), radians(330)); 
  arc(340, 110, 150, 120, radians(210), radians(30)); 
}




  
 



  
  
