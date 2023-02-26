document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});

const urlRoutes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/login": "/pages/login.html",
  "/help": "/pages/help.html",
};

const urlRoute = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = async () => {
  const location = window.location.pathname;
  if (location.length == 0) {
    location = "/";
  }
  const route = urlRoutes[location] || urlRoutes["404"];
  const html = await fetch(route).then((response) => response.text());
  document.getElementById("section-login").innerHTML = html;
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();
