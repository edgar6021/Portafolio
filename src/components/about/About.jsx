import React from 'react'
import './about.css'
import ME from '../../assetl/edgar_foto3.png'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">

      <div className="container about-container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About_Image"/>
          </div>
          </div>
          <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+  Years Working </small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon'/>
              <h5>Clients</h5>
              <small>2+ Worldwide </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Proyects</h5>
              <small>3+ Completed </small>
            </article>
          </div>
          <p>
            With one year of full-stack development experience, I've become proficient in front-end technologies like HTML, CSS, and JavaScript, working with frameworks such as React and Angular. On the back-end, I've mastered Node.js, Python, and Java, building APIs and databases while ensuring data security. 
            This experience has equipped me to handle end-to-end software development effectively.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
        </div>

    </section>
  )
}

export default About