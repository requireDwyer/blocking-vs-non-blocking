import { number } from './blocking.js';

const fibText = document.querySelector('#fibText-nonBlocking');
const fibBtn = document.querySelector('#fibBtn-nonBlocking');

fibText.innerText = `[ Fib of ${number} will go here ]`;
fibBtn.innerText = `Generate Fib of ${number}`;

const fibWorker = new Worker('src/fibWorker.js');

fibWorker.onmessage = (message) => {
    fibText.innerText = message.data;
    fibText.classList.remove('loading');
    fibText.classList.add('success');
    fibBtn.innerText = 'Try again 😀';
    console.log(`From non-blocking: Found fib of ${number}: ${message.data}.`);
};

fibBtn.addEventListener('click', () => {
    fibText.classList.add('loading');
    fibText.classList.remove('success');
    fibText.innerText =
        'Loading... (Try changing the color and getting some jokes 👍)';
    fibWorker.postMessage(number);
});
