import React, { useEffect, useState } from 'react';

const InfoPage = () => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    //이름, 목표 입력 input
    const onChangeName = (e) => {
        setName(() => e.target.value);
    }
    const onChangeGoal = (e) => {
        setGoal(() => e.target.value);
    }

    // //저장하기 클릭 시 로컬스토리지에 이름, 목표 저장
    const onClick = (e) => {
        e.preventDefault();
        if (/[^a-z|가-힣]/i.test(name)) {
            console.log('한글이나 영문만 입력하세요.');
            return;
        }
        if (name === '' || goal === '') {
            console.log('빈 칸을 채워주세요.');
            return;
        }

        name.trim();
        goal.trim();

        localStorage.setItem('name', JSON.stringify(name));
        localStorage.setItem('goal', JSON.stringify(goal));
    }

    //처음 이름, 목표 불러오기
    useEffect(() => {
        const name = JSON.parse(localStorage.getItem('name'));
        const goal = JSON.parse(localStorage.getItem('goal'));
        if (name != null && goal != null) {
            setName(() => name);
            setGoal(() => goal);
        }
    }, []);

    return (
        <>
            <h1>내 정보를 입력하세요!</h1>
            <form>
                <h3>이름</h3>
                <input
                    placeholder='홍길동'
                    value={name}
                    onChange={onChangeName}
                />
                <h3>목표</h3>
                <input
                    placeholder='윗몸일으키기 1일 100회!'
                    value={goal}
                    onChange={onChangeGoal}
                />
                <button
                    type='submit'
                    onClick={onClick}
                >저장하기</button>
            </form>
        </>
    )
}

export default InfoPage;