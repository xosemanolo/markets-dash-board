import '../assets/css/App.css'
import React, { Component } from 'react'
import Test from './test'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, Electron!</h1>
        <Test />
      </div>
    )
  }
}

export default App
