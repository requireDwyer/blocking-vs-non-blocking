onmessage = (message) => {
    const n = message.data;
    postMessage(fib(n));
};

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
