const elements = document.querySelectorAll('.form-element');

elements.forEach((element) => {
    const input = element.querySelector('input[type="checkbox"]');
    const select = element.querySelector('select');
    const result = element.querySelector('.form-element-result');
    input.addEventListener('change', () => {
        input.checked ? select.disabled = false : select.disabled = true;
    });
    select.addEventListener('change', () => {
        if (select.value === 'none') {
            result.innerText = '';
            return;
        }
        const option = select.options[parseInt(select.value) + 1];
        if (option) {
            result.innerText = option.innerText;
            alert(option.innerText);
        }
    });
});
