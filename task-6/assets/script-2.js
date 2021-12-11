function isThreeDigitNumber(string) {
    if (/\d{4}/g.test(string)) {
        return false;
    }
    return /\d{3}/g.test(string)
}

const input = document.getElementById('test-input');
const button = document.querySelector('.form-element button');
const paragraph = document.querySelector('.form-element p');

button.addEventListener('click', () => {
    const { value } = input;
    paragraph.innerText = isThreeDigitNumber(value);
});
