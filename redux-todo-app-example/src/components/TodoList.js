import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

function TodoList() {
    const todos = useSelector((state) => { return state.todos });

    const todoItems = todos.map((todo) => {
        return <TodoItem task={ todo.task } key={ todo.id } />
    });

    return (
        <ul>
            { todoItems }
        </ul>
    )
}

export default TodoList;