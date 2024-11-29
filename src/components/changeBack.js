import React from 'react'

export const ChangeBack = (props) => {

    const colorBack = [
        {background: 'orange', button: 'orange_btn', mainBtn: 'orangeMain_btn'},
        {background: 'blue', button: 'blue_btn', mainBtn: 'blueMain_btn'},
        {background: 'green', button: 'green_btn', mainBtn: 'greenMain_btn'},
        {background: 'pink', button: 'pink_btn', mainBtn: 'pinkMain_btn'},
    ]

    const onClickColorBlack = (color) => {
        const back = color.background
        const btn = color.button
        const mainBtn = color.mainBtn
        props.setColor(back)
        props.setColorBtn(btn)
        props.setMainBtn(mainBtn)
        
        localStorage.setItem('background', back)
        localStorage.setItem('button', btn)
        localStorage.setItem('buttonMain', mainBtn)
    }

    return (
        <div>
            <div className='change_back'>
                {colorBack.map((color, index) => (
                    <span
                    key={index}
                    onClick={() => onClickColorBlack(color)}
                    className={color.background}>
                        <span className={color.button}></span>
                        <span clssName={color.mainBtn}></span>
                    </span>
                ))}
            </div>
        </div>
    )

}