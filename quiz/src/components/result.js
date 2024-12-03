import React from 'react'

export const Result = (props) => {
    return (
        <div className='wrapper'>
            <div className='box-result'>
                <img src='/assets/images/result.png'/>
                <p>Вы ответили на {props.correct} вопроса из {props.quiz.length} !</p>
                <button onClick={() => window.location.reload()} className='back-btn'>Вернуться в начало</button>
            </div>
        </div>
    )
}