//your JS code here. If required.
// script.js
document.querySelector('.btn').addEventListener('click', function() {
  const searchDiv = document.querySelector('.search');
  const inputField = document.querySelector('.input');

  // Add 'active' class to the search div
  searchDiv.classList.add('active');
  
  // Focus the input field
  inputField.focus();
});
