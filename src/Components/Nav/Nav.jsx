import React, { useState, useEffect} from 'react'
// import logo from './images/icon/logo.png'
import avatar from './images/avatar.png'

import './nav.css'

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
    window.addEventListener('scroll', () => {
if (window.scrollY > 100) {
    handleShow(true);
} else handleShow(false);

    })
    return () => {
        window.removeEventListener('scroll',[]);
    }
    }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`} >
    <img 
    className='nav_logo'
    src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt='Netflix Logo'
    />

    <img 
    className='nav_avatar'
    src={avatar}
    alt='Avatar Logo'
    />
      
    </div>
  )
}

export default Nav
