import React from 'react'

const CommonButton = (props) => {
  return (
    <button className={`${props.className} py-2.5 hover:shadow-3xl z-[1] overflow-hidden border group duration-300 ease-linear relative rounded px-8 font-semibold text-base`}>{props.text}
      <span className={`${props.hoverClass} absolute w-0 group-hover:w-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-0 group-hover:h-40 -z-[1] rotate-45 duration-300 ease-linear`}></span>
    </button>
  )
}

export default CommonButton
