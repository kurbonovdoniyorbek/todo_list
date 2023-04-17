import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Content = () => {
    const todos = useSelector(s => s.todos)
    const dispatch = useDispatch()
    return (
        <div className='container shadow'>
            {
                !todos.length && <h2>Empty</h2>
            }
            {
                todos?.map((todo) =>
                    <div className="todo" key={todo.id}>
                        <div>
                            <p>Name: <b>{todo.name}</b></p>
                            <p>Age: <b>{todo.number}</b></p>
                        </div>
                        <div className='buttons'>
                            <button className="btn blue">Edit</button>
                            <button className="btn red" onClick={() =>
                                dispatch({ type: "REMOVE_TODOS", payload: todo })
                            }>Delete</button>
                            <button className='btn red' id='delete_button'
                                onClick={() => dispatch({ type: "DELETE_ALL", payload: todo })}
                            >Delete All</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Content
