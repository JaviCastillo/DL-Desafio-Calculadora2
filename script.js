var operandoa;
var operacion;

function init(){
	//variables
	var resultado = document.getElementById('resultado');
	var reset = document.getElementById('reset');
	var potencia = document.getElementById('potencia');
	var raiz = document.getElementById('raiz');
	var logaritmo = document.getElementById('log');
	var exponencial = document.getElementById('exp');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('uno');
	var dos = document.getElementById('dos');
	var tres = document.getElementById('tres');
	var cuatro = document.getElementById('cuatro');
	var cinco = document.getElementById('cinco');
	var seis = document.getElementById('seis');
	var siete = document.getElementById('siete');
	var ocho = document.getElementById('ocho');
	var nueve = document.getElementById('nueve');
	var cero = document.getElementById('cero');

	//eventos de click
	uno.onclick = function(e){
		  resultado.textContent = resultado.textContent  + "1";
		  operandoa = resultado.textContent;
	}
	dos.onclick = function(e){
		  resultado.textContent = resultado.textContent  + "2";
		  operandoa = resultado.textContent;
	}
	tres.onclick = function(e){
		  resultado.textContent = resultado.textContent  + "3";
		  operandoa = resultado.textContent;
	}
	cuatro.onclick = function(e){
		  resultado.textContent = resultado.textContent  + "4";
		  operandoa = resultado.textContent;
	}
	cinco.onclick = function(e){
		  resultado.textContent = resultado.textContent  + "5";
		  operandoa = resultado.textContent;
	}
	seis.onclick = function(e){
		  resultado.textContent = resultado.textContent  + "6";
		  operandoa = resultado.textContent;
	}
	siete.onclick = function(e){
		  resultado.textContent = resultado.textContent  + "7";
		  operandoa = resultado.textContent;
	}
	ocho.onclick = function(e){
		  resultado.textContent = resultado.textContent  + "8";
		  operandoa = resultado.textContent;
	}
	nueve.onclick = function(e){
		  resultado.textContent = resultado.textContent  + "9";
		  operandoa = resultado.textContent;
	}
	cero.onclick = function(e){
		  resultado.textContent = resultado.textContent  + "0";
		  operandoa = resultado.textContent;
	}
	reset.onclick = function(e){
  		resetear();
	}
	potencia.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "pow";
  		resolver()
	}
	raiz.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "sqrt";
  		resolver()
	}
	logaritmo.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "log";
  		resolver()
	}
	exponencial.onclick = function(e){
  		operandoa = resultado.textContent;
  		operacion = "exp";
  		resolver()
	}
	igual.onclick = function(e){
		resolver();
	}
}


function limpiar(){
	resultado.textContent = "";
}

function resetear(){
	resultado.textContent = "";
	operandoa = 0;
	operacion = "";
}

function resolver(){
	var res = 0;
	let dec = Math.pow(10,12)
	switch(operacion){
		case "pow":
			res = Math.pow(parseFloat(operandoa),2);
			break;

		case "sqrt":
			res = Math.sqrt(parseFloat(operandoa));
		    break;

		case "log":
			res = Math.log10(parseFloat(operandoa));
			break;

		case "exp":
			res = Math.exp(parseFloat(operandoa));
			break;
		
		default:
			res = operandoa;
			break;
	}
	/* resetear(); */
	resultado.textContent = res;
}
