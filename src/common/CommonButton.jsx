import React from 'react'

const CommonButton = (props) => {
  return (
    <button className={`${props.className} py-2.5 border border-darkRed rounded px-8 font-semibold text-base`}>{props.text}</button>
  )
}

export default CommonButton
