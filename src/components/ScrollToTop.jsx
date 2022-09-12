import React, { useEffect } from 'react'

const ScrollToTop = () => {

    useEffect(() => {    
      return () => {
        window.scrollTo(0,0);
      }
    }, [])
    

  return null
}

export default ScrollToTop