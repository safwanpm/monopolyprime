import AboutPage from '@/components/About'
import ContactSignature from '@/components/Contact'
import TitanMonolithFooter from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <div className=''>
      <Navbar/>
      <AboutPage className=""/>
      <ContactSignature/>
      <TitanMonolithFooter/>
    </div>
  )
}

export default page
