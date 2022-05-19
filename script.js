// My script
const navBarNav = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".nav-link");

navBarNav.addEventListener("click", function (e) {
  navLinks.forEach(function (link) {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
  });
  e.target.classList.add("active");
});

// Slick JS

$(".card-produk-wrapper").slick({
  dots: true,
  infinite: false,
  arrows: true,
  autoplay: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// AOS

AOS.init({
  once: true,
  duration: 900,
  offset: 400,
});

// Contact Form

const scriptURL = "https://script.google.com/macros/s/AKfycbyzNeQLaQIZ3KCk3ZrXuJmg-dSaO3H__zPq-PCghWhGpukWDvXk0k2udy6xRdIjvGGbZg/exec";
const form = document.forms["adijaya-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
