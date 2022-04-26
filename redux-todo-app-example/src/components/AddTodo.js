import './AddTodo.css';

function AddTodo(props) {
    let todoText = '';
    const { addTodo } = props;

    function getInputValue(event) {
        todoText = event.target.value;
    }

    function handleClick() {
        console.log(todoText);
        addTodo(todoText);
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