import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from './Header'

import './styles/index.css'
import './styles/App.scss'

import Background from '../images/SanFrancisco.png'

const TemplateWrapper = ({ children }) => (
  <div className="app">
    <Helmet
      title="Sherwin Mina"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />

    <Header />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
