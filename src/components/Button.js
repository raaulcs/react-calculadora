import React from 'react'
import '../css/Button.css'

export default function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=')
  }

  return (
    <div
      className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.clickHandler(props.children)}>
      {props.children}
    </div>
  )
}