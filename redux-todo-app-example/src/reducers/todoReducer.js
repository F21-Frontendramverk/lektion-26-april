const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    console.log('State:', state);
    console.log('action', action);
    switch(action.type) {
        case 'GET_TODO_LIST':
            return {
                ...state,
                todos: action.payload
            }
        case 'ADD_NEW_TODO':
            // const copyTodoArray = [...state.todos];
            // copyTodoArray.push({ id: state.todos.length, task: action.payload });

            // return {
            //     ...state,
            //     todos: copyTodoArray
            // }

            // Ovan kod gör samma sak som nedan
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: state.todos.length, task: action.payload }
                ]
            }
        case 'REMOVE_TODO':
            const copyTodoArray = [...state.todos];
            const newTodoArray = copyTodoArray.filter((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }
            });

            console.log('newTodoArray:', newTodoArray);
            return {
                ...state,
                todos: newTodoArray
            }
        default:
            return state
    }
}

export default todoReducer;