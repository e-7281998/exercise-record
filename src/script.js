import mainImg from './img/운동_메인.jpg';

const body = document.getElementsByTagName('body');
export const windowH = window.innerHeight;
const goal = document.getElementsByClassName('goal');

body[0].style = `
    width: 100%; 
    height: ${windowH}px; 
    background-image: url(${mainImg}); 
    background-position: center;
     background-size: cover; 
     background-repeat: no-repeat;
     text-align: center;
`;

//목표 색상 바꾸기
function goalColorChange() {
    setInterval(function () {
        var goalColor = goal[0].style.color;
        goalColor === 'rgb(51, 51, 51)' ? goal[0].style = 'color: rgb(255, 0, 0);' : goal[0].style = 'color: rgb(51, 51, 51);';
    }, 1000);
};
goalColorChange();