/*********************************************
  1. mouse:
		- 마우스 버튼 클릭시 밤/낮 배경이 전환된다.
          낮 → 밤 (어두운 배경 + 별 생성)
          밤 → 낮 (밝은 배경)
        - 마우스 버튼 클릭시 동시에 얼굴 표정이 변화한다.
          (낮)왼쪽 눈 원래, 무표정 → (밤) 왼쪽 눈 윙크, 미소 
          (밤)왼쪽 눈 윙크, 미소 → (낮) 왼쪽 눈 원래, 무표정
        - 해(또는 달)의 Y좌표가 랜덤하게 위치 변경된다.
	2. keyboard:
		- 키보드의 'c' 키를 누르면 gif 파일로 저장된다.
        - 키보드의 '스페이스바' 키를 누르면 옷 색깔이 랜덤으로 변경된다.
***********************************************/	
let sunX = 100;
let sunY = 80;
let wink = false;
let Night = false;
let clothColor;

function setup() {
  createCanvas(600, 400);
  clothColor = color(25, 50, 110);
}
function draw() {
  background(255, 170, 140);
  //배경 전환//
  if (Night) {
    background(30, 30, 80);
  } else {
    background(255, 170, 140);
  }
  noStroke();
  //별(밤)//
  if (Night) {
    fill(255);
    for (let i = 0; i < 40; i++) {
      ellipse(random(width), random(200), 2, 2);
    }
 }
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
  //해와달//
  if (Night) {
    fill(240, 240, 200);
    ellipse(sunX, sunY, 100, 100);
 } else {
    fill(255, 200, 0);
    ellipse(sunX, sunY, 100, 100);
 }
  //이동//
  sunX += 1;
  if (sunX > 650) {
    sunX = -50;
 }
  //뒷머리//
  fill(50, 30, 20); 
  ellipse(300, 200, 280, 360);
  rect(170, 226, 95, 330, 60);
  rect(330, 226, 95, 330, 60);
  //얼굴//
  fill(255, 220, 200);
  ellipse(300, 180, 180, 200);
  //옷//
  fill(clothColor);
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
  //왼쪽 눈 (윙크 조건)
if (wink) {
  stroke(50, 30, 20);
  strokeWeight(2);
  line(240, 170, 280, 170); // 감은 눈
  noStroke();
} else {
  ellipse(260, 170, 60, 35);
  fill(50, 30, 20);
  ellipse(260, 170, 30, 40);
  fill(255); 
  ellipse(260, 170, 12, 15);
}
  //오른쪽 눈 (그대로)
  fill(255);
  ellipse(340, 170, 60, 35);
  fill(50, 30, 20);
  ellipse(340, 170, 30, 40);
  fill(255); 
  ellipse(340, 170, 12, 15);
  //쌍커풀//
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
  stroke(50, 30, 20);
  strokeWeight(2);

  if (wink) {
  noFill();
  arc(300, 230, 40, 20, radians(0), radians(180)); // 웃는 입
 } else {
  line(290, 230, 310, 230); // 기본 입
 }
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
  //마우스인터랙션: 밤/낮 전환 + 위치 랜덤//
  function mousePressed() {
  wink = !wink;
  Night = !Night;
  sunY = random(50, 150);
 }
  //키보드인터랙션: 스페이스바-옷 색 변경, m-저장//
  function keyPressed() {
  if (keyCode === 32) {  
     let r = int(random(3));
  if (r === 0) {
    clothColor = color(25, 50, 110); // 기본-네이비
  } else if (r === 1) {
    clothColor = color(255, 150, 200); // 핑크
  } else { 
    clothColor = color(230); // 아이보리
  }
 }
   if (key === 'c') {
    saveGif('movingCharacter', 10); //'c' 누르면 저장
  }
 }