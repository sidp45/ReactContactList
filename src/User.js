import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome {this.props.name}</h1>
                <button onClick={this.props.clickData}>Logout</button>
            </React.Fragment>
        )
    }
}
