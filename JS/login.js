document.addEventListener("DOMContentLoaded", init);

function init() {
  const form = document.querySelector("form");
  const data = JSON.parse(localStorage.getItem("user"));
  const emailSpan = document.querySelector(".email_error");
  const passwordSpan = document.querySelector(".password_error");

  if (
    !JSON.parse(localStorage.getItem("logout"))
  ) {
    window.location = `home.html`;
    return;
  }

  document.body.style.display = "block";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailErr = [];
    passwordErr = [];

    const formdata2 = new FormData(e.target);

    function checkEmail() {
      if (formdata2.get("email").trim() === "") {
        emailErr.push("Pleas enter your email");
      } else if (
        !formdata2.get("email").trim().includes("@gmail.com") &&
        formdata2.get("email").trim().length > 0
      ) {
        emailErr.push("This email format is incorrect (example@gmail.com)");
      } else if (
        formdata2.get("email").toLowerCase().trim() !== data.email.toLowerCase()
      ) {
        emailErr.push("This email is incorrect");
      }
    }

    function checkPassword() {
      if (formdata2.get("password").trim() === "") {
        passwordErr.push("Pleas enter your password");
      } else if (formdata2.get("password").trim() !== data.password) {
        passwordErr.push("This password is incorrect");
      }
    }

    checkEmail();
    checkPassword();

    emailSpan.textContent = emailErr;
    passwordSpan.textContent = passwordErr;

    if (emailErr.length === 0 && passwordErr.length === 0) {
      setTimeout(() => {
        window.location = `home.html`;
        localStorage.setItem("logout", false);
      }, 1000);
    }
  });
}
