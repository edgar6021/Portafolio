import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
           <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
           </ul>
        </article>
        {/* End UI/UX*/ }
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
           <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
           </ul>
        </article>
        {/* End  of Web Development*/ }
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
           <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, maiores.</p>
            </li>
           </ul>
        </article>
        {/* End of Content Creation*/ }
        </div>
    </section>
  )
}

export default Service