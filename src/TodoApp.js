import { useState } from 'react';

export default function TodoApp() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const onChange = (e) => {
        setTodo(e.target.value);
    };

    // Add Todo 버튼 누르면,
    // form 이 가지고 있는 이벤트 막아주고,
    // todo 값을 console에 찍는다.
    const onSubmit = (e) => {
        e.preventDefault();
        if (todo === '') { return; }
        setTodoList(preVal => [ todo, ...preVal]);
        console.log(todo);
        setTodo("");
    };

    // Add Todo 버튼 누르면,
    // input 값 없으면 아무일도 안하고,
    // input 값 있으면 todoList 앞 추가하고,
    // setTodoList, 콜백함수 이용하여 해결한다.
    // todoList 새로운 배열 할당. hint, [0, ...arr];



    return (
        <div>
            <h1>My Todo List</h1>
            <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Write your to do..."
                value={todo}
                onChange={onChange}
            />
            <button>Add To do</button>
            </form>
            <ul>
                {todoList.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
            <ul>
                {todoList.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
            <ul>
                {todoList}
            </ul>
            <ul>
                {todoList.map((item, idx) => {
                    return (<div key={idx}>{item}</div>)
                })}
            </ul>
        </div>
    );
}