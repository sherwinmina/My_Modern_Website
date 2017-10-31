import React, { Component } from 'react'
import '../styles/Home.scss'

import Particles from 'react-particles-js'
import Typing from 'react-typing-animation'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <p className="text-overlay">
          <Typing speed={200}>
            <h2>Welcome!</h2>
            <Typing.Backspace count={10} />
            <p>Thank you for visting</p>
            <Typing.Delay ms={1000} />
            <p>and enjoy.</p>
          </Typing>
        </p>
        <Particles />
      </div>
    )
  }
}

export default Home
