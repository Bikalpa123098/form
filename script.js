let eye = document.querySelector("#eye");
let password = document.querySelector("#password");
function pass() {
  if (eye.getAttribute("class") == "fa fa-eye") {
    eye.setAttribute("class", "fa fa-eye-slash");
    password.setAttribute("type", "text");
  } else {
    eye.setAttribute("class", "fa fa-eye");
    password.setAttribute("type", "password");
  }
}
