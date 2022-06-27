import { useState } from 'react';
import save from '../common/save';
import { P, RecordListUl } from '../../style/showExerciseListStyle';

const ShowExerciseList = () => {
    const [recordList, setRecordList] = useState(JSON.parse(localStorage.getItem('recordList')) || []);

    //메모 보여주기 - 버튼 클릭시
    function showMemo(e) {
        const memo = document.getElementsByTagName("P");
        const styleState = window.getComputedStyle(memo[e.target.value]).getPropertyValue('display');
        if (styleState == 'none') {
            e.target.parentNode.parentNode.style = ' background: rgb(214, 230, 242); border: 2px solid white;';
            memo[e.target.value].style.display = 'block';
            e.target.innerText = '▲';
        } else {
            e.target.parentNode.parentNode.style = ' background: rgba(214, 230, 242, 0.5);';
            memo[e.target.value].style.display = 'none';
            e.target.innerText = '▼';

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
        <RecordListUl>
            {recordList.map((list, n) => (
                <li key={n}>
                    <span>{recordList.length - n}</span>
                    <span>{list.EXERCISE}</span>
                    <span>{list.DAY}</span>
                    <div>
                        <button value={n} onClick={showMemo}>▼</button>
                        <button onClick={removeList} value={n}>✕</button>
                    </div>
                    <P>{list.INFO}</P>
                </li>
            ))}
        </RecordListUl>
    )
}

export default ShowExerciseList;