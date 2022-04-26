import './TodoItem.css';
import { useDispatch } from 'react-redux';

import { removeTodo } from '../actions/todoActions';

function TodoItem(props) {
    const { task, id } = props;
    const dispatch = useDispatch();

    function onClick() {
        console.log('TodoItem:', id);
        const action = removeTodo(id);
        dispatch(action);
    }

    return (
        <li className='todo-item' onClick={ onClick }>
            <span>{ task }</span>
        </li>
    );
}

export default TodoItem;