// Shared navigation, footer year and contact form behaviour.
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "×" : "☰";
    });
  }
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Website enquiry - " + data.get("subject"));
      const body = encodeURIComponent(
        "Name: " + data.get("name") + "\n" +
        "Email: " + data.get("email") + "\n" +
        "Phone: " + (data.get("phone") || "Not provided") + "\n\n" +
        "Message:\n" + data.get("message")
      );
      window.location.href = "mailto:planetxaerospace@gmail.com?subject=" + subject + "&body=" + body;
    });
  }
});