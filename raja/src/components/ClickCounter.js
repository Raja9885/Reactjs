import React, { Component } from 'react'

class ClickCounter extends Component {
   
    decrementCount = () =>{
        this.setState(prevState =>{
            return {count: prevState.count - 1}
        })
    }



render() {
    const { count, incrementCount } = this.props
    return <div>
        <button onClick={incrementCount}>clicked {count}  times</button>
        <div>
        <button onClick={this.decrementCount}>clear  times</button>
        </div>
    </div> 
}
}

export default ClickCounter
