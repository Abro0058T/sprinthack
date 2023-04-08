import React, { useState } from 'react'
import Classes from "./Header.module.css"
import Notification from '../Icons/Notification'
import { Link } from 'react-router-dom'
import logo from '../../logo.jpg'
function Header() {
  const [Notificationvisible,Notificationtoggle]=useState(false)
  return (
    <div className={Classes.header}>
        <div className={Classes.notefication}>
            <Link to='/notification'>
            <Notification />
            </Link>
        </div>
        <div className={Classes.logo}>
          <Link to='/'><img src={logo}  className={Classes.image} alt="Logo" /></Link>
        </div>
        <div className={Classes.buttons}>
          <Link to='/requestpage'>
            <button className={Classes.btn}>Request Donation</button>
          </Link>
          <Link to='/donorpage'>
            <button className={Classes.btn}>Become a Donar</button>
          </Link>
        </div>
    </div>
  )
}

export default Header