import React, { useEffect, useState } from "react";


const WritePage = () => {
    const name = JSON.parse(localStorage.getItem('name'));
    const goal = JSON.parse(localStorage.getItem('goal'));
    const today = new Date();
    const passedDay = today.getTime() - JSON.parse(localStorage.getItem('start'));
    const passed = Math.round(passedDay / (1000 * 60 * 60 * 24)) + 1;
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const hanDay = ['일', '월', '화', '수', '목', '금', '토']
    const day = hanDay[today.getDay()];
    // console.log(year, month, date, day)

    const [exerciseList, addExerciseList] = useState(JSON.parse(localStorage.getItem('EXERCISE')) || ['걷기']);
    const [exerciseInput, setExerciseInput] = useState('')
    const [selectExercise, setSelectExercise] = useState('운동 종목을 클릭하세요.')
    const [exerciseInfo, setExerciseInfo] = useState('')
    const [record, setRecord] = useState(JSON.parse(localStorage.getItem('recordList')) || [])

    //운동 종목 추가
    const addExercise = (e) => {
        e.preventDefault();
        const newAddList = [...exerciseList, exerciseInput];
        addExerciseList(() => newAddList);
        save('EXERCISE', newAddList)
        setExerciseInput(() => '')
    }
    //메모 값
    const changeExerciseInput = (e) => {
        setExerciseInput(() => e.target.value);
    }
    //운동 종목 선택 시 값 보이기
    const clickExercise = (e) => {
        setSelectExercise(() => e.target.innerText)
    }
    //메모 추가
    const addRecord = (e) => {
        e.preventDefault();
        const newRecord = [
            ...record,
            {
                DAY: `${year}.${month}.${date}.${day}`,
                EXERCISE: selectExercise,
                INFO: exerciseInfo
            }
        ]
        setRecord(() => newRecord);
        save('recordList', newRecord);
        setExerciseInfo(() => '')
        // localStorage.setItem('recordList', JSON.stringify(record));
    }
    //로컬에 저장
    const save = (name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
    }
    //운동 종목 추가 입력 값
    const changeExerciseInfo = (e) => {
        setExerciseInfo(() => e.target.value);
    }
    //운동 종목 삭제
    const exerciseRemove = (e) => {
        const newRemoveList = exerciseList.filter((li, n) => parseInt(e.target.value) !== n);
        //운동 종목이 하나일 경우 삭제불가
        if (newRemoveList.length === 0) {
            console.log('하나남음');
            return;
        }
        addExerciseList(() => newRemoveList);
        save('EXERCISE', newRemoveList);

    }

    return (
        <>
            <div>
                {name}님! "{goal}"을 시작한지 {passed}일 째 입니다.
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
            </div>
            <form>
                <input type="text" placeholder="복싱"
                    value={exerciseInput} onChange={changeExerciseInput}></input>
                <button onClick={addExercise}>운동종목 추가</button>
            </form>
            <div>
                <p>{selectExercise}</p>
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
        </>
    )
}

export default WritePage;