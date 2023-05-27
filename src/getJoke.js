const jokeText = document.querySelector('#jokeText');

document.querySelector('#jokeBtn').addEventListener('click', () => {
    getJoke()
        .then((data) => {
            jokeText.innerText = data;
            jokeText.classList.remove('error');
            jokeText.classList.add('success-joke');
        })
        .catch(() => {
            jokeText.innerText = 'Error when finding joke.';
            jokeText.classList.remove('success-joke');
            jokeText.classList.add('error');
        });
});

async function getJoke() {
    const request = new Request('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'text/plain',
        },
    });
    const response = await fetch(request);
    const data = await response.text();
    return data;
}
