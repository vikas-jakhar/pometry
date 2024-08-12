import React from 'react'

const CommonHeading = (props) => {
    return (
        <h2 className={`${props.className} font-semibold text-5xl leading-[57px] text-black`}>{props.text}
            <span className='bg-darkRed-gradient bg-no-repeat bg-cover bg-clip-text text-transparent'>{props.redText}</span>{props.blackText}
        </h2 >
    )
}

export default CommonHeading
