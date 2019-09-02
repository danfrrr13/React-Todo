import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <div>
            <h3 id={props.todo.id} className={props.todo.completed ? 'completed' : null}>{props.todo.task}</h3>
        </div>
    )
}

export default Todo;