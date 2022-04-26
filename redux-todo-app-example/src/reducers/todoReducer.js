const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
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

        default:
            return state
    }
}

export default todoReducer;