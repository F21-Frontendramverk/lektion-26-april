const getTodoList = (todos) => {
    return {
        type: 'GET_TODO_LIST',
        payload: todos
    }
}

const addNewTodo = (todo) => {
    const action = {
        type: 'ADD_NEW_TODO',
        payload: todo
    }

    return action;
}

const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: id
    }
}

export { getTodoList, addNewTodo, removeTodo }