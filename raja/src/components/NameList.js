import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
    {
        id : 1,
        name: 'Raja',
        age: 25,
        skill: 'React'
    },
    {
        id : 2,
        name: 'Rani',
        age: 25,
        skill: 'HTML'
    },
    {
        id : 3,
        name: 'Raji',
        age: 25,
        skill: 'Java'
    },
    {
        id : 4,
        name: 'Roja',
        age: 29,
        skill: 'Vue'
    }
    ]
       const personsList = persons.map(person =><Person key = {person.id} person={person} />
      )

    // const names = [ 'raja','suri','vamsi','din','darling'];
  return (
    <div>
        {personsList}
        {/* {
            persons.map(person => <h1> I am {person.name} Hello Iam {person.skill}</h1>)
        } */}





        {/* this is the old method */}
      {/* <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1>
      <h1>{names[3]}</h1> */}
    </div>
  )
}

export default NameList
