// Dark mode toggle
const toggleButton = document.getElementById('darkModeToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    toggleButton.textContent = "☀️ Gaišais režīms";
  } else {
    toggleButton.textContent = "🌙 Tumšais režīms";
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
