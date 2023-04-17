import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
    water() { return "Redux water" },
    todos
})

export default rootReducer