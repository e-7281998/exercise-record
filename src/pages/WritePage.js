import React, { useEffect, useState } from "react";
import styled from "styled-components";

const exerciseList = [
    '걷기',
    '등산',
    '수영',
    '요가',
    '복싱',
    '줄넘기',
    '자전거',
    '스쿼트',
    '사이클',
    '스쿼시',
    '훌라후프',
    '런닝머신',
    '에어로빅',
    '윗몸일으키기',
    '턱걸이'
].sort();

const Write = styled.div` 
`;

const EXList = styled.ul`
    padding: 0;
    margin: 0 auto;
    width: 80%;
    // background #aaa;
    display: flex;
    overflow-x: scroll; //스크롤바 생성

    // 스크롤바 숨기기
    &::-webkit-scrollbar{
        display: none;
    }
    li {
        min-width: 4rem;
        // background: yellow;
        margin: 0.125rem;
        border: 1px solid #333;
        display: inline-block;

    }
`
const Info = styled.h3`
`;



const WritePage = () => {
    const [memo, setMemo] = useState('');
    const [exercise, setExercise] = useState('운동을 선택하세요.');
    const [addMemo, setAddMemo] = useState([]);
    const [msg, setMsg] = useState('');
    const onClickExercise = (e) => {
        setExercise(() => e.target.innerText);
    }

    //로컬스토리지에서 정보 불러오기
    const name = JSON.parse(localStorage.getItem('name'));
    const goal = JSON.parse(localStorage.getItem('goal'));

    const today = new Date();
    const day = today.getTime() - JSON.parse(localStorage.getItem('start'));
    const passed = Math.round(day / (1000 * 60 * 60 * 24)) + 1;

    //운동 종목 별 로컬에서 값 가져오기
    useEffect(() => {
        setAddMemo(() => JSON.parse(localStorage.getItem(exercise)) || []);
    }, [exercise]);

    //메모 추가하기
    const onAddMemo = (e) => {
        e.preventDefault();
        if (e.target.value.trim() === '') {
            setMsg("메모를 입력해 주세요.");
            return;
        }
        const list = [...addMemo, e.target.value];

        if (list.length > 3) {
            setMsg("운동 종목 당 최대 3개 입력 가능합니다.");
            return;
        }
        setAddMemo(() => list);
        localStorage.setItem(exercise, JSON.stringify(list));
        setMemo(() => '');
    }
    const onChange = (e) => {
        setMemo(() => e.target.value);
    }

    return (
        <Write>
            <Info>
                {name}님 "{goal}"를 시작한지 {passed}일차 입니다!
            </Info>
            <EXList>
                {exerciseList.map((list, n) =>
                    <li
                        key={n}
                        onClick={onClickExercise}
                        value={list}
                    >
                        {list}
                    </li>)
                }
            </EXList>
            <span>{exercise}</span>
            {exercise !== "운동을 선택하세요." ?
                < form >
                    <input
                        placeholder="발에 힘 더 빼기"
                        value={memo}
                        onChange={onChange} />
                    <button
                        type="submit"
                        onClick={onAddMemo}
                        value={memo}
                    >
                        저장
                    </button>
                    <span>{msg}</span>
                </form>
                : ''}

        </Write >
    )
}

export default WritePage;

