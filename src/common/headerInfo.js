import styled from "styled-components";

const Header = styled.header`
    color: red;
`

const HeaderInfo = () => {
    const name = JSON.parse(localStorage.getItem('name'));
    const goal = JSON.parse(localStorage.getItem('goal'));
    const today = new Date();
    const passedDay = today.getTime() - JSON.parse(localStorage.getItem('start'));
    const passed = Math.round(passedDay / (1000 * 60 * 60 * 24)) + 1;

    return (
        <Header>
            {name}님! "{goal}"을 시작한지 {passed}일 째 입니다.
        </Header>
    )
}

export default HeaderInfo;