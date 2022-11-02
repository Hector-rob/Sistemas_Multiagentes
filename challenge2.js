
//Challenge 2
//Héctor Robles Villarreal A01634105
//El código tiene que ser ejecutado en el editor p5 de javascript
//https://editor.p5js.org/

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(400);
    dibujar_linea(1,2,100,20)
    dibujar_linea(10,200,50,10)
    dibujar_linea(300,300,10,10)
    dibujar_linea(200,300,250,50)
    dibujar_linea(350,350,100,300)
  }
  
  function dibujar_linea(x1, y1, x2, y2){
      // Iteradores requeridos por el programa
      let x, y, dx, dy, dx1, dy1, px, py, xe, ye, i;
      // Cálculo de las derivadas
      dx = x2 - x1;
      dy = y2 - y1;
      // Copia de derivadas para la iteración
      dx1 = Math.abs(dx);
      dy1 = Math.abs(dy);
      //Calcular error de ambos ejes
      px = 2 * dy1 - dx1;
      py = 2 * dx1 - dy1;
      // La línea es dominante en X
      if (dy1 <= dx1) {
          // Línea se dibuja de izquierda a derecha
          if (dx >= 0) {
              x = x1; y = y1; xe = x2;
          } else { // Linea se dibuja de derecha a izquierda
              x = x2; y = y2; xe = x1;
          }
          point(x, y); // Dibujar el punto
          for (i = 0; x < xe; i++) {
              x = x + 1;
              if (px < 0) {
                  px = px + 2 * dy1;
              } else {
                  if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                      y = y + 1;
                  } else {
                      y = y - 1;
                  }
                  px = px + 2 * (dy1 - dx1);
              }
              point(x, y);
          }
      } else { // La línea es dominante en Y
          // La línea se dibuja de abajo hacia arriba
          if (dy >= 0) {
              x = x1; y = y1; ye = y2;
          } else { // La línea se dibuja de arriba hacia abajo
              x = x2; y = y2; ye = y1;
          }
          point(x, y); //Dibujar punto
          for (i = 0; y < ye; i++) {
              y = y + 1;
              if (py <= 0) {
                  py = py + 2 * dx1;
              } else {
                  if ((dx < 0 && dy<0) || (dx > 0 && dy > 0)) {
                      x = x + 1;
                  } else {
                      x = x - 1;
                  }
                  py = py + 2 * (dx1 - dy1);
              }
              point(x, y);
          }
      }
   }