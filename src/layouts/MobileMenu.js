import React, { Component } from 'react'
import Link from 'gatsby-link'

import FontAwesome from 'react-fontawesome'

const MenuContent = props => {
  return (
    <div className="mobile-menu-content-container">
      <div className="mobile-menu-content" onClick={props.closeMenu}>
        <Link to="/Home" onClick={props.closeMenu}>
          HOME
        </Link>
        <Link to="/About" onClick={props.closeMenu}>
          ABOUT
        </Link>
        <Link to="/Portfolio" onClick={props.closeMenu}>
          PORTFOLIO
        </Link>

        <a href="mailto:sherwinmina@yahoo.com">
          <FontAwesome style={{ color: 'cyan' }} name="envelope-o" size="lg" />
        </a>
        <a href="https://codepen.io/Sherwin" target="_blank">
          <FontAwesome style={{ color: 'cyan' }} name="codepen" size="lg" />
        </a>
        <a href="https://github.com/sherwinmina" target="_blank">
          <FontAwesome style={{ color: 'cyan' }} name="github" size="lg" />
        </a>
      </div>
    </div>
  )
}

class MobileMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.openMenu = this.openMenu.bind(this)
  }

  openMenu() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { open } = this.state
    return (
      <div className="mobile-menu">
        <FontAwesome
          style={{ color: 'cyan' }}
          name="bars"
          size="lg"
          onClick={this.openMenu}
        />

        {open ? <MenuContent closeMenu={this.openMenu} /> : null}
      </div>
    )
  }
}

export default MobileMenu
