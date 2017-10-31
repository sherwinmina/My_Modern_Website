import React, { Component } from 'react'
import Link from 'gatsby-link'

import './styles/Header.scss'
import FontAwesome from 'react-fontawesome'

class DeskTopMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      activeItem: e.target.name
    })
  }

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <div className="header-links">
          <Link
            to="/Home"
            name="Home"
            className={activeItem === 'Home' ? 'active-style' : null}
            onClick={this.handleChange}
          >
            HOME
          </Link>
          <Link
            to="/About"
            name="About"
            className={activeItem === 'About' ? 'active-style' : null}
            onClick={this.handleChange}
          >
            ABOUT
          </Link>

          <Link
            to="/Portfolio"
            name="Portfolio"
            className={activeItem === 'Portfolio' ? 'active-style' : null}
            onClick={this.handleChange}
          >
            PORTFOLIO
          </Link>
          <Link
            to="/Projects"
            name="Projects"
            className={activeItem === 'Projects' ? 'active-style' : null}
            onClick={this.handleChange}
          >
            PROJECTS
          </Link>
          <Link
            to="/Contact"
            name="Contact"
            className={activeItem === 'Contact' ? 'active-style' : null}
            onClick={this.handleChange}
          >
            CONTACT
          </Link>
          <a href="mailto:sherwinmina@yahoo.com">
            <FontAwesome
              style={{ color: 'cyan' }}
              name="envelope-o"
              size="lg"
            />
          </a>
          <a href="https://github.com/sherwinmina" target="_blank">
            <FontAwesome style={{ color: 'cyan' }} name="github" size="lg" />
          </a>

          <a href="https://codepen.io/Sherwin" target="_blank">
            <FontAwesome style={{ color: 'cyan' }} name="codepen" size="lg" />
          </a>
        </div>
      </div>
    )
  }
}

export default DeskTopMenu
