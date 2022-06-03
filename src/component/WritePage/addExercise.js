import { useState } from "react";
import save from "../common/save";

const AddExercise = () => {
    const [exerciseList, addExerciseList] = useState(JSON.parse(localStorage.getItem('EXERCISE')) || ['걷기']);
    const [exerciseInput, setExerciseInput] = useState('')

    //운동 종목 선택 시 값 보이기
    function clickExercise(e) {
        document.getElementsByClassName('selectEx')[0].innerText = e.target.innerText;
    }

    //메모 값
    function changeExerciseInput(e) {
        setExerciseInput(() => e.target.value);
    }

    //운동 종목 추가
    function addExercise(e) {
        e.preventDefault();
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
        <>
            <ul>
                {exerciseList.map((list, n) => (
                    <li key={n}>
                        <p onClick={clickExercise}>
                            {list}
                        </p>
                        <button value={n} onClick={exerciseRemove}>X</button>
                    </li>
                ))}
            </ul>
            <form>
                <input type="text" placeholder="복싱"
                    value={exerciseInput} onChange={changeExerciseInput}></input>
                <button onClick={addExercise}>운동종목 추가</button>
            </form>
        </>
    )
}

export default AddExercise;