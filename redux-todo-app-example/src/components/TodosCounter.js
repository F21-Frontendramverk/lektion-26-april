import { useSelector } from 'react-redux';

function TodosCounter() {
    const amount = useSelector((state) => { return state.todos.length });

    return (
        <span>Antal todos: { amount }</span>
    )
}

export default TodosCounter;