const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODOS":
            return state = [...state, action.payload]
        case "REMOVE_TODOS":
            return state = state.filter((i) => i.id !== action.payload.id)
        case "DELETE_ALL":
            return state = []
        default:
            return state
    }
}

export default todos