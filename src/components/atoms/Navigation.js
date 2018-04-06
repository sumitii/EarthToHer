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
              A guiding practice for feminine energy and self-discovery.<br/>
              Led by multimedia artist Tina Snow Le, Earth To Her challenges the visual culture of cannabis, and explores the essentials of well-being, through the lens of design.
              <br/>
              <br/>
              Earth To Her presents: <br />
              INNER SPACE <br />
              April 6th - April 27th, 2018<br />
              One Grand Gallery<br />
              Portland, Oregon
            </div>
            <div className='navigation__links'>
              <ul className='navigation__links--link-list'>
                  <li className='navigation__links--link-list-item'>
                  <a href='https://www.instagram.com/earth_to_her/' target='_blank' rel='noopener noreferrer'>Instagram</a>
                  </li>
                <li className='navigation__links--link-list-item'>
                  <a href='https://www.youtube.com/channel/UC9js_8kU2ajoumBHUH14gdw' target='_blank' rel='noopener noreferrer'>Youtube</a>
                </li>
                <li className='navigation__links--link-list-item'>
                  <a
                    href='https://open.spotify.com/user/tagd4rhkiynfiypepo4gu309r?si=xJSisfZcQVaRziQSpONzhw'
                    target='_blank'>
                      Spotify
                    </a>
                </li>
                <li className='navigation__links--link-list-item'>
                  <a href='mailto:tina@earthtoher.com?subject=Hello%20Earth%20to%20Her'>Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
}
