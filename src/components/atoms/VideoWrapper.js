import React from 'react';
import PropTypes from 'prop-types';
import './_button.scss';
import 'flexboxgrid/css/flexboxgrid.min.css';
import './_videoWrapper.scss'

export default class VideoWrapper extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  render() {
    return (
      <div className='video video__slide-in'>
        <div className={`video__wrapper ${this.props.isNavigationHidden ? '' : 'main__nav-active'}`}>
          <iframe
            title='Earth to Her Video'
            src="https://player.vimeo.com/video/262122164"
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    )
  }
}
