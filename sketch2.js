let fr = 30;

let totalObstacles = 10;

let particles = [];

function setup() {
  frameRate(fr);

  // create dom
  let cnv = createCanvas(800, 800);
  cnv.parent("canvas");

  ninetyDeg = PI / 2;
  // let numberOfCircles = random(totalObstacles);
  for (let i = 0; i < totalObstacles; i++) {
    particles.push(new Circle(random(800), random(800), random(50, 200)));
  }

  fill("white");
}

function draw() {
  background(0);
  particles.forEach(function (particle) {
    particle.move();
    particle.show();
  });
  filter(BLUR, 10);
  filter(THRESHOLD);
}
