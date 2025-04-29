// Toggle FAQ answers
document.querySelectorAll('.faq-question').forEach((faq) => {
  faq.addEventListener('click', () => {
    const answer = faq.nextElementSibling;

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
