import React, { Component } from 'react'
import PortfolioCard from '../commons/PortfolioCard'
// import { Motion, spring, StaggeredMotion } from 'react-motion'
// import StaggeredAnimation from 'react-staggered-animation'
import { VelocityTransitionGroup } from 'velocity-react'

import BeerCompanion from '../images/projects/beer-companion.png'
import NbaApp from '../images/projects/nba-app.jpg'
import ImperfectProduce from '../images/projects/imperfect.jpg'
import Sortable from '../images/projects/sortable.png'
import Todo from '../images/projects/todo.png'
import Chat from '../images/projects/chat.jpg'
import Calculator from '../images/projects/calculator.jpg'
import JobFinder from '../images/projects/jobfinder.png'

// import ReactCSSTransition from 'react-addons-css-transition-group'

import '../styles/Portfolio.scss'

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div>
          <VelocityTransitionGroup
            className="portfolio-container"
            runOnMount={true}
            duration={900}
            enter={{
              animation: 'fadeIn',
              stagger: 50,
              transition: 'opacity 4s'
            }}
            leave={{ animation: 'fadeOut', stagger: 120 }}
          >
            <PortfolioCard {...Work.BeerCompanion} image={BeerCompanion} />
            <PortfolioCard {...Work.nbaApp} image={NbaApp} />
            <PortfolioCard
              {...Work.ImperfectProduce}
              image={ImperfectProduce}
            />
            <PortfolioCard {...Work.Sortable} image={Sortable} />
            <PortfolioCard {...Work.Todo} image={Todo} />
            <PortfolioCard {...Work.Chat} image={Chat} />
            <PortfolioCard {...Work.jobFinder} image={JobFinder} />
            <PortfolioCard {...Work.Calculator} image={Calculator} />
          </VelocityTransitionGroup>
        </div>
      </div>
    )
  }
}

const Work = {
  BeerCompanion: {
    title: 'Beer-Companion',
    demo: 'http://beer-companion.surge.sh/',
    sourceCode: 'https://github.com/sherwinmina/Beer-Companion',
    description:
      'This project is both a website and a web app. There are several feature in this application to educate beer drinkers. It includes a brewery locator base on your locationusing the Yelp API. It also uses the BrewerDB API for most query such as the search. In the future would like to hook up mongoDB or firebase to save your favorite beers.'
  },

  nbaApp: {
    title: 'NBA-APP',
    demo: 'http://nba-app.surge.sh/',
    sourceCode: 'https://github.com/sherwinmina/NBA-APP',
    description:
      'The front end is currently being serve on surge and the Node Proxy/API server is on Heroku. Currently looking for free sports API. Managed to scrape the internet for various api endpoints'
  },
  ImperfectProduce: {
    title: 'Imperfect-Produce',
    demo: 'http://imperfect-produce-redesign.surge.sh/',
    sourceCode: 'https://github.com/sherwinmina/imperfect-produce',
    description:
      'A redesign of the Imperfect produce web-app. Used the semantic UI library and Sass to Architect the Style Guide'
  },
  Sortable: {
    title: 'Sortable',
    demo: 'http://sortable.surge.sh/',
    sourceCode: 'https://github.com/sherwinmina/react-assignmnet-crowdflower',
    description:
      'A small sortable item widget that has several behavior cases.  It fetches a set of list from a simple heroku api. It will prompt the user base on a succes or failure cases. If it is succesful a list is rendered to the page. The list is sortable and editable,a save button will conditionally render if the item has been manipulated. React is responding to the users actions when it manipulates the item it will manipulate the redux store.'
  },
  Calculator: {
    title: 'Calculator',
    demo: 'http://react-calculator1.surge.sh/',
    sourceCode: 'https://github.com/sherwinmina/Calculator-React',
    description:
      "This project is base on Michael Jackson's talk at React San Diego Conf. This small project is a great exercise for finding clever ways to use react state and also using native browser events that are not currently available as React synthetic events"
  },
  Chat: {
    title: 'Chat',
    demo: 'https://chat-app-websocket.herokuapp.com/',
    sourceCode: 'https://github.com/sherwinmina/node-chat-app',
    description: 'A simple Chat application using nodeJS and Socket.io'
  },
  Todo: {
    title: 'React-Todo',
    demo: 'http://react-todo-app1.herokuapp.com/',
    sourceCode: 'https://github.com/sherwinmina/ReactToDo',
    description:
      'This is another todo application, but a todo is a great exercise for manipulating the redux store base on user action.'
  },
  jobFinder: {
    title: 'Job-Finder',
    demo: '',
    sourceCode: 'https://github.com/sherwinmina/job-finder',
    tools: ['React', 'Redux', 'Firebase', 'Expo', 'Xcode', 'Material UI'],
    description:
      'This a react-native project using the Indeed API and mapping the receive geo-json to Google maps API. A user would swipe left or right to save or reject jobs. Saved jobs would persist on redux then saved to firebase. A user would then able to review and apply for a job with an onclick event to the designated job url'
  }
}

export default Portfolio
