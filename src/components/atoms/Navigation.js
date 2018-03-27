import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import 'flexboxgrid/css/flexboxgrid.min.css';
import './_navigation.scss';
import CloseButton from '../../assets/close_button.svg'

export default class Navigation extends React.Component {
    render() {
      return (
        <div className={`navigation row navigation__${this.props.navigationVisibility}`}>
          <div className='navigation__button'>
            <Button
              buttonShape='close'
              color='transparent'
              onClick={this.props.closeNavigation}
          >
              <img src={CloseButton} alt='close button' />
            </Button>
          </div>
          <div className='navigation__inner col-xs-12 col-sm-6'>
            <div className='navigation__description'>
              Earth to Her is an essential, guiding practice for
              cannabis lovers centered in feminine energy and self-discovery.
              Through a community focused on education and conversation, Earth to Her
              celebrates cannabis’ influence in design, well-being and creativity.
            </div>
            <div className='navigation__links'>
              <ul className='navigation__links--link-list'>
                  <li className='navigation__links--link-list-item'>
                    <a href='http://instagram.com/earthtoher' target='_blank'>Instagram</a>
                  </li>
                <li className='navigation__links--link-list-item'>
                  <a href='http://instagram.com/earthtoher' target='_blank'>Youtube</a>
                </li>
                <li className='navigation__links--link-list-item'>
                  <a
                    href='https://open.spotify.com/user/tagd4rhkiynfiypepo4gu309r?si=xJSisfZcQVaRziQSpONzhw'
                    target='_blank'>
                      Spotify
                    </a>
                </li>
                <li className='navigation__links--link-list-item'>
                  <a href='http://instagram.com/earthtoher' target='_blank'>Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
}
