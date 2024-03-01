// Ping comming soon

const formulario = document.querySelector(".formulario");

document.addEventListener("DOMContentLoaded", () => {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const email = data.get("email");

    let emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (email === "") {
      mostrarAlerta("campo vacio");
      return;
    }

    if(!emailValido.test(email)){
      mostrarAlerta("email no válido" , 'email')
      return
    }

    //pasamos todas las validaciones
    document.querySelector('.formulario .email').classList.remove('none')

  });

  function mostrarAlerta(mensaje , tipo) {
    const errorMensaje = document.querySelector(".error-mensaje");
    errorMensaje.textContent = mensaje;
    errorMensaje.classList.add("error");
    errorMensaje.classList.remove('hide')
    
    if(tipo === 'email'){
      errorMensaje.style.fontWeight=700
      document.querySelector('.formulario .email').classList.add('none')
    }
    setTimeout(() => {
      errorMensaje.classList.add("hide");
    }, 2000);

    formulario.appendChild(errorMensaje);
  }
});
