import React from 'react';

// function Greet() {
//     return <h1>Hello Raja</h1>
// }

// const Greet = () => {
//     return<h1>Rajasekhar</h1>
// }

const Greet = props =>{
    
    return(
    <div>
    <h1>Hello {props.name} you are {props.heroName}</h1>
     { props.Children }
    </div>
    )
}
export default Greet