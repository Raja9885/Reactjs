import React,{ Component } from 'react'

class Welcome extends Component{
    render(){
        return(
        
            <h1>I am  {this.props.heroName} from Hosur {this.props.name}</h1>
        
        );
    }
}

export default Welcome