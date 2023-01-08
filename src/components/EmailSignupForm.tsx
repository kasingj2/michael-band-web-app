import { IonItem, IonLabel, IonInput, IonCheckbox, IonButton, IonCard, IonCardHeader, IonContent, IonCardContent } from '@ionic/react'
import React from 'react'

type Props = {}

const emailInputFieldStyle = {
    width: '20rem'
}

const formCardStyle = {
    background: `var(--ion-color-step-200)`
}

const mailChimpFormStyle = {
    color: 'black',
    backgroundColor: '#5a8f91',
    width: '1000px',
    display: 'flex',
    justifyContent: 'center',
    height: '17rem'


}

const mcFormContainer = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10rem',
}

const formInputStyle = {
    backgroundColor: 'cream'
}

function EmailSignupForm({ }: Props) {
    return (

        <div className='mcFormContainer' style={mcFormContainer}>
            {/* Begin Mailchimp Signup Form */}
            <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css" />
            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
            <div id="mc_embed_signup" style={mailChimpFormStyle}>
                <form action="https://gmail.us21.list-manage.com/subscribe/post?u=9ff2ae2fc527534d15298c22a&id=778b185f49&f_id=0045cce1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <h2>Subscribe</h2>
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group">
                            <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                            </label>
                            <input type="email" defaultValue="email" name="EMAIL" className="required email" id="mce-EMAIL" required style={formInputStyle} />
                            <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                        </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_9ff2ae2fc527534d15298c22a_778b185f49" tabIndex={-1} defaultValue="default" /></div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                <p className="brandingLogo"><a href="http://eepurl.com/ihJTLf" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /></a></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {/*End mc_embed_signup*/}
        </div>

    )
}

export default EmailSignupForm