// Simple FAQ toggle logic
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isOpen = answer.style.display === 'block';
        answer.style.display = isOpen ? 'none' : 'block';
    });
});

// Optional form submission feedback
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thanks! We've received your message and will be in touch soon.");
    this.reset();
});
