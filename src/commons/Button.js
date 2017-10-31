import React from 'react'
import './Button.scss'

const Button = props => {
  return (
    <div>
      <button className="button-container">{props.children}</button>
    </div>
  )
}

export default Button
