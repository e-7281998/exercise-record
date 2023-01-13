import styled from "styled-components";

export const P = styled.p`
    display: none;
    width: 100%;
    border-top: 2px solid white;
    margin: 1rem 0 0 0;
    padding-top: 1rem;
`
export const RecordListUl = styled.ul`
    list-style: none;
    padding: 1rem;
    width: 80%;
    margin: 0 auto;
    max-height: 330px;
    overflow: hidden;
    overflow-y: auto;
    
    li{
        background: white;
        padding: 1rem;
        margin: 0.5rem 1rem;
        position: relative;
        top: 2rem;
        opacity: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-radius: 5px;
        border: 2px solid rgba(214, 230, 242, 0.5);
        background: rgba(214, 230, 242, 0.5);

        :hover{
            border: 2px solid white;
        }

        &.show{
            opacity: 1;
            top: 0;
            transition: all .3s ease-in;
        }
    }
    
    span{
        padding: 0 1rem;
    }
    
    button{
        border:none;
        height: 100%;
        width: 50%;
        background: none;
        font-weight: bold;

        :hover{
            cursor: pointer;
        }

        :last-child:hover{
            color: red;
        }
    }
`