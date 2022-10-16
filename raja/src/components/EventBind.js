import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: "Hay Hi Raja"
        }
        this.changeEvent =this.changeEvent.bind(this)
    }
    changeEvent(){
        this.setState({
            message: "GoodBye! Raja"
        })
        console.log("hay hi raja")
    }
  render() {
   
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.changeEvent.bind(this)}>Click Me</button> */}
        {/* <button onClick={() => this.changeEvent()}>Click Me</button> */}
        <button onClick={() => this.changeEvent()}>Click Me</button>
      </div>
    )
  }
}

export default EventBind
