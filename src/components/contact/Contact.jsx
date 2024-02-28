import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import{FaWhatsapp}from "react-icons/fa"
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fcn35pn', 'template_unchixp', form.current, '2JFcatxh6mP_q_lPb')
     
    e.target.reset()
      };
  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
      <div className='contact__options'>
      <article className='contact__option'>
        <MdOutlineMailOutline className='contact__option_icon'/>
        <h4>Email</h4>
        <h5>edgarminaya26@gmail.com</h5>
        <a href="mailto:edgarminaya26@gmail.com">Send a message</a>
        </article>
      <article className='contact__option'>
        <RiMessengerLine className='contact__option_icon' />
        <h4>Messenger</h4>
        <h5>Mensenger</h5>
        <a href="https://m.me/edgaralberto.delarosa">Send a message</a>
        </article>
      <article className='contact__option'>
        <FaWhatsapp className='contact__option_icon'/>
        <h4>Whatsapp</h4>
        <h5>829-380-8296</h5>
        <a href="https://api.whatsapp.com/send?phone+8293808296">Send a message</a>
        </article>
      </div>
      {/* End of contact options*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your full Name' required/>
        <input type='text' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact