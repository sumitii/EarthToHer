import React, { Component } from 'react';
import 'flexboxgrid/css/flexboxgrid.min.css';
import faker from 'faker';
import Navigation from './components/atoms/Navigation';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='main row'>
        <div className='main__slide-in'>
          <div className='main__video'>
            <img src={faker.image.image()} alt='earth-to-her-video' />
          </div>
        </div>
        <div className='main__wrapper'>
          <div className='main__leftSidebar col-xs-2 col-sm-1' />
          <div className='main__header col-xs-10 col-sm-11'>
            <h2>Earth to Her</h2>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default App;
