import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <div className='footer'>
        {/* <!-- Begin MailChimp Signup Form --> */}
        <div id="mc_embed_signup">
          <form
            action="https://earthtoher.us17.list-manage.com/subscribe/post?u=f78e21d49002cdab009831635&amp;id=85a9fe6bec"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate>
            <div id="mc_embed_signup_scroll">
              <div class="indicates-required"><span class="asterisk"></span> indicates required</div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">Email Address <span class="asterisk"></span></label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div class="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div> {/*<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              <div
                style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_f78e21d49002cdab009831635_85a9fe6bec" tabindex="-1" value="" /></div>
              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
            </div>
          </form>
        </div>
        {/* <!--End mc_embed_signup--> */}
      </div>
    )
  }
}