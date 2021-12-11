const button = document.querySelector('.form-element button');
const input = document.querySelector('.form-element input[type="text"]');
button.addEventListener('click', () => {
    if (input.value.length === 0) {
        button.textContent = 'Нажми меня';
        return;
    }
    button.textContent = input.value;
});
