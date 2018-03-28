import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'flexboxgrid/css/flexboxgrid.min.css'
import Navigation from './components/atoms/Navigation'
import Header from './components/atoms/Header'
import VideoWrapper from './components/atoms/VideoWrapper'
import './App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isNavigationHidden: true,
    }
  }
  
  toggleNavigation = () => {
    this.setState({
      isNavigationHidden: !this.state.isNavigationHidden,
    })
  }

  render() {
    return (
      <div className='main row'>
        <Header
          headerCopy='Earth to Her'
          onClick={this.toggleNavigation.bind(this)}
        />
        <VideoWrapper />
        <div className='main__wrapper'>
          <div className='main__headerText'>
            <h2>Earth to Her</h2>
          </div>
        </div>
          <Navigation
            closeNavigation={this.toggleNavigation.bind(this)}
            navigationVisibility={this.state.isNavigationHidden ? 'inactive' : 'active'}
          />
      </div>
    )
  }
}

export default App;