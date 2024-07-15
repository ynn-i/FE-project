document.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.top = '0';
    } else {
        header.style.top = '-80px';
    }
});
