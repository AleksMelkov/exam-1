const elements = document.querySelectorAll('.form-element input[type="text"]');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const input = elements[0];
    input.select();
    input.focus();
});
