const image = document.querySelector('.main-photo');
const input = document.querySelector('input');
const button = document.querySelector('button');
const small = document.querySelector('.form-element small')

button.addEventListener('click', () => {
    small.classList.remove('error');
    const RegExp = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;
    if (RegExp.test(input.value)) {
        image.src = input.value;
    } else {
        small.classList.add('error');
    }
});
