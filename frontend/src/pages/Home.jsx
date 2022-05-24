import React from 'react'
import { Header, Navbar, Feature, Type, Property, MainProperty, MailList, Footer } from '../files'
function Home() {
  return (
    <div className='home__container'>
      <div>
      <Navbar />
        <Header />
        </div>
      <Feature />
      <Type text='Browse by property type' />
      <Property />
      <Type text='Home guests love' />
      <MainProperty />
      <MailList />
      <Footer />
    </div>
  )
}

export default Home

