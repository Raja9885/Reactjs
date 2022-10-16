import React from 'react'

function FunctionClick() {

   function changeFunction() {

       console.log("hello")
   }
  
  return (
    <div>
      <button onClick = {changeFunction}>Click Me</button>
    </div>
  )
}

export default FunctionClick
