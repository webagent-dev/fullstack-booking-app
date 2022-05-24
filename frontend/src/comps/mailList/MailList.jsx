import React from 'react'
import './maillist.css'
function MailList() {
  return (
      <div className='mail__container'>
          <div className="mail__wrapper">
              <h1 className="mail__header">Save time, save money</h1>
              <span className="mail__text">Sign up and we' ll send the best deals to you</span>
              <div className="form__container">
                  <input type="text" placeholder='your email'  />
                  <button className="form__btn">Subscribe</button>
              </div>
          </div>
    </div>
  )
}

export default MailList