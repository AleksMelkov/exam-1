const elements = document.querySelectorAll('.form-element label');
elements.forEach((element) => {
    element.addEventListener('change', () => {
        const radio = element.querySelector('input[type="radio"]');
        const text = element.querySelector(`input[name="${radio.value}"]`);
        disabledAll();
        text.disabled = false;
    });
});

const disabledAll = () => {
    const elements = document.querySelectorAll('.form-element input[type="text"]');
    elements.forEach((element) => {
        element.disabled = true;
    });
};
