import React from 'react'
import { useNavigate } from 'react-router-dom';
import imgtest from '../../../assets/Our2.jpg';

const GaleryHomeItem = () => {

  const navigate = useNavigate();

  const handleClick = () => {

    // Fullscreen es la url del modal
    navigate('galery?fullscreen=url_test');
  }

  return (
    <div className='galery_home__item' onClick={handleClick}>
        <img src={imgtest} alt="img galeryitem" />
    </div>
  )
}

export default GaleryHomeItem