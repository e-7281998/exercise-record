import { goalColorChange } from "../../script";
import { Header } from "../../style/headerInfoStyle";

const HeaderInfo = () => {
    goalColorChange('start');

    const name = JSON.parse(localStorage.getItem('name'));
    const goal = JSON.parse(localStorage.getItem('goal'));
    const today = new Date();
    const passedDay = today.getTime() - JSON.parse(localStorage.getItem('start'));
    const passed = Math.round(passedDay / (1000 * 60 * 60 * 24)) + 1;

    return (
        <Header>
            {name}의 목표 <span className="goal">{goal}!</span> <span>{passed}일째!</span>
        </Header>
    )
}

export default HeaderInfo;