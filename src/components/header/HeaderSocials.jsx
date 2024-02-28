import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'



function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/edgar-alberto-de-la-rosa-minaya-87749b213/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/edgar6021" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com/Tech_e_and_e" target="_blank"><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocials