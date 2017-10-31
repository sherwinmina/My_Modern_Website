import React, { Component } from 'react'
import '../styles/About.scss'
import ProfilePhoto from '../images/photo.jpg'

import Typing from 'react-typing-animation'
import ReactCSSTransition from 'react-addons-css-transition-group'
import '../styles/PageAnimation.scss'

import { Motion, spring, StaggeredMotion } from 'react-motion'

class componentName extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-left-panel">
          <StaggeredMotion
            defaultStyles={[{ h: 0 }]}
            styles={prevInterpolatedStyles =>
              prevInterpolatedStyles.map((_, i) => {
                return i === 0
                  ? { h: spring(600) }
                  : { h: spring(prevInterpolatedStyles[i - 1].h) }
              })}
          >
            {interpolatingStyles => (
              <div>
                {interpolatingStyles.map((style, i) => (
                  <div key={i} style={{ height: style.h }}>
                    <img src={ProfilePhoto} alt="" />

                    <h1>SHERWIN MINA</h1>
                    <p>Developer with a Passion for Design</p>
                  </div>
                ))}
              </div>
            )}
          </StaggeredMotion>
        </div>

        <div className="about-right-panel">
          {' '}
          <Typing speed={150}>
            <h2>ABOUT</h2>
          </Typing>
          <ReactCSSTransition transitionName="route" transitionAppear={true}>
            <p>
              Hello Internet, my name is Sherwin Mina. I'm a web developer based
              in San Francisco, CA. I'm currently working with React, Redux,
              Webpack and Node. My interests are in front-end and UI
              development, but I also enjoy being involved throughout the
              entirety of a project. I find building great CSS architecture
              compelling and challenging. There's no right answer. Design goes
              both ways, and style and data organization are of equal
              importance.
              <p>
                <br />
                I have a keen interest in graphic design, and I'm passionate
                about crafting great experiences for end-users. I've worked as
                an illustrator and graphic designer. Together, these skills
                influence all of my decisions as I work on a project, be they
                technical or aesthetic. I'm always on the lookout for new ideas
                that can help shape projects.
              </p>
              <p>
                It's an exciting time for modern Javascript and I am excited to
                contribute towards its development. This site is built with
                React, Sass and Gatsby with the intention of illustrating modern
                Javascript development.
              </p>
              <p>
                I am constantly learning, seeking new challenges and still in
                search for the best cheeseburger.
              </p>
            </p>
          </ReactCSSTransition>
        </div>
      </div>
    )
  }
}

export default componentName
