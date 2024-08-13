import React from 'react'

const CommonButton = (props) => {
  return (
    <button className={`${props.className} py-2.5 border duration-300 ease-linear relative rounded px-8 font-semibold text-base`}>{props.text}
      <span className='absolute bg-black w-1/2 top-0 left-1/2 -translate-x-1/2 h-full'></span>
    </button>
  )
}

export default CommonButton
