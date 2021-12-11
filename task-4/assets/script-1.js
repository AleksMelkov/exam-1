const lastnameInput = document.getElementById('form-element-lastname');
const nameInput = document.getElementById('form-element-name');
const surnameInput = document.getElementById('form-element-surname');

lastnameInput.addEventListener('click', () => {
    lastnameInput.blur();
});

nameInput.addEventListener('click', () => {
    nameInput.blur();
});

surnameInput.addEventListener('click', () => {
    surnameInput.blur();
});

runOnKeys(lastnameInput, 'Alt', '9');
runOnKeys(nameInput, 'Alt', '8');
runOnKeys(surnameInput, 'Alt', '7');

function runOnKeys(selector, ...codes) {
    let pressed = new Set();
    document.addEventListener('keydown', function(event) {
        pressed.add(event.key);
        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }
        pressed.clear();
        selector.focus();
    });
    document.addEventListener('keyup', function(event) {
        pressed.delete(event.key);
    });
}

const accruedInput = document.getElementById('form-element-accrued');
const withheldInput = document.getElementById('form-element-withheld');
const totalInput = document.getElementById('form-element-total');
const button = document.getElementById('form-element-total-action');

accruedInput.addEventListener('input', (e) => {
    accruedInput.value = accruedInput.value.replace(/\D/g, '');
});

withheldInput.addEventListener('input', (e) => {
    withheldInput.value = withheldInput.value.replace(/\D/g, '');
});

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (accruedInput.value <= withheldInput.value) {
        totalInput.value = 0;
    } else {
        totalInput.value = accruedInput.value - withheldInput.value;
    }
});
