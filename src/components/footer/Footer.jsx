import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
 const currentYear = new Date().getFullYear();
  return (
    <footer>
      <a href="#" className='footer__logo'>Edgar De la Rosa</a>

        <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portafolio">Portfolio</a></li>
        <li><a href="#testimoniols">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>

      <div className='footer__socials'>
        <a href="https://www.facebook.com/edgaralberto.delarosa/"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/tech_e_and_e/"><GrInstagram/></a>
        <a href="https://twitter.com/EdgaralbertoDm"><AiOutlineTwitter/></a>
        </div>
      <div className="footer__copyright">
      <small>Copyright {currentYear} | powered by Edgar De la Rosa.</small>
      </div>
      </footer>
  )
}

export default Footer