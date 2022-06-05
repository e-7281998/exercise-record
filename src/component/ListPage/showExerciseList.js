import { useState } from 'react';
import save from '../common/save';
import { P, RecordList } from '../../style/showExerciseListStyle';

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
        const check = window.confirm(`${recordList.length - parseInt(e.target.value)}번 기록을 정말 삭제하시겠습니까?`);
        if (check) {
            const newList = recordList.filter((li, n) => n != e.target.value);
            setRecordList(() => newList);
            save('recordList', newList)
        }
    }

    return (
        <ul>
            {recordList.map((list, n) => (
                <li key={n}>
                    <span>{recordList.length - n}</span>
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