import React from 'react'
import TodoItem from '../TodoItem'
import './style.scss';

const TodoList = ({ todos, removeTodo, editTodo }) => {
    // GetRequestHooks()
    return (
        <div>
            <ul>
                {todos.map((todo, i) => {
                    return (
                       <TodoItem key={i} todo={todo} removeTodo={removeTodo} editTodo={editTodo}/>
                    );
                })}
            </ul>
        </div>
    );
};


export default TodoList;
