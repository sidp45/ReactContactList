import React, { Component } from 'react'

export default class App1 extends Component {
    constructor(props){
        super(props);
        {
         this.textInput=React.createRef();
        }
        this.componentDidMount =() =>{
          this.textInput.current.focus();
        };
    }
    render() {
        return (
            <div>
                <form>
                    Name:<input type="text"></input>
                    <br/>
                    <br/>
                    Password:<input type="password" ref={this.textInput}></input>
                    <br/>
                    <br/>
                    Address:<input type="text"></input>
                </form>
            </div>
        )
    }
}
