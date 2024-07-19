const listCont = document.querySelector('.list-cont');

listCont.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const confirmModal = confirm('삭제하시겠습니까?');
        if (confirmModal) {
            event.target.parentElement.remove();
        }
    }
});
