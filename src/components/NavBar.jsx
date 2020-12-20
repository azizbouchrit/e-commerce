import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const NavBar = props => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light  nav-bar'>
      <Link to='/' className='navbar-brand' href='#'>
        <img src={logo} className="logo-img" alt='' />
        <span style={{color: "#484848"}}> <span className="green">Clean</span> Skin</span>
      </Link>
      {/* <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button> */}
      {/* <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav navbar-right'>
          <a className='nav-link active' href='#'>
            Accueil <span className='sr-only'>(current)</span>
          </a>
          <a className='nav-link' href='#'>
            Clothing
          </a>
          <a className='nav-link' href='#'>
            Shoes
          </a>
          <a className='nav-link' href='#'>
            Make Up
          </a>
        </div>
      </div> */}
    </nav>
  )
}

export default NavBar
