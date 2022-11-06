import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef= React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }
    changeHandler = () =>{
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/><br></br>
        <button onClick={this.changeHandler}>Click Me</button>
        
      </div>
    )
  }
}

export default RefDemo
