const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("number");
const loginbtn = document.querySelector(".login_submit-btn");
const eerr = document.querySelector(".Email_errorAsh");
const uerr = document.querySelector(".username_errorAsh");
const nerr = document.querySelector(".number_errorAsh");
const overlay = document.querySelector(".login_overlay");
const error = document.querySelector(".login_error");
const errorokay = document.querySelector(".error_okay");

function showError() {
  overlay.classList.remove = "hidden";
  error.classList.remove = "hidden";
}

window.errorokay.addEventListener("click", () => {
  overlay.classList.add = "hidden";
  error.classList.add = "hidden";
});

loginbtn.addEventListener("click", function () {
  console.log("s");
  if (username.value.trim() === " ") {
    uerr.innerText = uerr.innerText + "**";
    showError();
  }
  if (email.value.trim() === "") {
    eerr.innerText = eerr.innerText + "**";
    showError();
  }
  if (number.value.trim() === "") {
    nerr.innerText = nerr.innerText + "**";
    showError();
  }
});
