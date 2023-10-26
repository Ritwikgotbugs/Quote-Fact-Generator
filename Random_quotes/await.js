const limit = 1; // Define the limit

async function getFacts(limit) {
    const response = await fetch(`https://api.api-ninjas.com/v1/facts?limit=${limit}`, {
        headers: { 'X-Api-Key': '0lAora48t99zuI7tWeiAoA==61EUmZBNtWI4oyN8' },
    });

    const result = await response.json();

    return result;
}

const button = document.querySelector('#fact');
const text = document.querySelector('#text');

button.addEventListener('click', async () => {
    const facts = await getFacts(limit);

    if (facts.length > 0) {
        text.textContent = facts[0].fact;
    } else {
        text.textContent = 'No facts available.';
    }
});
