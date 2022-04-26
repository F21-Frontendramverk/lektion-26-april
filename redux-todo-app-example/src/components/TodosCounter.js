function TodosCounter(props) {
    const { amount } = props;

    return (
        <span>Antal todos: { amount }</span>
    )
}

export default TodosCounter;