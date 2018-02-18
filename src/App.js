import React, { Component } from 'react';
import 'flexboxgrid/css/flexboxgrid.min.css'; 
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='main row'>
        <div className='main__leftSidebar col-xs-1' />
        <div className='main__header col-xs-11'>
          <h2>Earth to Her</h2>
        </div>
        
      </div>
    );
  }
}

export default App;
