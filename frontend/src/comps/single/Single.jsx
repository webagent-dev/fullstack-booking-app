import React from 'react'
import './single.css'
import { SingleList } from '../../files'
const list = [1,2,3,4,5,6,7,8,9,10]
function Single() {
  return (
      <div className='single__page__container'>
          <div className="single__page__wrapper">
              <div className="single__page__header__container">
                  <div className="single__page__header">
                      <h1>Tower Street Apartments</h1>
                      <p><span></span> 5 Baszowa, Old Town, 33-332 Krakow, Poland</p>
                      <h2>Excellent location - 500m from center</h2>
                      <p className='text'>Book a stay over $114 at this property and get a free airport taxi</p>
                  </div>
                  <button className="single__page__header__btn">Reserve or Book Now!</button>
              </div>
              <div className="single__page__list">
                  {
                      list.map((item) => <SingleList key={item} />)
                }
              </div>
              <div className="single__other__container">
                  <div className="single__other__content">
                      <h1 className="single__other__header">Stay in the heart of Krakow</h1>
                      <p className="single__other__text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, molestias ut consequatur labore distinctio laboriosam necessitatibus fuga modi ratione, quos aliquam quo explicabo ipsum voluptatem repudiandae ipsa numquam, exercitationem inventore omnis quibusdam molestiae debitis quaerat facere? Sequi aliquam quis ex tempore omnis. Delectus animi iusto fugit, facilis quia ipsum culpa.
                      </p>
                  </div>
                  <div className="single__other__card">
                      <h2 className="single__card__header">Perfect for a 9-night stay</h2>
                      <p className="single__card__">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus in ab,</p>
                      <h2 className="single__card__price">$945 <span>(9 nights)</span></h2>
                      <button className="single__card__btn">Reserve or Book Now!</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Single