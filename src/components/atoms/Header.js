import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './_header.scss';
import 'flexboxgrid/css/flexboxgrid.min.css';
import EarthToHerLogo from '../../assets/earthtoher_logo_black.svg'

export default class Header extends React.Component {
  static propTypes = {
      headerCopy: PropTypes.string,
      onClick: PropTypes.func
  }

  render() {
    return (
      <div className='header col-xs-12'>
        <div className='header__items'>
          <img
            src={EarthToHerLogo}
            alt='Earth to Her Logo'
            className='header__logo'
          />
          <Button
            color='orange'
            onClick={this.props.onClick}
          />
        </div>
      </div>
    )
  }
}