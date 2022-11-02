import React from 'react'

function FunctionClick() {

   function changeFunction() {
       console.log('Hello')
   }
  
  return (
    <div>
      <button onClick = {changeFunction}>Click Me</button>
    </div>
  )
}

export default FunctionClick
