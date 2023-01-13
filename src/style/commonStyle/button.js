import styled from "styled-components";

export const Btn = styled.button`
    border: 3px solid transparent;
    background: darkblue;
    margin: 10px 20px;
    border-radius: 10px;
    font-size: 20px;
    color: #fff;

    a {
        font-size: 20px;
        display: block;
        height: 100%;
        padding: 10px 20px;
        color: #fff;
    }

    :hover {
        background: white;
        border: 3px solid darkblue;
        color: darkblue;

        a{
            color: darkblue;
        }
    }

    &.orange{
        background: orange;
        
        :hover{
            border: 3px solid orange;
            background: white;
            color: orange;
            cursor: pointer;
        }
    }

`