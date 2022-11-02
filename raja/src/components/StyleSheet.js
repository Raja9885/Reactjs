import React from 'react'
import './MyStyle.css'

function StyleSheet(props) {
    let className= props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={className}>My Styles</h1>
    </div>
  )
}

export default StyleSheet
