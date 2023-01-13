import React from "react";
import HeaderInfo from "../component/common/headerInfo";
import AddExercise from "../component/WritePage/addExercise";
import AddMemo from "../component/WritePage/addMemo";
import { Btn } from "../style/commonStyle/button";
import { Write } from "../style/writePageStyle";

const WritePage = () => {
    return (
        <Write>
            <HeaderInfo />
            <nav>
                <Btn><a href="/list">돌아가기</a></Btn>
            </nav>
            <AddExercise />
            <AddMemo />
        </Write>
    )
}

export default WritePage;