import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
import Counte from './components/Counte';
// import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counte />
        {/* <Message /> */}
        <Greet  heroName="Vijay" name="Hyderbad">
          <p>I am hero from telugu</p>
          </Greet>
        {/* <Greet  heroName="Surya" name="Bengelore" >
          <p>i am hero from tamil </p>
          </Greet>
        <Greet  heroName="Ram" name="Chinni" >
        <buttion>Action</buttion>
          </Greet> */}
        {/* <Welcome heroName="Surya" name="Bengelore" />
        <Welcome heroName="Surya" name="Bengelore" />
        <Welcome heroName="Surya" name="Bengelore" />  */}
         {/* <Hello  /> */}
      </div>
    );
  }
}

export default App;
