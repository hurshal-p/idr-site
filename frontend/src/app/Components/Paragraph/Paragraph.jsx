import React from 'react'
import './Paragraph.css'


const Paragraph = ({title, content}) => {
  return (
    <div className='text-inherit'>
    <h3>{title}</h3>
    <p className='text-inherit text-white'>{content}</p>
    </div>
  )
}

export default Paragraph