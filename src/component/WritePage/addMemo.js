import { useState } from "react";
import save from "../common/save";

const AddMemo = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hanDay = ['일', '월', '화', '수', '목', '금', '토']
    const day = hanDay[today.getDay()];
    const selectEx = '운동종목을 선택하세요';

    const [exerciseInfo, setExerciseInfo] = useState('')
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem('recordList')) || [])

    //메모 추가
    function addRecord(e) {
        e.preventDefault();
        const selectedEx = document.getElementsByClassName('selectEx')[0].innerText;
        const exerciseInfoTrim = exerciseInfo.trim();
        //운동종목 선택 여부 
        if (selectEx == selectedEx) {
            alert('운동종목을 선택하세요.');
            return;
        }
        //기록 칸 공백 여부
        if (exerciseInfoTrim == "") {
            alert('관련 정보를 기록하세요.');
            return;
        }
        const newRecord = [
            {
                DAY: `${year}.${month}.${date}.${day}`,
                EXERCISE: selectedEx,
                INFO: exerciseInfoTrim
            },
            ...record
        ]
        setRecord(() => newRecord);
        save('recordList', newRecord);
        setExerciseInfo(() => '');
    }
    //운동 종목 추가 입력 값
    function changeExerciseInfo(e) {
        setExerciseInfo(() => e.target.value);
    }
    return (
        <div>
            <p className="selectEx">{selectEx}</p>
            <form>
                <textarea
                    placeholder='관련 정보를 기록하세요'
                    type="text" cols="30" rows="10"
                    onChange={changeExerciseInfo}
                    value={exerciseInfo}>
                </textarea>
                <button type="submit"
                    onClick={addRecord}>등록</button>
            </form>
        </div>
    )
}

export default AddMemo;