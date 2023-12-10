const limit = 1;
let request = false;



async function getFacts(limit) {

    if (request) {
        return;
    }

    request = true;

    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/facts?limit=${limit}`, {
            headers: { 'Api_Key': '0lAora48t99zuI7tWeiAoA==61EUmZBNtWI4oyN8' },
        });

        const result = await response.json();

        return result;

    } catch {
        throw document.getElementById('text').textContent = 'Error occurred while generating the fact';

    } finally {
        request = false;
    }
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
