import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="カメテック" style={{ width: '300px' }} />
          </figure>
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
