import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <div key={todo.id} onClick={props.completed} id={todo.id}>
                    <Todo todo={todo} />
                </div>
            ))}
        </div>
    )
}

export default TodoList;