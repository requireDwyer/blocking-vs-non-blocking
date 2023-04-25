// number is defined in other file

const fibText2 = document.querySelector('#fibText-blocking');
const fibBtn2 = document.querySelector('#fibBtn-blocking');

fibText2.innerText = `[ Fib of ${number} will go here ]`;
fibBtn2.innerText = `Generate Fib of ${number}`;

fibBtn2.addEventListener('click', () => {
    fibText2.classList.add('loading');
    fibText2.classList.remove('success');
    fibText2.innerText = 'Loading... (Blocking: Try changing the color 👎)';
    setTimeout(() => {
        fibText2.innerText = fib(number);
        console.log(
            `From blocking: Found fib of ${number}: ${fibText2.innerText}.`
        );
        fibText2.classList.remove('loading');
        fibText2.classList.add('success');
        fibBtn2.innerText = 'Try again ☠️';
    }, 0);
});

// This is recursive fibonacci with no memorization.
// I did this because it is slow.
// n = 43 takes ~= 4 seconds on my computer
// n = 44 takes ~= 6 seconds on my computer
// n = 45 takes ~= 10 seconds on my computer
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
