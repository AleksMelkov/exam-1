const alertBtn = document.getElementById('alert');
const confirmBtn = document.getElementById('confirm');
const promptBtn = document.getElementById('prompt');
const input = document.querySelector('input[type="text"]');

alertBtn.addEventListener('click', () => {
    alert('Приветствую!');
});

confirmBtn.addEventListener('click', () => {
    confirm('Вы уверены?');
});

promptBtn.addEventListener('click', () => {
    input.value = prompt('Введите текст');
});
