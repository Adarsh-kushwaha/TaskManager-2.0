export const ToDoReducer = (state, action) => {
    switch (action.type) {
        case "DELETE":
            return {
                ...state,
                addToDo: state.addToDo.filter((task) => task.id !== action.payload)

            }
        case "ADD":
            return {
                ...state,
                addToDo: [action.payload, ...state.addToDo]
            }



        default:
            return state



    }
}