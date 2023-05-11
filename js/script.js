
// start up
const up = document.getElementById("up")
window.onscroll = () => {
  if (window.scrollY >= 200) {
    up.style.display="block"
  } else {
    up.style.display="none"
  }
}
up.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top:0,
  })
})
const navLinks = document.querySelectorAll(".nav-link li a");

navLinks.forEach(a => {

  a.addEventListener("click", () => {
    navLinks.forEach(a => {
      a.classList.remove("active")
    })
    a.classList.add("active")
  })
  a.onmouseenter = () => {
     navLinks.forEach((a) => {
       a.classList.remove("active");
     });
    a.classList.add("active")
  }
})

navLinks.forEach((a) => {
  if (document.title == a.innerHTML) {
    a.classList.add("active");
  }
});
const dropdownMenu = document.querySelectorAll(".dropdown-menu li a");
dropdownMenu.forEach((a) => {
  a.addEventListener("click", () => {
    dropdownMenu.forEach(a => {
      a.classList.remove("active")
    })
    a.classList.add("active")
  })
  a.onmouseenter = () => {
     dropdownMenu.forEach((a) => {
       a.classList.remove("active");
     });
    a.classList.add("active")
  }
})
if (document.title == "C.r.a") {
  const loading = document.querySelector(".loading");
  const mainSec = document.querySelector("main");
  setTimeout(() => {
    loading.style = `
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../images/logo.PNG);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    `;
  }, 2000);
  setTimeout(() => {
    mainSec.style.display = "block";
    loading.style.display = "none";
  }, 2500);
  const next = document.querySelectorAll(".swiper-button-next");
  setInterval(() => {
    next.forEach(a => {
      a.click()
    })
  }, 5000);
}
