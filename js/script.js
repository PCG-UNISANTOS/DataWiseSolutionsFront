function enviarEmail() {
    const email = document.getElementById("email").value;
  
    const destinatario = "ouvidoria@unisantos.br";
    const assunto = "Contato via Site Institucional Turma SI 4° Sem Noturno";
    const corpo = `${email}`;
  
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

    window.location.href = mailtoLink;
  }

