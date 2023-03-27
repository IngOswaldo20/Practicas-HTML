var operandoa;
var operandob;
var operacion;

function limpiar() {
  document.getElementById("resultado").value = "";
  operandoa = "";
  operandob = "";
  operacion = "";
  location.reload();
}

function borrar() {
  var resultado = document.getElementById("resultado").value;
  resultado = resultado.slice(0, -1);
  document.getElementById("resultado").value = resultado;
}

function insertar(n) {
  var resultado = document.getElementById("resultado").value;
  document.getElementById("resultado").value = resultado + n;
}

function operacion(op) {
  operandoa = document.getElementById("resultado").value;
  operacion = op;
  document.getElementById("resultado").value = "";
}

function igual() {
  operandob = document.getElementById("resultado").value;
  var resultado;

  switch (operacion) {
    case "+":
      resultado = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      resultado = parseFloat(operandoa) - parseFloat(operandob);
      break;

    case "*":
      resultado = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      resultado = parseFloat(operandoa) / parseFloat(operandob);
      break;

    default:
      break;
  }

  document.getElementById("resultado").value = resultado;
  operandoa = 0;
  operandob = 0;
  operacion = "";
  
 
}


