import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Destructuring formData
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target; // getting the input
    setFormData({...formData, [name]: value}) // first destructure the object formData, and then dynamically change the value of the name
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name, // we can use directly name (not formData.name) thanks to the destructuring
      email: email,
      message: message, 
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className='head-text'>Take a coffe & chat with me</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:leodubouloz74500@hotmail.fr" className='p-text'>leodubouloz74500@hotmail</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+33 6 46 68 86 20" className='p-text'>+33 6 46 68 86 20</a>
        </div>
      </div>

      {!isFormSubmitted ? //if the user hasn't submitted the form yet, we show this code: 
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type='button' className='p-text' onClick={handleSubmit}
          >
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div> 
      : // else, we show a success message
      <div>
          <h3 className='head-text'>Thank you for getting in touch !</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
)