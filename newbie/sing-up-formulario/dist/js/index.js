// Formularios

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  const name = data.get("name");
  const lastName = data.get("lastname");
  const email = data.get("email");
  const password = data.get("password");

  // const dataForm = {
  //   name,
  //   lastName,
  //   email,
  //   pass,
  // };

  // if (Object.values(dataForm).includes("")) {
  //   console.log("campos obligatorios");
  // }
  if (name === "") {
    mostrarError("campo obligatorio", "name");
  } else {
    removeError("name");
  }

  if (lastName === "") {
    mostrarError("campo obligatorio", "lastname");
  } else {
    removeError("lastname");
  }

  if (email === "") {
    mostrarError("campo obligatorio", "email");
  } else if (!isValid(email)) {
    mostrarError("email no valido", "email");
  } else {
    removeError("email");
  }

  if (password === "") {
    mostrarError("campo obligatorio", "password");
  } else {
    removeError("password");
  }
});

function mostrarError(mensaje, campo) {
  const formControl = formulario[campo].parentNode;
  if (formControl.querySelector(".error")) {
    formControl.querySelector(".error").remove();
  }
  const input = formControl.querySelector("input");
  input.classList.add("wrong");
  const icon = formControl.querySelector(".icon");
  const mensajeError = document.createElement("small");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add("error");
  icon.classList.toggle("hide");

  formControl.appendChild(mensajeError);
}

function removeError(campo) {
  const formControl = formulario[campo].parentNode;
  const icon = formControl.querySelector(".icon");
  const input = formControl.querySelector("input");

  if (formControl.querySelector(".error")) {
    formControl.querySelector(".error").remove();
    icon.classList.add("hide");
    input.classList.remove("wrong");
  }
}

function isValid(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
