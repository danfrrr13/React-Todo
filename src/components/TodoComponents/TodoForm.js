import React, { useState } from 'react';

const TodoForm = props => {
    const [input, setInput] = useState('');
    const changeHandler = e => {
        setInput(e.target.value);
    }
    const resetInput = () => {
        setInput('');
    }
    return (
        <div>
            <form onSubmit={e => {
                props.submit(e, input);
                resetInput();
            }}>
                <input placeholder='...new todo' onChange={changeHandler} value={input} />
                <input type='submit' />
                <button onClick={props.filter}>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;