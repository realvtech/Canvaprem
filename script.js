document.addEventListener("DOMContentLoaded", function () {
  // Toggling FAQ
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(question => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });

  // Toggling Navbar Mobile
  const mobileMenu = document.getElementById("mobile-menu");
  const navbarMenu = document.querySelector(".navbar-menu");
  
  mobileMenu.addEventListener("click", function () {
    if (navbarMenu.style.display === "flex") {
      navbarMenu.style.display = "none";
    } else {
      navbarMenu.style.display = "flex";
      navbarMenu.style.flexDirection = "column";
    }
  });
});

