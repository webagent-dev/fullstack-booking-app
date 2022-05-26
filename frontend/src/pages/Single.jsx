import React from 'react'
import { Navbar, Header, Footer, MailList, SinglePage } from '../files'
function Single() {
  return (
      <div className='single__container'>
          <Navbar />
      <Header type='list' />
      <SinglePage />
          <MailList />
          <Footer />
    </div>
  )
}

export default Single