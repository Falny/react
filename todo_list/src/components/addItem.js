import React from 'react'
import {v4 as uuidv4} from 'uuid'

export const AddItem = (props) => {

    const onChangeTextInput = (event) => {
        props.setText(event.target.value)
    }

    const onClickClearInput = () => {
        props.setText('')
    }

    const handleSubmit = (event) => {   
        event.preventDefault()

        if (props.text) {
            props.setText('')
            const newTask = {id: uuidv4(), task: props.text, isEdit: false}
            const updateTask = [...props.task, newTask]
            props.setTask(updateTask)
            localStorage.setItem('value', JSON.stringify(updateTask))
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className='add'>
                <div className='add_input_btn'>
                    <input value={props.text} onChange={onChangeTextInput} className='add_input' type='text' placeholder='Task...'/>
                    <button onClick={onClickClearInput} type="button" className="form-field__clear">&times;</button>
                </div>
                
                <button type='submit' className={`add_btn ${props.mainBtn}`}>Add</button>
            </div>
        </form>
    )
}