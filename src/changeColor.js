const div = document.querySelector('#colored-div');
const changeColorBtn = document.querySelector('#change-color');

div.style.backgroundColor = random_rgb_string();

function random_rgb_string() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

changeColorBtn.addEventListener('click', () => {
    div.style.backgroundColor = random_rgb_string();
});
