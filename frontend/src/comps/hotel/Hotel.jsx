import React, { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { Result } from '../../files'
import './hotel.css'
const result = [1,2,3,4,5]
function Hotel({ data }) {
    const [getDate, setGetDate] = useState(data.date)
    const [getLocation, setGetLocation] =  useState(data.location)
    const [getRoom, setGetRoom] = useState(data.choose)
    const [openDate, setOpenDate ] = useState(false)
    const [options, setOptions ] = useState(1)
  return (
      <div className='hotel__container'>
          <div className="hotel__wrapper">
              <div className="search__table">
                  <div className="table__title">Search</div>
                  <div className="table__list">
                      <label>Destination</label>
                      <input placeholder={getLocation }/>
                  </div>
                        <div className="table__list">
                      <label>Check-in Date</label>
                      <span onClick={() => setOpenDate(!openDate)}>{`${format(getDate[0].startDate, 'MM/dd/yyyy')} to ${format(getDate[0].endDate, 'MM/dd/yyyy')}`}</span>
                      {
                          openDate &&
                          <DateRange
                              minDate={new Date()}
                              onChange={(item) => setGetDate([item.selection])}
                              className='table__date'
                          />
                      }
                  </div>
                      <div className="table__list">
                      <label>Options</label>
                      <div className="table__option__container">
                          <span className='option__text'>
                              Min price
                              <small>per night</small>
                          </span>
                          <input    className='table__input' />
                      </div>
                           <div className="table__option__container">
                          <span className='option__text'>
                              Max price
                              <small>per night</small>
                          </span>
                          <input     className='table__input' />
                      </div>
                           <div className="table__option__container">
                          <span className='option__text'>
                              Adult
                          </span>
                          <input
                              type='number'
                              min={1}
                              className='table__input'
                              placeholder={options.adult}
                          />
                      </div>
                           <div className="table__option__container">
                          <span className='option__text'>
                              Children
                          </span>
                          <input
                              type='number'
                              min={0}
                              className='table__input'
                              placeholder={options.children}
                          />
                      </div>
                           <div className="table__option__container">
                          <span className='option__text'>
                               Room
                          </span>
                          <input
                              type='number'
                              min={1}
                              className='table__input'
                              placeholder={options.room} />
                      </div>
                  </div>
                  <button className='table__btn'>Search</button>
              </div>
              <div className="search__result">
                  {result.map((item) => <Result key={item} />)
                  }
              </div>
            </div>
      </div>
  )
}

export default Hotel