import { useState, useEffect } from "react";
import { Add } from "../../style/addExerciseInfoStyle";
import save from "../common/save";
import { get } from "../../script.js";

const AddExercise = () => {
    const [exerciseList, addExerciseList] = useState(JSON.parse(localStorage.getItem('EXERCISE')) || ['걷기']);
    const [exerciseInput, setExerciseInput] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        get();
    }, [exerciseList])
    //운동 종목 선택 시 값 보이기
    function clickExercise(e) {
        setMsg(() => '')
        document.getElementsByClassName('selectEx')[0].innerText = e.target.innerText;
    }

    //메모 값
    function changeExerciseInput(e) {
        setExerciseInput(() => e.target.value);
    }

    //운동 종목 추가
    function addExercise(e) {
        e.preventDefault();
        // 운동종목 값 존재 여부 확인
        if (exerciseInput.trim() === '') {
            setMsg(() => '빈칸은 운동종목으로 등록할 수 없습니다.');
            // console.log('빈칸은 입력할 수 없습니다.');
            return;
        }
        setMsg(() => '');
        const newAddList = [...exerciseList, exerciseInput];
        addExerciseList(() => newAddList);
        save('EXERCISE', newAddList)
        setExerciseInput(() => '')
    }

    //운동 종목 삭제
    function exerciseRemove(e) {
        const newRemoveList = exerciseList.filter((li, n) => parseInt(e.target.value) !== n);
        //운동 종목이 하나일 경우 삭제불가
        if (newRemoveList.length === 0) {
            alert('운동 종목은 하나 이상 존재해야 합니다.');
            return;
        }
        addExerciseList(() => newRemoveList);
        save('EXERCISE', newRemoveList);
    }

    return (
        <Add>
            <ul>
                {exerciseList.map((list, n) => (
                    <li key={n}>
                        <span onClick={clickExercise}>
                            {list}
                        </span>
                        <button value={n} onClick={exerciseRemove}>X</button>
                    </li>
                ))}
            </ul>
            <form>
                <input type="text" placeholder="복싱"
                    value={exerciseInput} onChange={changeExerciseInput}></input>
                <p>{msg}</p>
                <button onClick={addExercise}>운동종목 추가</button>
            </form>
        </Add>
    )
}

export default AddExercise;