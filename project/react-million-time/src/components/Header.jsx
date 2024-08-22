import React from 'react';
// import styled from 'styled-components';

export default function Header() {
    return (
        <header>
            <h1>
                <img src='./images/title.png' alt='1만 시간의 법칙' class='title-img' />
            </h1>
            <p class='quotes'>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</p>
            <div class='intro'>
                <strong>1만 시간의 법칙</strong>은<br />
                어떤 분야의 전문가가 되기 위해서는
                <br />
                최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </div>
        </header>
    );
}
