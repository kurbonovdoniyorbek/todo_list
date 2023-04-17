import React from 'react'
import { useSelector } from 'react-redux'

const Info = () => {
    const number = useSelector(w => w.todos)
    return (
        <div className='container shadow'>
            <h2>list count: {number.length}</h2>
        </div>
    )
}

export default Info
