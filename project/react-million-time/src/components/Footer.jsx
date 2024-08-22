import React from 'react';
import styled from 'styled-components';

const ElFooter = styled.footer`
    display: flex;
    gap: 20px;
    margin: 80px 0 40px;
    font-size: 9px;
    font-weight: 400;
    color: #ffffffb2;
`;
const ElImg = styled.img`
    width: 90px;
`;

function Footer() {
    return (
        <>
            <ElFooter>
                <ElImg src='weniv.svg' alt='위니브' />
                <p>
                    ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
                    <br />
                    수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
                </p>
            </ElFooter>
        </>
    );
}
export default Footer;
