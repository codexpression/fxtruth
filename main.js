document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.mobile-links').style.display = 'flex';
});

document.querySelector('.mobile-links .close').addEventListener('click', () => {
    document.querySelector('.mobile-links').style.display = 'none';
})