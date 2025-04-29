// FAQ Toggle functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  question.addEventListener('click', () => {
    const isExpanded = answer.style.display === 'block';
    answer.style.display = isExpanded ? 'none' : 'block';
  });
});

// Form validation (optional)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  if (name === '' || email === '' || message === '') {
    event.preventDefault();
    alert('Please fill in all fields!');
  }
});
