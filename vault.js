document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  const popupMessage = document.getElementById('popupMessage');
  const closePopup = document.getElementById('closePopup');

  form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would typically send the form data to a server
      // For this example, we'll just show the popup
      popupMessage.style.display = 'block';
  });

  closePopup.addEventListener('click', function() {
      popupMessage.style.display = 'none';
      form.reset(); // Reset the form after closing the popup
  });
});