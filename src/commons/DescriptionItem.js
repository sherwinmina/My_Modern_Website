import React, { Component } from 'react'
import './DescriptionItem.scss'

const DescriptionItem = props => {
  return (
    <div className="description-container">
      <div className="description-trigger">DESCRIPTION</div>

      <div className="description-item">
        {props.description}{' '}
        <div className="description-tools">
          {' '}
          {props.tools ? props.tools.map(item => ' | ' + item) : null}
        </div>
      </div>
    </div>
  )
}

export default DescriptionItem
