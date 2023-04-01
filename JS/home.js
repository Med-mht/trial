document.addEventListener("DOMContentLoaded", init);
const navbarInfo = document.querySelector(".info_user");
function init() {
  if (!localStorage.getItem('user')) {
    window.location = `login.html`;
    return;
  }
  if (JSON.parse(localStorage.getItem("logout"))) {
    window.location = `login.html`;
    return;
  }
  document.body.style.display='block'
  drawnavbar();
  logout();
}

function drawnavbar() {
  userLS = JSON.parse(localStorage.getItem("user"));
  if (userLS) {
    navbarInfo.insertAdjacentHTML(
      "beforeend",
      `<a class="username">${userLS.username}</a>
    <a class="btn">Log out</a>`
    );
  }
}

function logout() {
  const logoutBtn = document.querySelector(".btn");
  logoutBtn.addEventListener("click", () => {
    localStorage.setItem("logout", true);
    setTimeout(() => {
      window.location = `login.html`;
    }, 1000);
  });

  console.log(logoutBtn);
}
