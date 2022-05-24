import React from 'react'
import './feature.css'
function Feature() {
  return (
      <div className='feature__container'>
          <div className="feature__wrapper">
              <img src="/bg-1.png" alt="" className="feature__image" />
              <div className="feature__content">
                  <h1 className="feature__header">Head world</h1>
                  <h2 className="feature__text">2345 dublin</h2>
              </div>
      </div>
                <div className="feature__wrapper">
              <img src="/bg.png" alt="" className="feature__image" />
              <div className="feature__content">
                  <h1 className="feature__header">Head world</h1>
                  <h2 className="feature__text">2345 dublin</h2>
              </div>
      </div>
                <div className="feature__wrapper">
              <img src="/bg-2.png" alt="" className="feature__image" />
              <div className="feature__content">
                  <h1 className="feature__header">Head world</h1>
                  <h2 className="feature__text">2345 dublin</h2>
              </div>
          </div>
    </div>
  )
}

export default Feature