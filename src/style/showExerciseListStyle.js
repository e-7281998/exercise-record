import styled from "styled-components";

export const P = styled.p`
    display: none;
`
export const RecordListUl = styled.ul`
    // background: #ccc;
    list-style: none;
    padding: 1rem;
    li{
        background: white;
        padding: 1rem;
        position: relative;
        top: 2rem;
        opacity: 0;
    }
    li.show{
        opacity: 1;
        top: 0;
        transition: all .3s ease-in;
    }
`