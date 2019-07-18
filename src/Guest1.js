import React, { Component } from 'react'
import {MyContext} from './Context';
export default class Guest1 extends Component {
    static contextType = MyContext;
    render() {
        console.log(MyContext)
        return (
           <div>
                <h3>Guest Component</h3>
                
                    <h4>Name:{this.context.data.name} Value:{this.context.data.value}</h4>
                    <button onClick={this.context.handleClick}>Change</button>
              </div>   
        );
    }
}
