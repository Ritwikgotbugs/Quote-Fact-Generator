let requestInProgress = false;

function generateQuote() {
  if (requestInProgress) {
    return;
  }

  requestInProgress = true;

    fetch(`https://api.api-ninjas.com/v1/quotes?category=computers`, {
      headers: {
        'X-Api-Key': '0lAora48t99zuI7tWeiAoA==61EUmZBNtWI4oyN8',
      },
    })
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        let quote = data[randomIndex].quote;
        quote = '"' + quote + '"';
        document.getElementById('text').textContent = quote;
      })
      .catch(() => {
        document.getElementById('text').textContent = 'Error occurred while generating the quote.';
      })
      .finally(() => {
        requestInProgress = false;
      });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('quote');
  
    button.addEventListener('click', generateQuote);
  
    generateQuote();
  });
  