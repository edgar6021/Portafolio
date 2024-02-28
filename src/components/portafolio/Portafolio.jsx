import React from 'react'
import './portafolio.css'
import IMG1 from '../../assetl/portfolio1.jpg'
import IMG2 from '../../assetl/portfolio2.jpg'
import IMG3 from '../../assetl/portfolio3.jpg'
import IMG4 from '../../assetl/portfolio4.jpg'
import IMG5 from '../../assetl/portfolio5.png'
import IMG6 from '../../assetl/portfolio6.jpg'

// Do NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is a portfolio item title',
    github: 'https://github.com/edgar6021',
    demo: 'https://dribbble.com/Tech_e_and_e',
  }, 
  {
    id: 2,
    image: IMG2,
    title: 'This is a portfolio item title',
    github: 'https://github.com/edgar6021',
    demo: 'https://dribbble.com/Tech_e_and_e',
  },

  {
    id: 3,
    image: IMG3,
    title: 'This is a portfolio item title',
    github: 'https://github.com/edgar6021',
    demo: 'https://dribbble.com/Tech_e_and_e',
  },
  {
    id: 4,
    image: IMG4,
    title: 'This is a portfolio item title',
    github: 'https://github.com/edgar6021',
    demo: 'https://dribbble.com/Tech_e_and_e',
  },
  {
    id: 5,
    image: IMG5,
    title: 'This is a portfolio item title',
    github: 'https://github.com/edgar6021',
    demo: 'https://dribbble.com/Tech_e_and_e',
  },
  {
    id: 6,
    image: IMG6,
    title: 'This is a portfolio item title',
    github: 'https://github.com/edgar6021',
    demo: 'https://dribbble.com/Tech_e_and_e',
  },

]


const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>

      <div className=" container portafolio-container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
          <article key={id} className='portafolio__item'>
          <div className="portafolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portafolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portafolio