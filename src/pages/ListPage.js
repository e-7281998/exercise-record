import React from "react";
import styled from "styled-components";
import HeaderInfo from "../common/headerInfo";
import ShowExerciseList from "../component/ListPage/showExerciseList";

const ListPage = () => {
    return (
        <>
            <HeaderInfo />
            <nav>
                <a href="/write">기록하기</a>
            </nav>
            <ShowExerciseList />
        </>

    )
}

export default ListPage;