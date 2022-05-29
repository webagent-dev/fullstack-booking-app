import { useState } from 'react'
import './header.css'
import './toggle.css'
import { FaBath,FaPlane,FaCar,FaPeopleArrows,FaCalendarAlt,FaLuggageCart } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'
import { MdNaturePeople } from 'react-icons/md'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
function Header({ type }) {
  const [location, setLocation] = useState('')
  const [getSmallToggle, setGetSmallToggle] = useState(false)
  const [open, setOpen] = useState(false)
  const [option, setOption] = useState(false)
  const [choose, setChoose] = useState({
    adult: 1,
    children: 0,
    room: 1
  })
  const Navigate = useNavigate()
  const handleOption = (name, operation) => {
    setChoose(prev => {
      return {
        ...prev, 
        [name]: operation === 'i' ? choose[name] + 1 : choose[name] - 1
      }  })
  }
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ])
  const handleSubmit = () => {
    Navigate('/hotel', {state: {location, date, choose}})
  }
  return (
      <div className='header__container'>
      <div className={ type === 'list'  ? 'header__wrapper list__mode ' : 'header__wrapper' }>
        <div className="icon__container">
          <div className="icons active">
            <FaBath  size='30px'/> 
            <h3 className='icon__text'>Stays</h3>
          </div>
          <div className="icons">
            <FaPlane size='30px' />
          <h3 className='icon__text'>Flights</h3> 
          </div>
          <div className="icons">
            <FaCar size='30px' />
            <h3 className='icon__text'>Car Rentals</h3>
          </div>
          <div className="icons">
            <FaPeopleArrows size='30px' />
            <h3 className='icon__text'>Attractions</h3>
          </div>
          <div className="icons">
            <GiCommercialAirplane size='30px'/>
            <h3 className='icon__text'>Airport taxis</h3>
          </div>
        </div>
        {
          type !==  'list' &&
          <>
        <h1 className="header__title">A Lifetime of discounts? It's Genius.</h1>
            <p className="header__desc">Get rewarded for your travels  unlock instant savings of 10% or more with a free Booker account</p>
            <div className="header__btn__container">
              <button className="header__btn">Sign in / Register</button>
              </div>
        <div className="header__search">
          <div className="search__input">
            <FaLuggageCart color='lightgray' size='20px' />
            <input
              type="text"
              className="input"
              placeholder='where are you going'
              required
                  autoFocus
                  onChange={(e) => setLocation(e.target.value)}
            />
            </div>
          <div className="search__input">
            <FaCalendarAlt color='lightgray' size='20px' />
            <div className="item__wrapper">
            <p onClick={() => setOpen(!open)} className='display__date'>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].startDate, 'MM/dd/yyyy')}`} </p>
            <div className="item">
                               { open && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
                      ranges={date}
                          minDate={new Date()}
              className='date'
            />
            }
              </div>
              </div>
          </div>
          <div className="search__input">
            <MdNaturePeople color='lightgray' size='20px' />
            <div className="item__wrapper">
              <p onClick={() => setOption(!option)} className='display__date'>{choose.adult} adult - {choose.children } children - {choose.room} room </p>
              {
                option &&
                <div className="select">
                  <div className="option">
                    <h3 className="name">Adult</h3>
                    <div className="control">
                      <button className="i__btn" disabled={choose.adult <= 1} onClick={() => handleOption('adult', 'd')}>-</button>
                        <div className="num">{choose.adult}</div>
                      <button className="i__btn" onClick={() => handleOption('adult', 'i')}>+</button>
                    </div>
                  </div>
                                  <div className="option">
                    <h3 className="name">children</h3>
                    <div className="control">
                        <button className="i__btn" disabled={choose.children <= 0} onClick={() => handleOption('children', 'd')}>-</button>
                           <div className="num">{choose.children}</div>
                      <button className="i__btn" onClick={() => handleOption('children', 'i')}>+</button>
                    </div>
                  </div>
                                    <div className="option">
                    <h3 className="name">room</h3>
                    <div className="control">
                      <button className="i__btn"disabled={choose.room <= 1} onClick={() => handleOption('room', 'd')}>-</button>
                        <div className="num">{choose.room }</div>
                      <button className="i__btn" onClick={() => handleOption('room', 'i')}>+</button>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
          <div className="search__input">
            <button onClick={handleSubmit} className="search__btn">Search</button>
          </div>
            </div>
            </>
        }
        <div className='header__btn__container toggle'>
          <button className=" header__btn get__small" onClick={() => setGetSmallToggle(true)}>Search Location</button>
        </div>
           {
        getSmallToggle && (
          <div className="small__toggle__container">
            <h1>we are doing new thing here</h1>
          </div>
        )
      }
      </div>
      </div>
  )
}

export default Header