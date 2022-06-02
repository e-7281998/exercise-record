import React from "react";

const ListPage = () => {
    //로컬스토리지에서 정보 불러오기
    const name = JSON.parse(localStorage.getItem('name'));
    const goal = JSON.parse(localStorage.getItem('goal'));

    const today = new Date();
    const day = today.getTime() - JSON.parse(localStorage.getItem('start'));
    const passed = Math.round(day / (1000 * 60 * 60 * 24)) + 1;
    const recordList = JSON.parse(localStorage.getItem('recordList')) || [];

    return (
        <>
            <div>
                {name}님! "{goal}"을 시작한지 {passed}일 째 입니다.
                <ul>
                    {recordList.map((list, n) => (
                        <li key={n}>
                            <span>{list.EXERCISE}</span>
                            <span>{list.DAY}</span>
                            <button>메모 펼치기</button>
                            <p>{list.INFO}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default ListPage;