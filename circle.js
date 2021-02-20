function Circle(x, y, diameter) {
  this.pos = createVector(x, y);
  this.diameter = diameter;
  this.radius = diameter / 2;

  this.show = function () {
    circle(this.pos.x, this.pos.y, this.diameter);
  };

  this.move = function () {
    this.pos.add(createVector(random(-10, 10), random(-10, 10)));
  };
}
