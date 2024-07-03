// 필요한 DOM 요소를 선택합니다.
const topBtn = document.getElementById('top-btn')
const footer = document.querySelector('footer')

// 스크롤 이벤트 리스너를 추가합니다.
window.addEventListener('scroll', () => {
    // 현재 스크롤 위치를 확인합니다.
    if (window.scrollY > 100) {
        // 스크롤이 100px 이상이면 버튼을 표시합니다.
        topBtn.style.display = 'block'
    } else {
        // 스크롤이 100px 미만이면 버튼을 숨깁니다.
        topBtn.style.display = 'none'
    }

    // 문서의 전체 높이
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)

    // 현재 스크롤 위치
    const scrollPosition = window.scrollY + window.innerHeight

    // 푸터의 높이
    const footerHeight = footer.offsetHeight

    // 버튼이 푸터 위에 위치해야 하는 경우
    if (docHeight - scrollPosition < footerHeight + 24) {
        // 푸터 위 24px에 위치하도록 설정
        topBtn.style.bottom = `${footerHeight + 24}px`
    } else {
        // 원래 위치로 복귀
        topBtn.style.bottom = '24px'
    }
})

// 버튼 클릭 이벤트 리스너를 추가합니다.
topBtn.addEventListener('click', () => {
    // 페이지 최상단으로 부드럽게 스크롤합니다.
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})
