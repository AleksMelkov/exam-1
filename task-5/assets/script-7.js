const inputs = document.querySelectorAll('.form-element input[type="text"]');
const button = document.querySelector('button');
const cells = document.querySelectorAll('table td');

button.addEventListener('click', () => {
    inputs.forEach((input) => {
        const name = input.name;
        const value = input.value;
        cells.forEach((cell) => {
            cell.style[name] = (name === 'borderWidth' ? `${value}px` : value);
        });
    });
});
