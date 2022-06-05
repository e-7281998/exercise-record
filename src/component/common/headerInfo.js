import { Header } from "../../style/headerInfoStyle";

const HeaderInfo = () => {
    const name = JSON.parse(localStorage.getItem('name'));
    const goal = JSON.parse(localStorage.getItem('goal'));
    const today = new Date();
    const passedDay = today.getTime() - JSON.parse(localStorage.getItem('start'));
    const passed = Math.round(passedDay / (1000 * 60 * 60 * 24)) + 1;

    return (
        <Header>
            {name}의 목표 <span className="goal">{goal}!</span> <span>D+{passed}</span>
        </Header>
    )
}

export default HeaderInfo;