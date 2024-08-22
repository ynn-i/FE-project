import React from 'react';

function Modal({ modalClose }) {
    return (
        <>
            <form className='modal' method='dialog' id='modal'>
                <div id='modal-content'>
                    <p className='modal-title'></p>
                    <p className='modal-text'>당신의 꿈을 응원합니다!</p>
                    <img src='licat.png' alt='' className='modal-img' />
                    <button className='modal-close-btn' onClick={modalClose}>
                        종료하고 진짜 <span className='mobile-break'></span>훈련하러 가기 GO!GO!
                    </button>
                </div>
            </form>
        </>
    );
}
export default Modal;
