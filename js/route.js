document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});

const urlRoutes = {
  404: {
    template: "/pages/404.html",
    description: "Page not found",
  },
  "/": {
    template: "/pages/index.html",
    description: "This is the home page",
  },
  "/login": {
    template: "/pages/login.html",
    description: "This is the about page",
  },
  "/help": {
    template: "/pages/help.html",
    description: "This is the contact page",
  },
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
  const html = await fetch(route.template).then((response) => response.text());
  document.querySelector(".section-login").innerHTML = html;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", route.description);
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();
