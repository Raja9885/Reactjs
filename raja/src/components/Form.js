import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         comment:'',
         topic:''
      }
    }
    changeHandler=(event)=>{
       this.setState({
        userName: event.target.value
       })
    }
    changeComment = (event) =>{
        this.setState({
            comment:event.target.value
        })
    }
    changeOption = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    submitHandler= event =>{
        alert(`${this.state.userName},${this.state.comment},${this.state.topic}`)
        event.preventDefault()
    }
    
  render() {
    const {userName, comment, topic } = this.state
    return (
    <form onSubmit={this.submitHandler}>
       
       <div  style= {{
               justifyContent: 'space-between'
          }}>
            <lable>UserName:</lable>
            <input type='text' value={userName} onChange={this.changeHandler}></input>
        </div>
        <br/>
        <div  style= {{
              
               justifyContent: 'space-between'
          }}>
            <lable>Text :</lable>
            <textarea type='textarea' value={comment} onChange={this.changeComment}>
            </textarea>
        </div>
        <br/>
        <div  style= {{
              
               justifyContent: 'space-between'
          }}>
            <label>Topic:</label>
            <select value={topic} onChange={this.changeOption}>
                <option value='select'>select</option>
                <option value='React'>React</option>
                <option value='Java'>Java</option>
                <option value='SQL'>SQL</option>
                <option value='HTML'>HTML</option>
            </select>
        </div>
        <div>
            <button type='Submit'>Submit</button>
       </div>
    </form>
    )
  }
}

export default Form
