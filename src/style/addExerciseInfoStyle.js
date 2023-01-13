import styled from "styled-components";

export const Add = styled.main`
    ul {
        width: 80%;
        margin: 0 auto;
        overflow-x:auto;
        // overflow-x:scroll;
        white-space: nowrap;
        
        li {
            display: inline-block;
            padding: 10px;
            background: white;
            margin: 10px;
            border-radius: 10px;
            border: 2px solid transparent;
            color: #aaa;

            :hover{
                cursor: pointer;
                color: #333;
            }

            button {
                background: none;
                border: none;
                margin-left: 5px;
                color: #ccc;

                :hover {
                    color: red;
                    cursor: pointer;
                }
            }
        }
    }

    form{
        margin-top: 10px;
        
        input {
            font-size: 20px;
            padding: 5px;
            margin-right: 20px;
        }

        p {
            color: darkred;
            font-size: 20px;
            margin: 0;
            padding: 0 15px;
        }
        
        button {
            padding: 10px 20px;
        }
    }
`;