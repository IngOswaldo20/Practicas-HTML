const num1 = Math.floor(Math.random() * 9) + 1;
const num2 = Math.floor(Math.random() * 9) + 1;
const num3 = Math.floor(Math.random() * 9) + 1;
const num4 = Math.floor(Math.random() * 9) + 1;

const t1 = num1;
const t2 = num2;
const t3 = num3;
const t4 = num4;
const t5 = num4;
const t6 = num3;
const t7 = num2;
const t8 = num1;
var cambio = 1;
var change = "";
var tar1 = 0;
var tar2 = 0;
var pareja=0;
var puntos=0;

function tocar(tarjeta) {
    if (cambio == 1) {
        document.getElementById("resultado").value = ""; //borrar cuadro
        document.getElementById("resultado2").value = ""; //borrar cuadro
        tar1=null;
        tar2=null;
        change = "resultado";
        console.log(cambio);
    } else if (cambio == 2) {
        change = "resultado2";
        console.log(cambio);
        cambio = 0;
    }

    switch (tarjeta) {
        case 1:
            document.getElementById(change).value = t1;
            tarr(t1);
            validar();
            break;
        case 2:
            document.getElementById(change).value = t2;
            tarr(t2);
            validar();
            break;
        case 3:
            document.getElementById(change).value = t3;
            tarr(t3);
            validar();
            break;
        case 4:
            document.getElementById(change).value = t4;
            tarr(t4);
            validar();
            break;
        case 5:
            document.getElementById(change).value = t5;
            tarr(t5);
            validar();
            break;
        case 6:
            document.getElementById(change).value = t6;
            tarr(t6);
            validar();
            break;
        case 7:
            document.getElementById(change).value = t7;
            tarr(t7);
            validar();
            break;
        case 8:
            document.getElementById(change).value = t8;
            tarr(t8);
            validar();
            break;
    }
    change = "resultado";
    cambio++;
}

function validar() {
    if(tar1 === tar2){
        puntos++;
        alert("¡Conseguiste una pareja! " +puntos+ " / 4");
        pareja++;
        
    }
    if(pareja===4){
        alert("¡Felicidades, has ganado! :)" );
        logica();
    }
}

function tarr(num) {
    
    if (change == "resultado") {
        tar1 = num;
    } else {
        tar2 = num;
    }
    console.log("tar: " + tar1);
    console.log("tar2: " + tar2);
}
function logica() {
    location.reload();
}




