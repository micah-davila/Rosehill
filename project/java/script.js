// Toggle FAQ visibility
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = answer.style.maxHeight;
  
      document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);
      document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('open'));
  
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        button.classList.add('open');
      }
    });
  });
  
  // Prevent form default submission
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset(); // Just clears the form without showing a message
  });
  