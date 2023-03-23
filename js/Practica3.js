function Coche() {
  var marca = document.getElementById("marca").value;
  var coche = document.getElementById("coche").value;

  if (marca == "FORD" || marca == "ford") {
    if (coche == "FIESTA" || coche == "fiesta") {
      alert("Descuento del 5%");
    } else if (coche == "FOCUS" || coche == "focus") {
      alert("Descuento del 10%");
    } else {
      alert("Ese coche no existe");
    }
  } else {
    alert("Esa marca no existe");
  }
  document.getElementById("resultado").innerHTML = resultado;
  //LeonardoMorenoTESE
  //cursoHTML
}



