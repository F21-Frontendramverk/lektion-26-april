import './AddTodo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewTodo } from '../actions/todoActions';

function AddTodo() {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    function getInputValue(event) {
        setTodoText(event.target.value);
    }

    function handleClick() {
        console.log(todoText);
        const action = addNewTodo(todoText);
        console.log('handleClick action:', action);
        dispatch(action);
    }

    return (
        <section>
            <input type="text" placeholder="Ange en todo" 
                onKeyUp={ getInputValue } />
            <button onClick={ handleClick }>Lägg till</button>
        </section>
    )
}

export default AddTodo;