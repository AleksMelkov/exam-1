const button = document.querySelector('button');

button.addEventListener('mouseenter', () => {
    button.textContent = 'Отличный результат';
});

button.addEventListener('mouseleave', () => {
    button.textContent = 'Наведи на меня';
})
