document.addEventListener("DOMContentLoaded", init);

const form = document.querySelector("form");
const usernameSpan = document.querySelector(".username_span");
const passwordSpan = document.querySelector(".password_span");
const emailSpan = document.querySelector(".email_span");

function init() {
  if (
    !JSON.parse(localStorage.getItem("logout")) &&
    localStorage.getItem("user")
  ) {
    window.location = `home.html`;
    return;
  }
  document.body.style.display = "block";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);

    usernameErr = [];
    emailErr = [];
    passwordErr = [];

    function checkUsername() {
      if (formdata.get("username").trim() === "") {
        usernameErr.push(`Pleas enter your username`);
      } else if (formdata.get("username").trim().length < 4) {
        usernameErr.push(`The username must be at least 3 characters long`);
      }
    }

    function checkEmail() {
      if (formdata.get("email").trim() === "") {
        emailErr.push(`Pleas enter your email`);
      } else if (!formdata.get("email").trim().includes("@gmail.com")) {
        emailErr.push("This email format is incorrect");
      }
    }

    function checkPassword() {
      if (formdata.get("password").trim() === "") {
        passwordErr.push(`Pleas enter your password`);
      } else if (formdata.get("password").trim().length < 7) {
        passwordErr.push(`The password must be at least 6 characters long`);
      }
    }

    function goToLoginPage() {
      if (
        usernameErr.length === 0 &&
        emailErr.length === 0 &&
        passwordErr.length === 0
      ) {
        setTimeout(() => {
          window.location = `login.html`;
        }, 1000);
      }
    }

    checkUsername();
    checkEmail();
    checkPassword();
    goToLoginPage();

    data = Object.fromEntries(formdata);

    localStorage.setItem("user", JSON.stringify(data));
    localStorage.setItem('logout',true)

    usernameSpan.textContent = usernameErr;
    emailSpan.textContent = emailErr;
    passwordSpan.textContent = passwordErr;
  });
}
