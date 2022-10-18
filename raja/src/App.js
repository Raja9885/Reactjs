import React from 'react';
// import React, { Components } from 'react';
import './App.css';
// import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
// import EventBind from './components/EventBind';
//  import Greet from './components/Greet';
//  import Welcome from './components/Welcome';
//  import Hello from './components/Hello';
//  import FunctionClick from './components/FunctionClick';

// class App extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }


class App extends React.Component {
  render() {
   return (
     <div className="App">
      <UserGreeting />
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
       {/* <FunctionClick />  */}
     {/* <Greet name='raja' heroName='Rajasekhar'>
      <p>This is my Name</p>
     </Greet>
     <Greet name='Ram' heroName='Raj' />
     <Greet name='raji' heroName='Rajarni'/>
       <Welcome /> 
      <Hello />  */}
     </div>
   );
 }
}

export default App;
