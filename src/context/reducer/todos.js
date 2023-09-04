const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODOS":
            return state = [...state, action.payload]
        case "EDIT_TODOS":
            return state = updateObject(state, action)
        case "REMOVE_TODOS":
            return state = state.filter((i) => i.id !== action.payload.id)
        case "DELETE_ALL":
            return state = []
        default:
            return state
    }
}


function updateObject(array, action) {

    return array.map((item, index) => {
        if (item.id === action.payload.id) {
            return {
                ...item,
                ...action.payload
            }
        }
        return item
    })
}
export default todos