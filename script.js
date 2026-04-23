
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}


const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });
});


const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


// LOGIN
function login() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPassword").value;
  let role = document.getElementById("loginRole").value;

  if (email === "" || pass === "" || role === "") {
    alert("Please fill all fields!");
  } else {
    alert("Login Successful as " + role);
  }
}

// SIGNUP
function signup() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  if (email === "" || pass === "" || role === "") {
    alert("Please fill all fields!");
  } else {
    alert("Signup Successful as " + role);
  }
}
