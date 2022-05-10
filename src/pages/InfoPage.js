import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    h1{
        text-align: center;
    }
`;

const InfoForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    span {
        color: red;
        font-weight: bold;
        margin: 1.5rem 0;
    }
    button{
        padding: 0.5rem 1rem;
        font-size: 1rem;
        &:hover{
            cursor: pointer;
        }
    }
`;

const InfoBox = styled.div`
    // width: 100%;
    display: flex;
    justify-content: center;
    h3 {
        display: inline-block;
        padding: 0.5rem;
    }
    input {
        border:  none;
        border-bottom: 2px solid #ccc;
        outline: none;
        font-size: 1.125rem;
        padding: 0 1rem;
        margin: 1.125rem;
        max-width: 300px;
    }
`;

const now = () => {
    const now = new Date();
    localStorage.setItem('start', JSON.stringify(now.getTime()));
    const start = JSON.parse(localStorage.getItem('start'));
    //시작한지 n일 계산
    // const today = new Date();
    // const day = today.getTime() - start;
    // const passed = Math.round(day / (1000 * 60 * 60 * 24));
    // console.log(passed);
}

const InfoPage = () => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    //정보가 이미 있으면 /list 로 이동
    useEffect(() => {
        if (localStorage.getItem("name") !== null)
            navigate('/list');
        return;
    }, []);

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
        if (name === '' || goal === '') {
            setMsg(() => '빈 칸을 모두 채워주세요.');
            return;
        }
        if (/[^a-z|가-힣]/i.test(name)) {
            setMsg(() => '이름은 한글 또는 영문만 입력하세요.');
            return;
        }
        if (goal.length > 20 || name.length > 20) {
            setMsg(() => '20자 이내로 작성해주세요.')
            return;
        }
        setMsg(() => '');
        localStorage.setItem('name', JSON.stringify(name.trim()));
        localStorage.setItem('goal', JSON.stringify(goal.trim()));
        now();
        navigate('/list');
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
        <Info>
            <h1>정보를 입력하세요.</h1>
            <InfoForm>
                <InfoBox>
                    <h3>이름</h3>
                    <input
                        placeholder='홍길동'
                        value={name}
                        onChange={onChangeName}
                    />
                </InfoBox>
                <InfoBox>
                    <h3>목표</h3>
                    <input
                        placeholder='윗몸일으키기 1일 100회!'
                        value={goal}
                        onChange={onChangeGoal}
                    />
                </InfoBox>
                <span>{msg}</span>
                <button
                    type='submit'
                    onClick={onClick}
                >저장하기</button>
            </InfoForm>
        </Info>
    )
}

export default InfoPage;