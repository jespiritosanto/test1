function setup() {
  createCanvas(1920, 1080);
  frameRate (20);
  }
  function draw() {
  background(0);
  fill(255,0,0)
  circle (random(0,1920), random(0,1080), 50);
  fill(0,255,0)
  circle (random(0,1920), random(0,1080), 100);
  fill(255,255,0)
  circle (random(0,1920), random(0,1080), 150);
  fill(0,0,255)
  circle (random(0,1920), random(0,1080), 50);
  circle (random(0,1920), random(0,1080), 150);
  circle (random(0,1920), random(0,1080), 50);
}