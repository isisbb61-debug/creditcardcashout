/* =========================
   Mobile Menu Toggle
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("nav-open");
    });
  }

  /* =========================
     FAQ Toggle
  ========================= */
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector(".faq-icon");

      if (!answer) return;

      const isOpen = answer.style.display === "block";

      // 모두 닫기 (아코디언 방식)
      document.querySelectorAll(".faq-answer").forEach(function (el) {
        el.style.display = "none";
      });
      document.querySelectorAll(".faq-icon").forEach(function (el) {
        el.textContent = "+";
      });

      // 현재 클릭한 것만 토글
      if (!isOpen) {
        answer.style.display = "block";
        if (icon) icon.textContent = "−";
      }
    });
  });
});
