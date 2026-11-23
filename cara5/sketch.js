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
  let h = map(vol, 0,0.1, 0, 20);
  print (vol);
  background(h*10,0,150); //fons de la pantalla, gris si te un número entre 0 y 255, zero és negre i 255 és blanc. I qualsevol número entre 0 y 255 serà gris. Si tenim tres  números, el primer número és vermellor o R (red), el segon número és la verdor o G (green) i el tercer número és la blavor o B (blue). Els colors RGB permeten construir setze milions de colors diferents. (5)

  // Orelles
  fill(235, 145, 65);
  triangle(190, 220, 225, 90, 290, 220);
  triangle(310, 220, 375, 90, 410, 220);

  // Interior de les orelles
  fill(255, 170, 180);
  triangle(215, 195, 228, 125, 260, 195);
  triangle(340, 195, 372, 125, 385, 195);

  // Cara
  fill(235, 145, 65);
  ellipse(300,300,220,250);// El primerxero entre parèntesis és la posició x del centre  

  // Ulls
  fill(255, 255, 255);
  ellipse(250,250,55,45);
  ellipse(350,250,55,45);

  fill(40, 30, 20);
  ellipse(250,250,22,30);
  ellipse(350,250,22,30);

  // Nas
  fill(255, 120, 150);
  triangle(285,310,315,310,300,330);

  // Bigotis
  fill(70, 40, 25);
  ellipse(235,325,45,4);
  ellipse(230,340,50,4);
  ellipse(365,325,45,4);
  ellipse(370,340,50,4);

  // Boca
  fill (115,255-h*15, 169-h*10);
  arc(300,350,80,40+h,0,PI);

  // Galtes
  fill(255, 185, 150);
  ellipse(220,310,30,18);
  ellipse(380,310,30,18);
 }
