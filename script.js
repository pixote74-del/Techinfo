// Gerador de jargões técnicos automáticos
const buzzwords = [
  "Sincronização Holística de Grafeno via Redes Neurais Líquidas.",
  "Meta-Algoritmo P2P com Reatividade Quântica Descentralizada.",
  "Hyper-Loop Bio-Sintético rodando nativamente no navegador.",
  "Criptografia Emocional de 4096-bits para Cafeteiras Conectadas.",
  "Deep Learning Subatômico focado em escalabilidade multidimensional."
];

function generateBuzzword() {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  const randomIndex = Math.floor(Math.random() * buzzwords.length);
  
  modalTitle.innerText = "Novo Algoritmo Criado!";
  modalBody.innerText = buzzwords[randomIndex];
  modal.style.display = "flex";
}

function openModal() {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  modalTitle.innerText = "Download Quântico Iniciado";
  modalBody.innerText = "Seu cérebro está sendo pareado via Bluetooth com a nossa base lunar.";
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Manipulação do Formulário
function handleFormSubmit(event) {
  event.preventDefault();
  const feedback = document.getElementById("formFeedback");
  
  feedback.innerText = "✓ Telepatia confirmada. Aguarde o download do pensamento.";
  event.target.reset();
  
  setTimeout(() => {
    feedback.innerText = "";
  }, 4000);
}
