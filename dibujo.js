var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var d = document.getElementById ("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;
  var colorcito = ("red");
  var l = 0;
  var yi, yf, xi, xf;

  for (l=0; l < lineas; l++)
  {
    yi= espacio * l;
    xf= espacio * (l + 1);
    xi= espacio * l;
    yf= espacio * (l + 1);

    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colorcito, xi, 0, 300, yf);
    console.log("linea " + l);

  }

  dibujarLinea(colorcito, 1,1,1,299);
  dibujarLinea(colorcito, 1,299,299,299);
}
