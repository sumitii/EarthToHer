import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './_header.scss';
import 'flexboxgrid/css/flexboxgrid.min.css';

export default class Header extends React.Component {
  static propTypes = {
      headerCopy: PropTypes.string,
      onClick: PropTypes.func
  }

  render() {
    return (
      <div className='header col-xs-12'>
        <div className='header__items'>
          <span className='header__text'><h2>{this.props.headerCopy}</h2></span>
          <Button
            color='black'
            onClick={this.props.onClick}
          />
        </div>
      </div>
    )
  }
}
