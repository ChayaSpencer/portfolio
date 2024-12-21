// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Highlight active section
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const id = section.getAttribute('id');
      const link = document.querySelector(`nav ul li a[href="#${id}"]`);
  
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
  // Handle form submission and display thank-you message
const form = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    thankYouMessage.style.display = 'block'; // Show thank-you message
    form.reset(); // Clear the form fields
});