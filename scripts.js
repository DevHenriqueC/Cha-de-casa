const hamburgerButton = document.querySelector("#hamburgerButton");
const closeButton = document.querySelector("#closeButton");

const mobileMenu = document.querySelector("#mobileMenu");

hamburgerButton.addEventListener("click", function () {
  mobileMenu.classList.add("flex");
});

closeButton.addEventListener("click", function () {
  mobileMenu.classList.remove("flex");
});

// Função de contagem regressiva
function contagemRegressiva() {
    const dataEvento = new Date('2026-12-27T18:00:00');
    const agora = new Date();
    const tempoRestante = dataEvento - agora;
  
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    document.getElementById('contador').innerText = dias;
  }
  
  // Atualiza a contagem regressiva a cada 24 horas
  setInterval(contagemRegressiva, 1000 * 60 * 60 * 24);
  contagemRegressiva();
  
  