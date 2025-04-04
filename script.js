// ====== TOGGLE FUNCTIONALITY ======
const setupInfoToggles = () => {
  document.querySelectorAll('.info-toggle').forEach(button => {
    const infoSection = button.nextElementSibling;
    
    // Initialize hidden state
    infoSection.style.display = 'none';
    button.setAttribute('aria-expanded', 'false');
    
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      
      // Toggle visibility
      if (isExpanded) {
        infoSection.style.display = 'none';
        button.setAttribute('aria-expanded', 'false');
        button.querySelector('.toggle-text').textContent = 'Show Project Documentation (German)';
      } else {
        infoSection.style.display = 'block';
        button.setAttribute('aria-expanded', 'true');
        button.querySelector('.toggle-text').textContent = 'Hide Documentation';
      }
    });
  });
};

// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const currentYear = document.getElementById('current-year');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Initialize all functionality
  setupInfoToggles();
});