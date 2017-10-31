import React from 'react'
import Button from './Button'
import DescriptionItem from './DescriptionItem'
import './PortfolioCard.scss'

const PortfolioCard = props => {
  return (
    <div className="card-container">
      <DescriptionItem {...props} />

      <div className="picture-container">
        <img src={props.image} alt="" />
      </div>
      <p className="card-title">{props.title}</p>

      <span className="both-button-container">
        <Button>
          <a href={props.demo} target="_blank">
            Demo
          </a>
        </Button>
        <Button>
          <a href={props.sourceCode} target="_blank">
            Source Code
          </a>
        </Button>
      </span>
    </div>
  )
}

export default PortfolioCard
