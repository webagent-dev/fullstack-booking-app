import React from 'react'
import './navbar.css'
function Navbar() {
  return (
      <div className='navbar__container'>
          <div className='navbar__wrapper'>
        <h2 className='logo'>booker</h2>
              <div className="auth__container">
                  <button className="auth__btn">register</button>
                  <button className="auth__btn">login</button>
              </div>
          </div>
    </div>
  )
}

export default Navbar