function enviarEmail() {
  const email = document.getElementById("email").value;

  const destinatario =
    "jgsantos@unisantos.br, jvrodrigues@unisantos.br, amandasimoes@unisantos.br, giovana.almeida@unisantos.br";
  const assunto = "Contato via Site Institucional Turma SI 4° Sem Noturno";
  const corpo = `${email}`;

  const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(
    assunto,
  )}&body=${encodeURIComponent(corpo)}`;

  window.location.href = mailtoLink;
}

function setWhatsAppLink() {
  const currentHour = new Date().getHours();
  console.log(currentHour);
  const whatsappLink = document.getElementById("whatsapp");

  if (currentHour >= 10 && currentHour < 13) {
    whatsappLink.href = "https://wa.me/5513935000492";
    whatsappLink.classList.add("whatsappIcon");
  } else if (currentHour >= 13 && currentHour < 16) {
    whatsappLink.href = "https://wa.me/5513935001027";
    whatsappLink.classList.add("whatsappIcon");
  } else {
    whatsappLink.href = "#";
    whatsappLink.classList.add("disabled");
  }
}

document.addEventListener("DOMContentLoaded", setWhatsAppLink);
