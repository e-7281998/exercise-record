import React from "react";
import HeaderInfo from "../component/common/headerInfo";
import AddExercise from "../component/WritePage/addExercise";
import AddMemo from "../component/WritePage/addMemo";
import { Btn } from "../style/commonStyle/button";

const WritePage = () => {
    return (
        <>
            <HeaderInfo />
            <nav>
                <Btn><a href="/list">기록보기</a></Btn>
            </nav>
            <AddExercise />
            <AddMemo />
        </>
    )
}

export default WritePage;