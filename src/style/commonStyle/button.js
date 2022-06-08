import styled from "styled-components";

export const Btn = styled.button`
    margin: 0.5rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all .25s ease-out;
    font-weight: bold;
    background: #FFD24C;
    border: 2px solid orange;
    font-weight: lighter;
    color: #333;

    a{
        display: block;
        padding: 0.5rem 1rem;
    }

    :hover{
    border: 2px solid orange;
    background: white;
    transition: all .25s ease-in;
    }
`