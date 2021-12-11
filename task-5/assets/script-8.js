const paragraph = document.querySelector('.main-content p');

paragraph.addEventListener('click', () => {
    paragraph.style.fontWeight = '700';
    paragraph.style.fontStyle = 'italic';
});
