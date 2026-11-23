function setup() {
  createCanvas(600, 600);//àrea de dibuix de 600 px del 600 de cada costat
}

function draw() { 

  let x = 20 * noise(0.005 * frameCount);// entre el 0 i el 20, suau 
  //Genera números aleatoris però seguint un soroll Perlin, és
 // a dir, a canvis suaus a diferència del random  
  let y = 100 * noise(0.005 * frameCount + 10000);// entre el 0 i el 100, suau
  // poso frameCount perque generi números a tota
  //velocitat i com van molt ràpid, multiplico
  //per 0.005 i aplico la funció noise per generar //soroll 
  //print (y); 
  //la funció noise genera números entre 0 i 1 
  //però cada número és proper al següent. Això
  //pasa molt a la natura que els canvis no són bruscos, per exemple les muntanyes, els rius...
  //noise (0.005 * frameCount+10000);genera números del 0 al 1 i si els multiplico per
  //255, donarà números entre 0 i 255 
  
  let z = 255 * noise(0.005 * frameCount+10000);// li sumo 10000 perque no sortin els mateixos números que sense sumar
  
  let coloraleatori=random(0,255);//canvis bruscos 
  //print(z);

//print(canvimoltgran);
  frameRate(5);
 background(74,0,z); //fons de la pantalla, gris si te un número entre 0 i 255, zero és negre i 255 és blanc. I qualsevol número entre 0 i 255 serà gris. Si tenim tres números, el primer número és vermellor o R (red), el segon número és la verdor o G (green) i el tercer número és la blabor o B (blue). Els colors RGB permeten construir setze milions de colors diferents. (255x255x255)
  
  // Antena
  fill(70, 220, 180);
 ellipse(300+x*2, 155, 20, 65);
  fill(255, 220, 50);
 ellipse(300+x*2, 115, 45+x, 45+x);

  // Cara
  fill(89, 202, 255);//Color cara
  ellipse(300, 300, 230, 260);

  // Ull central
  fill(z, y+100, coloraleatori);
  ellipse(300, 215, 55+x, 45);

  // Ull esquerre
  fill(30, 30, 90);
  ellipse(240, 275, 48+x, 35);

  // Ull dret
  fill(30, 30, 90);
  ellipse(360, 275, 48+x, 35);

  // Galtes
  fill(255, 120, 170);
  ellipse(220, 340, 35, 22);
  ellipse(380, 340, 35, 22);

  // Boca
  fill(100, 0, 100);
  arc(300, 355, 100, 35+y*0.2, 0, PI);

  // Taques decoratives
  fill(255, 230, 80);
  ellipse(260, 170, 12, 12);
  ellipse(340, 170, 12, 12);

  print(y);
}
