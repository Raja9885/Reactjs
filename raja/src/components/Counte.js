import React, { Component } from 'react';
import  '../components/Button.css'


class Counte extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Count: 0
      }
    }
    increment() {
        this.setState({
            Count: this.state.Count+1
        })
        console.log("hello" , this.state.Count)
    }
    decriment() {
        this.setState({
            Count: this.state.Count-1
        })
        console.log("hello")
    }
    
    
  render() {
    return (
      <div>
       <div> Count {this.state.Count}</div>
       <button id="raja" onClick ={() =>this.increment()} >Increment</button> &nbsp; &nbsp;
        <button id="vamsi" onClick ={() =>this.decriment()}>Decrement</button>
      </div>
    )
  }
}

export default Counte
