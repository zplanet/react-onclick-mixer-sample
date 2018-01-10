import React, { Component } from 'react'
import withMixer from 'react-onclick-mixer'

class MyComponent extends Component {
    render() {
      return (<button type="button" onClick={this.props.onClick}>click me</button>)
    }
}

export default withMixer(MyComponent)