import './TodoItem.css';

function TodoItem(props) {
    const { task } = props;

    return (
        <li className='todo-item'>
            <span>{ task }</span>
        </li>
    );
}

export default TodoItem;