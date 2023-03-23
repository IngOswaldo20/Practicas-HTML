function Alumno() {
  var cal1 = parseInt(document.getElementById("cal1").value);
  var cal2 = parseInt(document.getElementById("cal2").value);
  var cal3 = parseInt(document.getElementById("cal3").value);
  var suspend = 0;
  var resultado = "";

  suspend = (cal1 + cal2 + cal3) / 3;

  if (suspend < 7) {
    alert("Esta reprobado " + suspend);
  } else {
    alert("Esta aprobado " + suspend);
  }

  resultado = suspend;
  document.getElementById("resultado").innerHTML = resultado;
  
}
