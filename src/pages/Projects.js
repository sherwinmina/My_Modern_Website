import React, { Component } from 'react'
import '../styles/Projects.scss'

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <h2> Projects</h2>
        <h3>Open Source Contributions</h3>
        <p>Hack Club Monolith</p>
        <a href="https://github.com/hackclub/monolith">
          https://github.com/hackclub/monolith
        </a>
        <br />
        <p>
          <br />FreeCode Camp
        </p>
        <a href="https://github.com/freeCodeCamp/pantry-for-good">
          https://github.com/freeCodeCamp/pantry-for-good
        </a>

        <h3>
          <br />
          <br />Built Tools
        </h3>
        <p>Personal UI React UI Library</p>
        <p>Reusable React Components</p>
        <p>Some Useful HOC components</p>
        <p>Websites</p>
        <p>Website Templates</p>
      </div>
    )
  }
}

export default Projects
