import React from 'react'
import './result.css'
function Result() {
  return (
      <div className='result__container'>
          <img src="/bg-2.png" alt="result__pic"  className='result__pic'/>
          <div className="result__desc">
              <h1 className="desc__header">Tower Street Apartments</h1>
              <p>500m for center</p>
              <button className="desc__btn">Free airport taxi</button>
              <h2>studio Apartment with Air conditioning</h2>
              <h3>Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed</h3>
              <h2 className="desc__can">Free cancellation</h2>
              <p className='desc__text'>You can cancel later, so lock in this great price today</p>
          </div>
          <div className="result__other">
              <div className="other__wrap">
                  <span>Excellent</span>
                  <button className="wrap__btn">5.8</button>
              </div>
              <div className="other__other__container">
                  <h2 className="other__price">$123</h2>
                  <div className="other__other__wrap">
                      <p>Include taxes and fees</p>
                      <button className="other__other__btn">
            See availability
                      </button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Result