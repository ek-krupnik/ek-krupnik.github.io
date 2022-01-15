import React from 'react';

const toDoList = [
    {
        id: 1,
        title: 'eat',
        done_flg: false
    },
    {
        id: 1,
        title: 'sleep',
        done_flg: true
    },
    {
        id: 1,
        title: 'kiss',
        done_flg: true
    }
]

function ToDoList() {
    return (
        <div>
            {toDoList.map(elem=><p>{elem.title}</p>)}
        </div>
    )
}

export default ToDoList;