document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.header-modal');
    const toggleModalBtn = document.querySelector('header-modal-btn');

    toggleModalBtn.onclick = function () {
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        } else {
            modal.style.display = 'block';
        }
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
