import React from 'react'
import './navbar.css'
import logo from '../../assets/images/liskk.png'

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
)

function Navbar() {
  return (
    <nav className="navWrapper">
      <div className="logoW">
        <img
          className="logo"
          src={logo}
          alt="Lisk Logo Png Clipart@pikpng.com"
        />
      </div>

      <ul className="listWrapper">
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavBarItem key={item + index} title={item} classprops={undefined} />
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
