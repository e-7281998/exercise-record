import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import mainImg from '../img/운동_메인.jpg';

const body = document.getElementsByTagName('body');
console.log(window.innerWidth);
body[0].style = `
    width: 100%; 
    height: ${window.innerHeight}px; 
    background-image: url(${mainImg}); 
    background-position: center;
     background-size: cover; 
     background-repeat: no-repeat;
     text-align: center;
`
const Info = styled.div`
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.8);
    padding: 1.5rem;
`;
const InfoHeader = styled.header`
    h1{
        margin: 0;
        padding-bottom: 1.5rem;
        font-weight: lighter;
    }
`;
const InfoMain = styled.main`
    div h3{
        display: inline-block;
        padding: 0 1rem;
        font-weight: lighter;
    }
    input{
        height: 30px;
        background: none;
        border: none;
        border-bottom: 2px solid #777;
        padding: 0 0.5rem;
        font-weight: bold;
        font-size: 1rem;
        color: blue;
    }
    p{
        color: red;
        font-weight: bold;
        font-weight: lighter;
    }
    button{
        padding: 0.5rem 1rem;
        margin: 0.5rem;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: all .25s ease-out;
        font-weight: bold;
        background: #FFD24C;
        border: 2px solid orange;
        font-weight: lighter;
        color: #333;
    }
    button:hover{
        border: 2px solid #FFD24C;
        background: white;
        transition: all .25s ease-in;
    }

`;

function now() {
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
    const path = window.location.pathname;

    //path 확인 후 초기정보 입력인지 , 정보 수정인지 판단
    function checkPath() {
        if (path == '/modify_info')
            return false;
        else
            return true;
    }

    //정보가 이미 있으면 /list 로 이동
    useEffect(() => {
        if (localStorage.getItem("name") !== null && checkPath())
            navigate('/list');
        return;
    }, []);

    //이름, 목표 입력 input
    function onChangeName(e) {
        setName(() => e.target.value);
    }
    function onChangeGoal(e) {
        setGoal(() => e.target.value);
    }

    // //저장하기 클릭 시 로컬스토리지에 이름, 목표 저장
    function onClick(e) {
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
        if (checkPath()) {  //처음에만 날짜 같이 저장
            now();
        }
        navigate('/list');
    }
    //초기화
    function resetAll() {
        const checkReset = window.confirm("모든 정보가 사라집니다. 정말 초기화 하시겠습니까?");
        if (checkReset) {
            localStorage.clear();
            navigate('/');
            setName(() => '');
            setGoal(() => '')
        }
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
            <InfoHeader>
                <h1>정보를 입력하세요.</h1>
            </InfoHeader>
            <InfoMain>
                <div>
                    <h3>이름</h3>
                    <input
                        placeholder='홍길동'
                        value={name}
                        onChange={onChangeName}
                    />
                </div>
                <div>
                    <h3>목표</h3>
                    <input
                        placeholder='윗몸일으키기 1일 100회!'
                        value={goal}
                        onChange={onChangeGoal}
                    />
                </div>
                <p>{msg}</p>
                <div className='btn'>
                    <button
                        type='submit'
                        onClick={onClick}
                    >{checkPath() ? '저장하기' : '수정하기'}
                    </button>
                    {!checkPath() ?
                        <>
                            <button onClick={() => navigate('/list')}>돌아가기</button>
                            <button onClick={resetAll}>초기화하기</button>
                        </>
                        : ''}
                </div>
            </InfoMain>
        </Info >
    )
}

export default InfoPage;