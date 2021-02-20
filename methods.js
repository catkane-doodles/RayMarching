function signedDstToCircle(point, circle) {
  return circle.pos.dist(point) - circle.radius;
}
