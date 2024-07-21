// 투두리스트 인풋박스 나타나기


// 투두리스트 삭제하기
const listCont = document.querySelector('.list-cont');

listCont.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        const confirmModal = confirm('삭제하시겠습니까?');
        if (confirmModal) {
            event.target.parentElement.remove();
        }
    }
});
