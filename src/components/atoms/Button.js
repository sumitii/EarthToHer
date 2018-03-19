import React from 'react';
import PropTypes from 'prop-types';
import './_button.scss';
import 'flexboxgrid/css/flexboxgrid.min.css';

export default class Button extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    buttonShape: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    closeButton: PropTypes.func,
  }

  static defaultProps = {
    color: 'brown',
    buttonShape: 'circle'
  }

render() {
  return (
    <div className='button'>
      {}
      <button
        className={`button__link button--${this.props.color} button__${this.props.buttonShape}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    </div>
    )
  }
}
