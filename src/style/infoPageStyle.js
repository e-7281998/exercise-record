import styled from "styled-components";

export const Info = styled.div`
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.8);
    padding: 1.5rem;
`;
export const InfoHeader = styled.header`
    h1{
        margin: 0;
        padding-bottom: 1.5rem;
        font-weight: lighter;
    }
`;
export const InfoMain = styled.main`
    div h3{
        display: inline-block;
        padding: 0 1rem;
        font-weight: lighter;
    }
    input{
        height: 30px;
        width: 200px;
        background: none;
        border: none;
        border-bottom: 2px solid #777;
        padding: 0 0.5rem;
        font-weight: bold;
        font-size: 20px;
        color: blue;
    }
    p{
        color: red;
        font-weight: bold;
        font-weight: lighter;
    }
`