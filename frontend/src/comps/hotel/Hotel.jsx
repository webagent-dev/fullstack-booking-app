import React, { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import './hotel.css'
function Hotel({ data }) {
    const [getDate, setGetDate] = useState(data.date)
    const [getLocation, setGetLocation] =  useState(data.location)
    const [getRoom, setGetRoom] = useState(data.choose)
    const [openDate, setOpenDate ] = useState(false)
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
                      
                  </div>
              </div>
              <div className="search__result"></div>
            </div>
      </div>
  )
}

export default Hotel