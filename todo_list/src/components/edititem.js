import React from 'react'

export const EditItem = (props) => {
    const [value, setValue] = React.useState(props.text)


    const handleSubmit = (event) => {
        event.preventDefault()

        props.onClickEditItem(value, props.task.id)
    }

    const onChangeEdit = (event) => {
        setValue(event.target.value)
    }

    
    return (
        <form className='add_edit' onSubmit={handleSubmit}>
            <input className='edit_input' type='text' value={value} onChange={onChangeEdit}/>
            <button className={`edit_item ${props.colorBtn}`} type='submit'>Save</button>
        </form>
    )
    

}