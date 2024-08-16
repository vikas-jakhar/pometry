import React from 'react'

const CommonHeading = (props) => {
    return (
        <h2 className={`${props.className} capitalize font-semibold text-[28px] max-sm:leading-10 smd:leading-[45px] md:leading-[52px] sm:text-custom-xl md:text-4xl xl:text-5xl xl:leading-[57px]`}>{props.text}
            <span className='bg-darkRed-gradient bg-no-repeat bg-cover bg-clip-text text-transparent'>{props.redText}</span>{props.blackText}
        </h2 >
    )
}

export default CommonHeading