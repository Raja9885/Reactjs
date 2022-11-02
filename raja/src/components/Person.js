import React from 'react'

function Person({person}) {
  return (
    <div>
       <h1>
        I am {person.name} My age {person.age} My skill is {person.skill}
       </h1>
    </div>
  )
}

export default Person
