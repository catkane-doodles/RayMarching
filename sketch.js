let fr = 30;

let totalObstacles = 10;
let marchCount;

let obstacles = [];
let player;
let ray;
let coords;
let minDist;
let collide;
let a = 0;
let inc = 0.005;
let ninetyDeg;

let outline = [];

function mod(n, m) {
  return ((n % m) + m) % m;
}

function newCoor(mag, angle) {
  // Calculate bottom left quadrant
  let adjustedAngle = mod(angle, ninetyDeg);
  let x = mag * cos(adjustedAngle);
  let y = mag * sin(adjustedAngle);

  // Adjust accordingly by rotating one quadrant at a time
  while (angle > ninetyDeg) {
    let tmp = y;
    y = x;
    x = -tmp;
    angle -= ninetyDeg;
  }

  return [x, y];
}

function setup() {
  frameRate(fr);

  // create dom
  let cnv = createCanvas(800, 800, WEBGL);
  cnv.parent("canvas");

  ninetyDeg = PI / 2;
  // let numberOfCircles = random(totalObstacles);
  for (let i = 0; i < totalObstacles; i++) {
    obstacles.push(
      new Circle(random(-400, 400), random(-400, 400), random(50, 200))
    );
  }
  player = new Circle(0, 0, 10);

  while (a <= TWO_PI) {
    collide = false;
    ray = createVector(0, 0);
    ray.rotate(a);

    marchCount = 0;
    // RAY MARCH
    while (!collide && marchCount < 100) {
      noFill();
      stroke("black");

      minDist = Infinity;
      obstacles.forEach(function (obstacle) {
        // obstacle.show();
        minDist = min(signedDstToCircle(ray, obstacle), minDist);
      });

      // circle(ray.x, ray.y, minDist * 2);
      // get new coords
      coords = newCoor(minDist, a);
      // step in that direction
      ray.x += coords[0];
      ray.y += coords[1];
      // circle(ray.x, ray.y, 5);

      collide = minDist <= 15;
      marchCount++;
    }
    outline.push(ray);
    a += inc;
  }
}

function draw() {
  background(50, 200);

  player.show();

  outline.forEach((element) => circle(element.x, element.y, 2));
  noLoop();
}
