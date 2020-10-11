console.log("*** Bienvenido ***");

/*REGISTRAR USUARIO VARIABLES*/
const nickname= document.getElementById("nickname");
const usuario= document.getElementById("usuario");
const clave= document.getElementById("clave");

const registrarUsuario= document.getElementById("registrarUsuario");



let listaUsuarios= [];


registrarUsuario.addEventListener('submit',(e)=> {

	e.preventDefault();
	let nuevoUsuario={
		nickname: nickname.value,
		user: usuario.value,
		pass: clave.value
	};
	let usuarioExistente= null;

	if (localStorage.getItem('users')==null) {
		listaUsuarios.push(nuevoUsuario);
		alert("Usuario registrado correctamente");
		window.location= "index.html";
	}
	else{ 

		listaUsuarios= JSON.parse(localStorage.getItem('users'));
		for (let i = 0; i<listaUsuarios.length; i++) {
			if (listaUsuarios[i].user==usuario.value) {
				usuarioExistente = listaUsuarios[i];
			}
		}

		if (usuarioExistente==null) {
			listaUsuarios.push(nuevoUsuario);
			alert("Usuario registrado correctamente");
			window.location= "index.html";
		}
		else{
			alert("Este usuario ya está registrado");
		}
		
	}


	let guardarUsuarios= JSON.stringify(listaUsuarios);
	localStorage.setItem('users', guardarUsuarios);



});

