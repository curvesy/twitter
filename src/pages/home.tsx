import React from 'react'
import Navbar from '../components/navbar'
import './home.css'
import '../index.css'
import Bg from '../assets/images/sina3.png'

function Home() {
  return (
    <div
      className="home gradient-bg-welcome"
      style={{
        backgroundImage: `url(${Bg})`,
        height: '100vh',
        width: '100vw',
        objectFit: 'contain',
      }}
    >
      <div className="navContainer">
        {/* <div className="imageW">
          <img className="imageName" src={Bg} alt="" />
        </div> */}
        <Navbar />
      </div>
      <div className="background">
        <p>please vote us</p>
      </div>
    </div>
  )
}

export default Home
