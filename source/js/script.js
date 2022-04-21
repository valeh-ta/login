// Functions for select elems with id & class
var $ = document;
function _id(id_name) {
  return $.getElementById(id_name);
}

function _class(class_name) {
  return $.getElementsByClassName(class_name);
}

const inputElem = $.getElementById("inputUser");
const spanElem = $.querySelector(".counter");
const inputMaxLength = inputElem.getAttribute("maxlength"); // 19

var togglePassword = _class("toggle-password");
var passwordField = _id("password-field");
togglePassword[0].addEventListener("click", function () {
  if (passwordField.type == "text") {
    passwordField.type = "password";
    togglePassword[0].classList.remove("active");
  } else {
    passwordField.type = "text";
    togglePassword[0].classList.add("active");
  }
});

inputElem.addEventListener("keyup", function () {
  spanElem.innerHTML = inputMaxLength - inputElem.value.length; // 15
});
