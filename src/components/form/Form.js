import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Form = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const data = useSelector(w => w.todos)
    const dispatch = useDispatch()

    const handleSumbit = (e) => {
        e.preventDefault()
        let newTodo = { name, number, id: new Date().getTime() }
        if (name === '' || number === '') {
            return <></>
        }
        else {
            dispatch({ type: "ADD_TODOS", payload: newTodo })
        }
        setName('')
        setNumber('')
        console.log(data);
    }

    return (
        <form className='container shadow form' action='submit'>
            <input value={name} onChange={(e) => setName(e.target.value)} className='input' type="text" placeholder='Name' required />
            <input value={number} onChange={(e) => setNumber(+e.target.value)} type="number" placeholder='Age' className='input' required />
            <button onClick={handleSumbit} className='btn blue' type='submit' typeof='submit'>Create list</button>
        </form>

    )
}

export default Form
