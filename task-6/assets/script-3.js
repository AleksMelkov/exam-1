function noEmpty(arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }
    return arr.filter((item) => {
        return item !== '';
    }).length;
}

const input = document.getElementById('test-input');
const button = document.querySelector('.form-element button');
const paragraph = document.querySelector('.form-element p');

button.addEventListener('click', () => {
    const { value } = input;
    const arr = value.split(',');
    console.log(arr);
    paragraph.innerText = noEmpty(arr);
});
