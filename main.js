/*===========================Adds Visible when  the element scrolls into view=============================*/
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);  //Stop observing once visible
      }
    });
  }, { threshold: 0.2});

  elements.forEach(element => observer.observe(element));
});

/*===========================Testimonial auto-slid================================*/
document.addEventListener("DOMContentLoaded", function() {
  var myCarousel = new bootstrap.Carousel(document.querySelector("#testimonialCarousel"), {
    interval: 3000,
    ride: "carousel"
  });
});


/*===============================When we scroll navbar the navbar color changes========================*/
document.addEventListener("scroll", function() {
  const navbar = document.querySelector(".nav-header")

  if(window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/*==================================Small Screen Navbar (768)===========================*/
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".navbar-content ul");
  const closeMenu = document.getElementById("closeMenu");

  //Open Nav
  hamburger.addEventListener("click", function() {
    navMenu.classList.add("active");
    hamburger.style.display = "none";
    closeMenu.style.display = "block";  //show close icon
  });

  //close menu
  closeMenu.addEventListener("click", function() {
    navMenu.classList.remove("active");
    hamburger.style.display = "block";
    closeMenu.style.display = "none";  //hide close icon
  });