const paragraph = document.querySelector('.main-content p');

paragraph.addEventListener('mouseenter', () => {
    paragraph.style.fontStyle = 'italic';
});

paragraph.addEventListener('mouseleave', () => {
    paragraph.style.fontStyle = 'normal';
});
