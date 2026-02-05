/* ================= BUSCA DE DESTINOS ================= */
const input = document.getElementById("buscar");
const cards = document.querySelectorAll(".card");

if (input) {
  input.addEventListener("keyup", () => {
    const termo = input.value.toLowerCase();

    cards.forEach(card => {
      const texto = card.innerText.toLowerCase();
      card.style.display = texto.includes(termo) ? "" : "none";
    });
  });
}

console.log("Guia Turístico de Goiás carregado");

/* ================= COOKIES CONSENT ================= */
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("accept-cookies");

if (cookieBanner && acceptCookies) {
  if (localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "none";
  }

  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
}
