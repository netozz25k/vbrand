    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }

    function sendForm(event) {
      event.preventDefault();
      alert("Mensagem enviada! Em breve entraremos em contato 🚀");
    }