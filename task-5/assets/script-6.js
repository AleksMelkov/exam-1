const paragraph = document.querySelector('.form-element p');
const inputs = document.querySelectorAll('.form-element input[type="text"]');
const button = document.querySelector('.form-element button');

button.addEventListener('click', () => {
    inputs.forEach((input) => {
        paragraph.style[input.name] = input.value;
    });
});
