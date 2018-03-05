import React from 'react';
import PropTypes from 'prop-types';
import 'flexboxgrid/css/flexboxgrid.min.css';
import './_navigation.scss';

export default class Navigation extends React.Component {
    static propTypes = {}

    render() {
      return (
        <div className='navigation row'>
          <div className='navigation__inner col-xs-12 col-sm-5'>
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
                  <a href='http://instagram.com/earthtoher' target='_blank'>Instagram</a>
                </li>
                <li className='navigation__links--link-list-item'>
                  <a href='http://instagram.com/earthtoher' target='_blank'>Instagram</a>
                </li>
                <li className='navigation__links--link-list-item'>
                  <a href='http://instagram.com/earthtoher' target='_blank'>Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
}
