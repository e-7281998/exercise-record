import mainImg from './img/운동_메인.jpg';

const body = document.getElementsByTagName('body');
export const windowH = window.innerHeight;
const goal = document.getElementsByClassName('goal');
const ExerciseList = document.getElementsByTagName('li');

body[0].style = `
    width: 100%; 
    height: ${windowH}px; 
    background-image: url(${mainImg}); 
    background-position: center;
     background-size: cover; 
     background-repeat: no-repeat;
     text-align: center;
`;

const pathName = window.location.pathname;

//목표 색상 바꾸기
const GoalColor = setInterval(function () {
    var goalColor = goal[0].style.color;
    goalColor === 'rgb(51, 51, 51)' ? goal[0].style = 'color: rgb(255, 0, 0);' : goal[0].style = 'color: rgb(51, 51, 51);';
}, 1000);

export function goalColorChange(value) {
    switch (value) {
        case 'start':
            GoalColor:
            break;
        case 'stop':
            clearInterval(GoalColor);
            break;
    }
};

//기록 하나씩 보여주기
export function showList() {
    var i = 0;
    const showListInverval = setInterval(function () {
        if (i < ExerciseList.length) {
            ExerciseList[i].classList.add('show');
            i++;
        }
        else
            clearInterval(showListInverval);
    }, 500);
}
