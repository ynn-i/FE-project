import React from 'react';
import { useState } from 'react';

function Main({ modalOpen }) {
    const [field, setField] = useState('');
    const [time, setTime] = useState(0);
    const [day, setDay] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setDay(Math.ceil(10000 / Number(time)));
    };

    return (
        <>
            <form className='input-wrap' onSubmit={handleSubmit}>
                <div className='sentence'>
                    <span>나는</span>
                    <input type='text' name='expert' id='expert' placeholder='예)프로그래밍' required value={field} onChange={(event) => setField(event.target.value)} />
                    <span>전문가가 될 것이다.</span>
                </div>
                <div className='sentence'>
                    <span>그래서 앞으로 매일 하루에</span>
                    <input type='text' name='time' id='time' placeholder='예)5시간' required value={time} onChange={(event) => setTime(event.target.value)} />
                    <span>시간씩 훈련할 것이다.</span>
                </div>
            </form>
            <div className='btn'>
                <button type='submit' className='big-btn'>
                    나는 며칠 동안 훈련을 해야 1만 시간이 될까?
                </button>
                <img src='pointer.png' alt='' className='pointer' />
            </div>
            <div className='result'>
                <p>
                    <span>당신은</span> <strong>프로그래밍</strong>
                    <span>전문가가 되기 위해서</span>
                </p>
                <p>
                    <span>대략</span>
                    <strong>{day}</strong>
                    <span>일 이상 훈련하셔야 합니다! :)</span>
                </p>
            </div>
            <div className='btn-wrap'>
                <button type='submit' className='primary-btn' onClick={modalOpen}>
                    훈련하러 가기 GO!GO!
                </button>
                <button type='submit' className='secondary-btn'>
                    공유하기
                </button>
            </div>
        </>
    );
}
export default Main;
