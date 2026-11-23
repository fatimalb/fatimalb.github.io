function setup() {
  createCanvas(600, 600);//àrea de dibuix de 600 px del 600 de cada costat
}

function draw() {
  background(0, 0, 150);//fons de la pantalla, gris si te un número entre 0 i 255, zero és negre i 255 és blanc. I qualsevol número entre 0 i 255 serà gris. Si tenim tres  números, el primer número és vermellor o R (red), el segon número és la verdor o G (green) i el tercer número és la blabor o B (blue). Els colors RGB permeten construir setze milions de colors diferents. (255x255x255)

  // Cara
  fill(150, 220, 100);
  ellipse(mouseX, mouseY, 220, 250);// El primer número entre parèntesis és la posició x del centre  

  // Ulls
  fill(255, 255, 255);
  ellipse(mouseX-50, mouseY-40, 55, 45);
  ellipse(mouseX+50, mouseY-40, 55, 45);

  // Pupil·les
  fill(40, 30, 20);
  ellipse(mouseX-50, mouseY-40, 20, 25);
  ellipse(mouseX+50, mouseY-40, 20, 25);

  // Celles
  noFill();
  arc(mouseX-50, mouseY-65, 55, 20, PI, TWO_PI);
  arc(mouseX+50, mouseY-65, 55, 20, PI, TWO_PI);

  // Nas
  fill(255, 150, 80);
  triangle(mouseX, mouseY, mouseX-15, mouseY+35, mouseX+15, mouseY+35);

  // Boca
  fill(120, 40, 60);
  arc(mouseX, mouseY+65, 100, 55, 0, PI);
}
