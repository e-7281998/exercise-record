import { useState, useEffect } from "react";
import { Add } from "../../style/addExerciseInfoStyle";
import save from "../common/save";
import { get } from "../../script.js";
import { Btn } from "../../style/commonStyle/button";

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

        //자식 노드 개수를 통해 li인지 li>span인지 구분
        if (e.target.childNodes.length == 1) { // li > span 클릭시 
            document.getElementsByClassName('selectEx')[0].innerText = e.target.innerText;
        } else { //li 클릭시
            document.getElementsByClassName('selectEx')[0].innerText = e.target.firstChild.innerText;
        }
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
        //버블링 막기 :clickExercise 막기
        e.stopPropagation();

        //이미 선택한 종목일 경우 삭제불가
        if (document.getElementsByClassName('selectEx')[0].innerText === e.target.previousSibling.innerText) {
            alert('이미 선택된 운종 종목은 삭제할 수 없습니다.');
            return;
        }

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
                    <li key={n} onClick={clickExercise}>
                        <span >
                            {list}
                        </span>
                        <button value={n} onClick={exerciseRemove}>X</button>
                    </li>
                ))}
            </ul>
            <form>
                <div>
                    <input type="text" placeholder="복싱"
                        value={exerciseInput} onChange={changeExerciseInput}></input>
                    <Btn className="orange" onClick={addExercise}>운동종목 추가</Btn>
                </div>
                <p>{msg}</p>
            </form>
        </Add>
    )
}

export default AddExercise;