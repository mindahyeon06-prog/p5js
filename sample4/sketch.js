function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  // 시간 설정 //
  let cycle = millis() % 20000; // 20초 반복
  let isDay = cycle < 10000;

  let t;

  if (isDay) {
    t = map(cycle, 0, 10000, 0, 1);
  } else {
    t = map(cycle, 10000, 20000, 0, 1);
  }
  // 배경 (색 변화) //
  noStroke();

  let dayColor = lerpColor(
    color(180, 220, 255),
    color(0, 140, 255),
    t
  );

  let nightColor = lerpColor(
    color(25, 10, 100),
    color(0, 0, 20),
    t
  );

  fill(dayColor);
  rect(0, 0, 300, 400);

  fill(nightColor);
  rect(300, 0, 300, 400);
  // 땅 //
  fill(100, 70, 40);
  rect(0, 350, 300, 50);

  fill(70, 40, 20);
  rect(300, 350, 300, 50);
  // 해 (크기 + 색 변화) //
  let sunWave = sin(frameCount * 0.03);

  let sunBig1 = 600 + sunWave * 40;
  let sunBig2 = 400 + sunWave * 30;
  let sunBig3 = 250 + sunWave * 20;
  let sunCore = 100 + sunWave * 15;

  let sunOuter = lerpColor(
    color(255, 230, 230),
    color(255, 120, 120),
    t
  );

  let sunMiddle = lerpColor(
    color(255, 180, 180),
    color(255, 80, 80),
    t
  );

  let sunInner = lerpColor(
    color(255, 120, 120),
    color(255, 30, 30),
    t
  );

  let sunCenter = lerpColor(
    color(255, 80, 80),
    color(255, 0, 0),
    t
  );

  fill(sunOuter);
  arc(0, 0, sunBig1, sunBig1, 0, 90);

  fill(sunMiddle);
  arc(0, 0, sunBig2, sunBig2, 0, 90);

  fill(sunInner);
  arc(0, 0, sunBig3, sunBig3, 0, 90);

  fill(sunCenter);
  arc(0, 0, sunCore, sunCore, 0, 90);
  // 달 (크기 + 색 변화) //
  let moonWave = cos(frameCount * 0.03);

  let moonBig1 = 600 + moonWave * 40;
  let moonBig2 = 400 + moonWave * 30;
  let moonBig3 = 250 + moonWave * 20;
  let moonCore = 100 + moonWave * 15;

  let moonOuter = lerpColor(
    color(120, 120, 60),
    color(40, 40, 10),
    t
  );

  let moonMiddle = lerpColor(
    color(180, 180, 90),
    color(90, 90, 30),
    t
  );

  let moonInner = lerpColor(
    color(230, 230, 100),
    color(170, 170, 40),
    t
  );

  let moonCenter = lerpColor(
    color(255, 255, 120),
    color(255, 255, 0),
    t
  );

  fill(moonOuter);
  circle(600, 400, moonBig1);

  fill(moonMiddle);
  circle(600, 400, moonBig2);

  fill(moonInner);
  circle(600, 400, moonBig3);

  fill(moonCenter);
  circle(600, 400, moonCore);
  // 낮-집 //
  stroke(0, 128, 0);

  fill(34, 139, 34);
  triangle(150, 100, 50, 200, 250, 200);

  fill(144, 238, 144);
  quad(80, 200, 220, 200, 220, 350, 80, 350);

  stroke(0, 0, 255);
  strokeWeight(3);

  fill(70, 110, 220);
  square(125, 140, 50);

  line(150, 140, 150, 190);
  line(125, 165, 175, 165);

  stroke(255, 180, 0);

  fill(255, 255, 0);
  quad(110, 220, 190, 220, 190, 330, 110, 330);

  fill(255, 200, 0);
  ellipse(130, 275, 20);

  noStroke();

  fill(255, 220, 235);
  quad(80, 350, 220, 350, 240, 400, 60, 400);
  // 밤-집 //
  stroke(20, 80, 40);

  fill(50, 100, 60);
  triangle(450, 300, 350, 200, 550, 200);

  fill(110, 160, 110);
  quad(380, 50, 520, 50, 520, 200, 380, 200);

  stroke(40, 50, 120);

  fill(40, 60, 160);
  square(425, 210, 50);

  line(425, 235, 475, 235);
  line(450, 210, 450, 260);

  stroke(160, 150, 90);

  fill(240, 220, 60);
  quad(410, 70, 490, 70, 490, 180, 410, 180);

  fill(180, 160, 70);
  ellipse(430, 125, 20);

  noStroke();

  fill(200, 160, 170);
  quad(380, 50, 520, 50, 540, 0, 360, 0);
  // 시계 //
 noStroke();

  fill(50, 50, 70);
  circle(300, 200, 140);

  fill(230, 230, 220);
  circle(300, 200, 110);

  fill(80, 80, 80);
  circle(300, 200, 10);
  // 시계 바늘 애니메이션 //
  push();

  translate(300, 200);

  stroke(80);
  strokeWeight(4);
  // 분침 //
  push();
  rotate(frameCount * 2);
  line(0, 0, 0, -40);
  pop();

  // 시침
  push();
  rotate(frameCount);
  line(0, 0, 30, 0);
  pop();

  pop();
}
// GIF 저장 //
function keyPressed() {
  if (key === 's') {
    saveGif('day_night_animation', 10);
  }
}