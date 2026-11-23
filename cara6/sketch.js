function setup() {
  createCanvas(600, 600);//àrea de dibuix de 600 px del 600 de cada costat
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  let h = map(vol, 0, 0.1, 0, 20);
  print(vol);

  // Moviments repetitius
  let canvipetit = sin(frameCount*0.05)*7;
  let canvimitja = sin(frameCount*0.05)*15;

  // Moviment amb el ratolí
  let x = mouseX;
  let y = mouseY;

  background(h*10, 0, 150);

  // Cara
  fill(255, 210, 160);
  ellipse(x, y, 220, 260);

  // Cabell
  fill(60, 35, 20);
  arc(x, y-75, 220, 150, PI, TWO_PI);

  // Ulls
  fill(255);
  ellipse(x-50, y-35+canvipetit, 50, 35);
  ellipse(x+50, y-35+canvipetit, 50, 35);

  // Pupiles
  fill(0);
  ellipse(x-50, y-35+canvipetit, 18, 22);
  ellipse(x+50, y-35+canvipetit, 18, 22);

  // Nas
  fill(230, 150, 120);
  triangle(x, y, x-15, y+35, x+15, y+35);

  // Boca que reacciona al so
  fill(190, 60, 90);
  arc(x, y+65, 90, 40+h, 0, PI);

  // Galtes
  fill(255, 140, 150);
  ellipse(x-75, y+45, 30, 20);
  ellipse(x+75, y+45, 30, 20);

  // Mariposa que se mueve con noise
  fill(243, 151, 247);
  let bx = noise(frameCount*0.005)*100;
  let by = noise(frameCount*0.005+10000)*100;
  ellipse(bx+30, by+30, 20, 20);
  ellipse(bx+50, by+30, 20, 20);
  ellipse(bx+40, by+40, 12, 12);

  // Color aleatorio
  fill(random(255), random(255), random(255));
  ellipse(x, y-115, 20, 20);
}
