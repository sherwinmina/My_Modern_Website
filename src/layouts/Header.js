import React, { Component } from 'react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-logo">
          <h2>Sm.</h2>
        </div>

        <DesktopMenu />
        <MobileMenu />
      </div>
    )
  }
}

export default Header
