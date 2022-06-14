import styled from "styled-components";

export const Add = styled.main`
    background: yellow;
    ul{
        width: 80%;
        margin: 0 auto;
        list-style:  none;
        // overflow-x: scroll;
        // white-space: nowrap;
    
        // 스크롤바 숨기기
        // &::-webkit-scrollbar{
        //     display: none;
        // }
    }
    ul.many {
        overflow-x: scroll;
        white-space: nowrap;
        color: red;
    }
    
    li{
        display: inline-block;
        padding: 0.5rem;
        margin-right :0.5rem;
        background: white;
    }
    li > button {
        background: none;
        border: none;

        :hover{
            color: red;
            cursor: pointer;
        }
    }
    span{
        margin-right: 0.3rem;
    }
`;