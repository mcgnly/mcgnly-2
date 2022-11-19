import React from 'react';
import './contactForm.css';

const ContactForm = () => (
    <form className='contactForm' method="post" action="https://formspree.io/mayjekjk">
        <label className='contactLabel'>
            Name *
  <input classname='contactInput' type="text" name="name" />
        </label>
        <label className='contactLabel'>
            Email Address *
  <input classname='contactInput' type="email" name="_replyto" />
        </label>
        <label className='contactLabel'>
            Subject *
  <input classname='contactInput' type="text" name="subject" />
        </label>
        <label className='contactLabel'>
            Message *
  <textarea className='contactText' name="message"></textarea>
        </label>
        <input classname='contactInput' type="text" name="_gotcha" style={{ display: "none" }} />
        <div className='buttonFlex'>
            <button className='contactButton' type="submit">Submit</button>
        </div>
    </form>
);
export default ContactForm;