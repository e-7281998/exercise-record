import { useState } from 'react';
import styled from "styled-components";
import save from '../../common/save';

const P = styled.p`
    display: none;
`
const ShowExerciseList = () => {
    const [recordList, setRecordList] = useState(JSON.parse(localStorage.getItem('recordList')) || []);

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

    function removeList(e) {
        const newList = recordList.filter((li, n) => n != e.target.value);
        // console.log(newList)
        setRecordList(() => newList);
        save('recordList', newList)
    }

    return (
        <ul>
            {recordList.map((list, n) => (
                <li key={n}>
                    <span>{list.EXERCISE}</span>
                    <span>{list.DAY}</span>
                    <button value={n} onClick={showMemo}>메모 펼치기</button>
                    <button onClick={removeList} value={n}>삭제하기</button>
                    <P>{list.INFO}</P>
                </li>
            ))}
        </ul>
    )
}

export default ShowExerciseList;