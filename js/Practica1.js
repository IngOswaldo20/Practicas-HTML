	function Validar(n1,n2){
		var n1=parseInt(document.getElementById("num1").value);
		var n2=parseInt(document.getElementById("num2").value);
		var resultado ="";

		if(n1 > n2)
		{
	
		resultado=("El numero mayor es: " + num1 );
		}
		else if(num1<num2)
		{
	
		resultado=("El Numero mayor es : " + num2);
		}
		else{
			resultado=("Los numeros son iguales");
		}

		document.getElementById("resultado").innerHTML = resultado;
	}


	

