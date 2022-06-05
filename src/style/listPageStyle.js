import styled from "styled-components";
import { windowH } from "../script";


export const List = styled.div`
    width: 100%;
    height: ${windowH}px;
    background: rgba(146, 180, 236, 0.7);
`

export const Nav = styled.nav`
    a{
        display: inline-block;
        padding: 0.5rem 1rem;
        margin: 0.5rem;
        background: #FFD24C;
        border: 2px solid orange;
        box-sizing: border-box;
        border-radius: 5px;
    }
`