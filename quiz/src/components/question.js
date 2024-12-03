import React from 'react'

export const Question = (props) => {

    const lineWidth = Math.round((props.step / props.quiz.length)*100) 

    return (
        <div className='wrapper'>
            <div className='box'>
                <div className='line'>
                    <div className='line_inner' style={{width: `${lineWidth}%`}}></div>
                </div>
                <h3 className='question'>{props.questions.question}</h3>
                <ul className='answer'>
                    {props.questions.answer.map((item, index) => (
                        <li key={index} className='answer-item' onClick={() => props.onClickStep(index)}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}