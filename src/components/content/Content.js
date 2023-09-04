import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Content = () => {
    const [editData, setEditData] = React.useState(null)
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
                            <button className="btn blue"
                                onClick={() => {
                                    setEditData({
                                        name: todo.name,
                                        number: todo.number
                                    })
                                }}
                            >Edit</button>
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
            <EditComponents editData={editData} setEditData={setEditData} />
        </div>
    )
}


const EditComponents = ({ editData, setEditData }) => {
    const [name, setName] = React.useState("")
    const [number, setNumber] = React.useState("")
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (editData) {
            setName(editData?.name)
            setNumber(editData?.number)
        }
    }, [editData])
    return (
        <div>
            {
                editData && <div
                    onClick={() => {
                        setEditData(null)
                    }}
                    className='edit_component edit_compoent_shadow'>

                </div>
            }

            {
                editData && <div className='edit_container'>
                    <p>
                        Edit
                    </p>
                    <input value={name} onChange={(e) => setName(e.target.value)} className='input' type="text" placeholder='Name' />
                    <input value={number} onChange={(e) => setNumber(e.target.value)} className='input' type="number" placeholder='Number' />
                    <button className='save_edit' onClick={() => {
                        const editTodos = { name, number }
                        dispatch({ type: "EDIT_TODOS", payload: editTodos })
                        setEditData(null)
                    }}>
                        Save
                    </button>
                </div>
            }
        </div>
    )
}

export default Content
