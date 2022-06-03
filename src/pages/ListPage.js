import React from "react";
import styled from "styled-components";

const P = styled.p`
    display: none;
    `

const ListPage = () => {
    //로컬스토리지에서 정보 불러오기
    const name = JSON.parse(localStorage.getItem('name'));
    const goal = JSON.parse(localStorage.getItem('goal'));

    const today = new Date();
    const day = today.getTime() - JSON.parse(localStorage.getItem('start'));
    const passed = Math.round(day / (1000 * 60 * 60 * 24)) + 1;
    const recordList = JSON.parse(localStorage.getItem('recordList')).reverse() || [];

    //메모 보여주기 - 버튼 클릭시
    function showMemo(e) {
        const memo = document.getElementsByTagName("P");
        const styleState = window.getComputedStyle(memo[e.target.value]).getPropertyValue('display');
        if (styleState == 'none') {
            memo[e.target.value].style.display = 'block';
        } else {
            memo[e.target.value].style.display = 'none';
        }
    }

    return (
        <>
            <div>
                {name}님! "{goal}"을 시작한지 {passed}일 째 입니다.
            </div>
            <div>
                <a href="/write">기록하기</a>
            </div>
            <ul>
                {recordList.map((list, n) => (
                    <li key={n}>
                        <span>{list.EXERCISE}</span>
                        <span>{list.DAY}</span>
                        <button value={n} onClick={showMemo}>메모 펼치기</button>
                        <P>{list.INFO}</P>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default ListPage;