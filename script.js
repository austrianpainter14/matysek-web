// Přidání nové zajímavosti
document.getElementById('add-fact').addEventListener('click', function() {
    const input = document.getElementById('fact-input');
    const fact = input.value.trim();
    if (fact) {
      const li = document.createElement('li');
      li.textContent = fact;
      document.getElementById('facts-list').appendChild(li);
      input.value = '';
    }
  });
  
  // Odeslání formuláře
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulář byl odeslán! (ukázka)');
  });
  