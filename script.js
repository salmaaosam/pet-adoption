const buttons = document.querySelectorAll('.adopt-btn');
buttons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
  });
});