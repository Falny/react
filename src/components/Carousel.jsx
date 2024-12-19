import React, { cloneElement } from 'react'
import { SlArrowLeft, SlArrowRight} from 'react-icons/sl'

const OFFSET_WIDTH = 120;


export const Carousel = ({children}) => {

    const visibleElem = 3;
    const centerElem = Math.floor(visibleElem/2);

    const maxWidth = -(OFFSET_WIDTH * (children.length - 3))

    const [offset, setOffset] = React.useState(0);

    
    const handleArrowLeft = (current) => {
        setOffset((current) => {
            return Math.min((current + OFFSET_WIDTH), 0)
        })
    }

    const handleArrowRight = (current) => {
        setOffset((current) => {
            return Math.max((current - OFFSET_WIDTH), maxWidth)
        })
    }

    const centerIndex = Math.abs(Math.round(offset / OFFSET_WIDTH)) + centerElem
    console.log(centerIndex)

    return (
        <>
        <div className="app">
        <SlArrowLeft className='arrow' onClick={handleArrowLeft}/>
            <div className="window">
                <div className="container"
                    style={{
                        transform: `translateX(${offset}px)`,
                        transition: 'all .3s ease',
                    }}
                >
                    {React.Children.map(children, (child, index) => {
                        const isCenter = index === centerIndex;
                        return React.cloneElement(child, {
                            style: {
                                transform: isCenter ? 'scale(1.3)' : 'scale(1)',
                                transition: 'all .3s ease',
                            }
                        })
                    })}
                </div>
            </div>
         <SlArrowRight className='arrow' onClick={handleArrowRight}/>
        </div>
        </>
    )
}
