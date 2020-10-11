console.log("sesion iniciada");

/*VARIABLES INICIO AL VALIDAR SESIÓN*/

const welcome= document.getElementById("welcome");

let sesionIniciada= JSON.parse(localStorage.getItem('usuarioValidado'));

welcome.innerText= sesionIniciada.nickname;
console.log(sesionIniciada);

function salir(){
	localStorage.setItem('usuarioValidado',null);
	window.location="index.html";
}
