import React from 'react'
import CV from '../../assetl/cv.pdf'


const CTA = () => {
  return (
    <div className='cta'> 
    <a href={CV} download className='btn'>Downloand</a>
    <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA