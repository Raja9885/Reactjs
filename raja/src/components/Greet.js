import React from 'react'

// function Greet() {
//     return <h1>I am your Friend</h1>
// }

const Greet = props => {
    const {heroName, name} = props
    return (
        <div>
            <h1>Hello {heroName} , where is your Home: {name}</h1>
            {/* {props.children} */}
        </div> 
    
    )
}
export default Greet