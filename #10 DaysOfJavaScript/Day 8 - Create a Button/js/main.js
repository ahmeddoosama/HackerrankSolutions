let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    btn.textContent = ++btn.value;
})