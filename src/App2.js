import React, { Component } from 'react'

export default class App2 extends Component {
    constructor(props)
    {
    super(props)
    this.state={
        value: ""
    };
    this.textInput=React.createRef();
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        this.setState({value:this.textInput.current.value})
    }
    render() {
        return (
            <div>
                <React.Fragment>
   <h2>You Typed :{this.state.value}</h2>
             <form onSubmit={this.handleSubmit}>
                Input: <input type="text" ref={this.textInput}></input>
                <input type="submit" value="submit"></input>
                 </form>  
                </React.Fragment>
            </div>
        )
    }
}
