import React from "react";
import styled from "styled-components";
import HeaderInfo from "../component/common/headerInfo"
import ShowExerciseList from "../component/ListPage/showExerciseList";

const ListPage = () => {
    return (
        <>
            <HeaderInfo />
            <nav>
                <a href="/write">기록하기</a>
                <a href="/modify_info">정보수정</a>
            </nav>
            <ShowExerciseList />
        </>

    )
}

export default ListPage;