//farem moviments repititius gràcies
function setup() {
  createCanvas(600, 600);//àrea de dibuix de 600 px del 600 de cada costat
}
//Sinus i Cosinus per fer moviments repetitius 
function draw() {
  let canvipetit=sin(frameCount*0.05)*7;
  let canvimitja=sin(frameCount*0.05)*15;
  let canvigran=sin(frameCount*0.05)*50;
  let canvimoltgran=sin(frameCount*0.05)*127;
  print(canvimoltgran);

  background(180, 210, 230);

  // Cabell
  fill(45, 30, 20);
  triangle(200, 210, 250, 100, 280, 220);
  triangle(260, 190, 320, 80, 340, 210);
  triangle(320, 210, 390, 120, 400, 230);

  // Cara
  fill(245, 203, 167);
  ellipse(300, 300, 200, 250);

  // Ulls
  fill(255, 255, 255);
  ellipse(250, 250+canvipetit, 45, 35);
  ellipse(350, 250+canvipetit, 45, 35);

  fill(40, 30, 20);
  ellipse(250, 250+canvipetit, 18, 22);
  ellipse(350, 250+canvipetit, 18, 22);

  // Celles
  fill(45, 30, 20);
  ellipse(250, 220, 45, 10);
  ellipse(350, 220, 45, 10);

  // Nas
  fill(225, 165, 135);
  triangle(300, 290, 285, 330, 315, 330);

  // Boca
  fill(190, 65, 85);
  arc(300, 365, 100, 40-canvimitja, 0, PI);

  // Galtes
  fill(255, 150, 150);
  ellipse(220, 330, 30, 18);
  ellipse(380, 330, 30, 18);
}
