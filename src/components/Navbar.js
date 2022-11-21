// use shortcut rfc to write the code for react function based component 
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'



export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <div className={`form-check form-switch ${props.mode==='dark'?'text-light':''}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.enableMode} Drak Mode`}</label>
      </div>
    </div>
  </div>
</nav>
  )
}


//isRequired needed if prop value is needed and will through an error if prop is not passed
Navbar.prototype={
    title : PropTypes.string.isRequired
}
Navbar.defaultProps={
    title : "TextUtilss"
}