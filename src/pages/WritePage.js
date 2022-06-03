import React from "react";
import HeaderInfo from "../component/common/headerInfo";
import AddExercise from "../component/WritePage/addExercise";
import AddMemo from "../component/WritePage/addMemo";


const WritePage = () => {
    return (
        <>
            <HeaderInfo />
            <nav>
                <a href="/list">기록보기</a>
            </nav>
            <AddExercise />
            <AddMemo />
        </>
    )
}

export default WritePage;