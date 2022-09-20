import React from 'react'
import { useNavigate } from 'react-router-dom';

const GaleryHomeItem = ({ url }) => {

  const navigate = useNavigate();

  const handleClick = () => {

    // Fullscreen es la url del modal
    navigate(`galery?fullscreen=${url}`);
  }

  return (
    <div className='galery_home__item fadeIn' onClick={handleClick}>
        <img src={url} alt="img galeryitem" />
    </div>
  )
}

export default GaleryHomeItem