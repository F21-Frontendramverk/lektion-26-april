const getTodoList = (todos) => {
    return {
        type: 'GET_TODO_LIST',
        payload: todos
    }
}

const addNewTodo = (todo) => {
    return {
        type: 'ADD_NEW_TODO',
        payload: todo
    }
}

export { getTodoList, addNewTodo }