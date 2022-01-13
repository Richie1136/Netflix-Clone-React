import './NavBar.css'
import { useEffect, useState } from 'react'

const NavBar = () => {

  const [handleShow, setHandleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.screenY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    }
  }, [])

  return (
    <div className={`nav ${handleShow && 'nav-black'}`}>
      <img className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix logo' />
      <img className='nav-avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix logo' />
    </div>
  )
}

export default NavBar
