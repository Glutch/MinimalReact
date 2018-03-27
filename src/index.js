import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Hello = () => <div>Hello!</div>

class App extends Component {
  render() {
    return (
      <Hello />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))