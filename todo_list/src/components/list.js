import React from 'react'
import { EditItem } from './edititem'
import { AddItem } from './addItem'
import { ChangeBack } from './changeBack'

export const List = () => {
    const [task, setTask] = React.useState(() => {
        const getItem = localStorage.getItem('value');
        const parseItem = JSON.parse(getItem)
        return parseItem !== undefined ? parseItem : []
    }) //массив с делами и локал сторедж

    const [text, setText] = React.useState('') // отслеживаю что пишут в делах импуте
    const [colorBack, setColor] = React.useState('') // для смены фона
    const [colorBtn, setColorBtn] = React.useState('') //для смены кнопок
    const [mainBtn, setMainBtn] = React.useState('') // для кнопки добавить с тенью


    // local storage для фона и кнопок 

    React.useEffect(() => {
        const backStor = localStorage.getItem('background')
        const btnStore = localStorage.getItem('button')
        const btnMainStore = localStorage.getItem('buttonMain')

        if (backStor){
            setColor(backStor)
        }

        if (btnStore) {
            setColorBtn(btnStore)
        }

        if (btnMainStore) {
            setMainBtn(btnMainStore)
        }

    }, [])

    const onClickDeleteItem = (index) => {      // удаляет элемент
        setTask(task.filter((t) => t.id != index))
    }

    const onClickEditItem = (value, index) => {    // редактирует элемент
        const edit = task.map((t) => 
            index === t.id ? {...t, task: value, isEdit: !t.isEdit} : t)
        setTask(edit)
        localStorage.setItem('value', JSON.stringify(edit))
        
    }

    const onClickToggleEdit = (index) => {      // при клике на редактирования
        setTask(task.map((t) => 
            t.id === index ? {...t, isEdit: !t.isEdit} : t ))
    }

    return(
        <div className='wrapper'>
            <div className={`todo ${colorBack}`}>
                    <AddItem mainBtn={mainBtn} task={task} text={text} setTask={setTask} setText={setText}/>
                <div className='task'>
                    <ul className='task_list'>
                        {task.map((t) => (
                            <div key={t.id}>
                                {t.isEdit ? (
                                    <div>
                                        <EditItem 
                                            onClickEditItem={onClickEditItem}
                                            text={t.task}
                                            task={t}
                                            colorBtn={colorBtn}
                                            />
                                    </div>
                                ) 
                                : (<div>
                                    <li className='list_item'>
                                        {t.task} 
                                            <div className='edit-delete_items'>
                                                <button className={`edit_item ${colorBtn}`} onClick={() => onClickToggleEdit(t.id)}>Edit</button>
                                                <button className={`delete_item ${colorBtn}`} onClick={() => onClickDeleteItem(t.id)}>Delete</button>
                                            </div>
                                    </li>
                                </div>)}
                            </div>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <ChangeBack setColor={setColor} setColorBtn={setColorBtn} setMainBtn={setMainBtn}/>
            </div>
        </div>
    )
}