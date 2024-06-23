import React from 'react'
import Navbar from '../components/landing_page/Navbar'
import Header from '../components/landing_page/Header'
import Why_choose_us from '../components/landing_page/Why_choose_us'
import About_us from '../components/landing_page/About_us'
import Account from '../components/landing_page/Account'
import Partner from '../components/landing_page/Partner'
import Contact_us from '../components/landing_page/Contect_us'

function Website() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Why_choose_us/>
      <About_us/>
      <Account/>
      <Partner/>
      <Contact_us/>
    </>
  )
}

export default Website
