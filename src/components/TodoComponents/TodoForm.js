import React from 'react';

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.submit}>
                <input placeholder='...new todo' onChange={props.changeHandler} value={props.input} />
                <input type='submit' />
                <button onClick={props.filter}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;