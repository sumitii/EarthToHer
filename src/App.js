import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'flexboxgrid/css/flexboxgrid.min.css'
import Navigation from './components/atoms/Navigation'
import Header from './components/atoms/Header'
import VideoWrapper from './components/atoms/VideoWrapper'
import EarthToHerLogo from './assets/earthtoher_logo_black.svg'

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
        <div className={`main__overlay main__overlay--${this.state.isNavigationHidden ? 'inactive' : 'active'}`} />
        <div className='main__logoWrapper'>
          <img
            src={EarthToHerLogo}
            alt='Earth to Her Logo - White'
            className='main__logo'
          />
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