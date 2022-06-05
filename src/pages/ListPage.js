import React from "react";
import HeaderInfo from "../component/common/headerInfo"
import ShowExerciseList from "../component/ListPage/showExerciseList";
import { List, Nav } from "../style/listPageStyle";

const ListPage = () => {
    return (
        <List>
            <HeaderInfo />
            <Nav>
                <a href="/write">기록하기</a>
                <a href="/modify_info">정보수정</a>
            </Nav>
            <ShowExerciseList />
        </List>

    )
}

export default ListPage;