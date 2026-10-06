function setup() {
  createCanvas(600, 600);//àrea de dibuix de 600 px del 600 de cada costat
}

function draw() {
  background(0,0,150); //fons de la pantalla, gris si te un número entre 0 i 255, zero és negre i 255 és blanc. I qualsevol número entre 0 i 255 serà gris. Si tenim tres  números, el primer número és vermellor o R (red), el segon número és la verdor o G (green) i el tercer número és la blabor o B (blue). Els colors RGB permeten construir setze milions de colors diferents. (255x255x255)
 fill (89, 202, 255); 
ellipse(300,300,200,240);// El primer número entre parèntesis és la posició x del centre, el segon número és la posició y alçada del centre de l'el·lipse, el tercer número és l'amplada i el quart número és l'alçada de l'el·lipse.
  fill (222, 115, 255);//Color ull dret esquerre. Funciona com el background amb rgb
  ellipse(250,250,50,30);//ull esquerre
  fill (115, 255, 169);//color ull dret
    ellipse(350,250,50,30);//ull dret
arc(300,350,120,40,0,PI);// Funciona com l'el·lipse els primers quatre números i els dos últims són 0,PI o PI,0
  fill(0);
  triangle(300,290,280,330,320,330);//Nas
  
  noFill();//No pintis el color de la cella
 
  arc(350,235,60,20,PI,0);//Cella dreta
  line(220,230,265,220);

 }
