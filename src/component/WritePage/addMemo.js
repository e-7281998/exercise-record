import { useState } from "react";
import save from "../../common/save";

const AddMemo = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hanDay = ['일', '월', '화', '수', '목', '금', '토']
    const day = hanDay[today.getDay()];

    const [exerciseInfo, setExerciseInfo] = useState('')
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem('recordList')) || [])

    //메모 추가
    function addRecord(e) {
        e.preventDefault();
        const newRecord = [
            {
                DAY: `${year}.${month}.${date}.${day}`,
                EXERCISE: document.getElementsByClassName('selectEx')[0].innerText,
                INFO: exerciseInfo
            },
            ...record
        ]
        setRecord(() => newRecord);
        save('recordList', newRecord);
        setExerciseInfo(() => '')
    }
    //운동 종목 추가 입력 값
    function changeExerciseInfo(e) {
        setExerciseInfo(() => e.target.value);
    }
    return (
        <div>
            <p className="selectEx">운동종목을 선택하세요</p>
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