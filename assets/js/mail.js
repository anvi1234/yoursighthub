const btn = document.getElementById('button');

document.getElementById('contact')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_l2flogc';
   const templateID = 'template_5jzpd6u';
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email'; 
      document.getElementById('contact').reset();
      alert('Thank you for your enquiry. We will be in touch shortly.');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});