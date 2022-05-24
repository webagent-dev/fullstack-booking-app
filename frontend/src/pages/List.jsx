import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, Header, Hotel } from '../files'
function List() {
  const Location = useLocation()
  const data = Location.state
  return (
    <div className='list__container'>
      <Navbar />
      <Header type='list' />
      <Hotel data={data}/>
    </div>
  )
}

export default List