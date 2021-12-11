const value1 = document.getElementById('value-1');
const value2 = document.getElementById('value-2');
const result = document.querySelector('.form-element span');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    result.innerHTML = parseInt(value1.value) + parseInt(value2.value);
});
