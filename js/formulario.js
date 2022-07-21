// validar el formulario
const formulario = document.getElementById("formulario");
const elementos = formulario.elements;
const inputs = document.querySelectorAll("#formulario input, textarea");

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Email.
  mensaje: /^[a-zA-ZÀ-ÿ\s]{1,250}$/, //
  telefono: /^\d{7,14}$/ // 7 a 14 numeros.

};

 const campos = {
   nombre: false,
   email: false,
   telefono: false,
   mensaje: false,
 };
// boton = document.getElementById("formulario__btn");

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;	
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje')
		break;		
	}		
 }

  const validarCampo = (expresion, input, campo) => {
 	if(expresion.test(input.value)){
 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
 		campos[campo] = true;
 	} else {
 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
 		campos[campo] = false;
 	}
 }


inputs.forEach((input) => {
  input.addEventListener("keyup" , validarFormulario)
  input.addEventListener("blur" , validarFormulario)
  });
  

// formulario.addEventListener('submit', (e)=>{
// 	e.preventDefault();
// });

 formulario.addEventListener('submit', (e) => {
 	e.preventDefault();
	 formulario.reset();
 	if( campos.nombre && campos.email && campos.telefono && campos.mensaje ){
 		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
 		setTimeout(() => {
 			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
 		}, 5000);
 		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
 			icono.classList.remove('formulario__grupo-correcto');
 		});
 	 } else {
		console.log("Formulario no enviado");					
 		document.getElementById('formulario__mensaje-form-vacio').classList.add('formulario__mensaje-form-vacio-activo');
 	}
 });



// formulario.addEventListener("submit", validarNombre);

// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// const expresiones = {
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Email.
//     mensaje: /^[a-zA-ZÀ-ÿ\s]{1,250}$/ //
// }

// const campos = {
// 	nombre: false,
// 	email: false,
// 	mensaje: false
// }

// const validarFormulario = (e) => {
// 	switch (e.target.name) {
// 		case "nombre":
// 			validarCampo(expresiones.nombre, e.target, 'nombre');
// 		break;
// 		case "email":
// 			validarCampo(expresiones.email, e.target, 'email');
// 		break;
// 		case "mensaje":
// 			validarCampo(expresiones.mensaje, e.target, 'mensaje');
// 		break;
// 	}
// }

// const validarCampo = (expresion, input, campo) => {
// 	if(expresion.test(input.value)){
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
// 		campos[campo] = true;
// 	} else {
// 		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
// 		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
// 		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
// 		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
// 		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
// 		campos[campo] = false;
// 	}
// }

// inputs.forEach((input) => {
// 	input.addEventListener('keyup', validarFormulario);
// 	input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	if(campos.nombre && campos.email && campos.mensaje){
// 		formulario.reset();

// 		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
// 		setTimeout(() => {
// 			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
// 		}, 5000);

// 		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
// 			icono.classList.remove('formulario__grupo-correcto');
// 		});
// 	} else {
// 		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
// 	}
// });
