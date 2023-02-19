const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_j3jvawg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      form.reset();
      alert('Mensaje enviado con exito');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});