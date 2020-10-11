console.log("prueba");

/*VARIABLES INICIAR SESION*/
const validarUsuario= document.getElementById("validarUsuario");
const validarClave= document.getElementById("validarClave");
const validarFormulario= document.getElementById("validarFormulario");

let userValidate= JSON.parse(localStorage.getItem('users'));

validarFormulario.addEventListener('submit',(event) => {

	event.preventDefault();
	let comprobArray= null;

	for (let i = 0; i<userValidate.length; i++) {
		if (userValidate[i].user==validarUsuario.value && userValidate[i].pass==validarClave.value) {
			comprobArray = userValidate[i];
		}
	}
	console.log(comprobArray);
	if (comprobArray!=null) {

		window.location="inicio.html";
	}
	else{
		alert("Usuario o contraseña incorrecta");
		window.location.reload();
	}
	let usuarioIngresado= JSON.stringify(comprobArray);
	localStorage.setItem('usuarioValidado',usuarioIngresado);

});


