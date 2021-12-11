const image = document.querySelector('.main-photo');
const button = document.querySelector('button');

let counter = 0

button.addEventListener('click', () => {
    image.src = `https://picsum.photos/500/500/?counter=${counter}`;
    counter++;
});
