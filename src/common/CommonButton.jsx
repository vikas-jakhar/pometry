import React from 'react'

const CommonButton = (props) => {
  return (
    <button className={`${props.className} py-2.5 border duration-300 ease-linear hover:shadow-[0px_0px_0px_1px_white,0px_0px_0px_2px_black] rounded px-8 font-semibold text-base`}>{props.text}</button>
  )
}

export default CommonButton
