import React from 'react'

const CommonHeading = (props) => {
    return (
        <h2 className={`${props.className} font-semibold text-3xl sm:text-4xl lg:text-5xl lg:leading-[57px] text-black`}>{props.text}
            <span className='bg-darkRed-gradient bg-no-repeat bg-cover bg-clip-text text-transparent'>{props.redText}</span>{props.blackText}
        </h2 >
    )
}

export default CommonHeading
