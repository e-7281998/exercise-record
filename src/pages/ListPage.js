import React from "react";
import HeaderInfo from "../component/common/headerInfo"
import ShowExerciseList from "../component/ListPage/showExerciseList";
import { List } from "../style/listPageStyle";
import { showList } from "../script";
import { Btn } from "../style/commonStyle/button";

const ListPage = () => {
    showList();
    return (
        <List>
            <HeaderInfo />
            <nav>
                <Btn><a href="/write">기록하기</a></Btn>
                <Btn><a href="/modify_info">정보수정</a></Btn>
            </nav>
            <ShowExerciseList />
        </List>

    )
}

export default ListPage;