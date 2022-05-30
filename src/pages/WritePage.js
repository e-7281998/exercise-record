import React, { useEffect, useState } from "react";



const WritePage = () => {
    const name = JSON.parse(localStorage.getItem('name'));
    const goal = JSON.parse(localStorage.getItem('goal'));
    const today = new Date();
    const day = today.getTime() - JSON.parse(localStorage.getItem('start'));
    const passed = Math.round(day / (1000 * 60 * 60 * 24)) + 1;

    const [exerciseList, addExerciseList] = useState(['걷기']);
    const [exerciseInput, setExerciseInput] = useState('')
    const [selectExercise, setSelectExercise] = useState('운동 종목을 클릭하세요.')

    const addExercise = (e) => {
        e.preventDefault();
        // console.log(exerciseList);
        addExerciseList(() => [...exerciseList, exerciseInput]);
        setExerciseInput(() => '')
    }
    const changeExerciseInput = (e) => {
        setExerciseInput(() => e.target.value);
    }
    const clickExercise = (e) => {
        console.log(e.target.innerHTML);
        setSelectExercise(() => e.target.innerHTML)
    }


    return (
        <>
            <div>
                {name}님! "{goal}"을 시작한지 {passed}일 째 입니다.
                <ul>
                    {exerciseList.map((list, n) => (
                        <li key={n} onClick={clickExercise}>{list}</li>
                    ))}
                </ul>
            </div>
            <form>
                <input type="text" placeholder="복싱"
                    value={exerciseInput} onChange={changeExerciseInput}></input>
                <button onClick={addExercise}>운동종목 추가</button>
            </form>
            <div>
                {selectExercise}
            </div>
        </>
    )
}

export default WritePage;