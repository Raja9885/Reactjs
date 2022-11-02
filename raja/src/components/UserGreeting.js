import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        //turnary operator
        return this.state.isLoggedIn ?(
          <div>Hello Narasimhulu</div>
        ):(
            <div>Hello Lakshmi devi</div>
        )
       // variable rendaring
        // let message
        //  if(this.state.isLoggedIn){
        //     message=<div>Hello Rajasekhar</div>
        //  }else{
        //     message=<div>Hello Pushpa</div>
        //  }
        //  return<div>{message}</div>
         //conditional rendarig
        // if (this.state.isLoggedIn) {
        //     return  <div>hello raja</div>
        //      }else {
        //       return <div> Hello guest</div> 
        //     }
        // return<div>
        //     Hello Vamsi
        // </div>
    }
}  
export default UserGreeting
