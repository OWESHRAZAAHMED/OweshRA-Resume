// JavaScript for smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('forscrolling');
  const target = document.getElementById('work');

  button.addEventListener('click', function () {
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

  
