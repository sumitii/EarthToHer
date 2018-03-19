import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'flexboxgrid/css/flexboxgrid.min.css'
import faker from 'faker'
import Navigation from './components/atoms/Navigation'
import Button from './components/atoms/Button'
import Header from './components/atoms/Header'
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
        <div className={`main__slide-in ${this.state.isNavigationHidden ? '' : 'main__nav-active'}`}>
          <div className={`main__video${this.state.isNavigationHidden ? '' : '--nav-video-active'}`}>
            <img src={faker.image.image()} alt='earth-to-her-video' />
          </div>
        </div>
        <div className='main__wrapper'>
          <div className='main__header'>
            <h2>Earth to Her</h2>
          </div>
        </div>
        {!this.state.isNavigationHidden &&
          <Navigation
            closeNavigation={this.toggleNavigation.bind(this)}
          />
        }
      </div>
    );
  }
}

export default App;
