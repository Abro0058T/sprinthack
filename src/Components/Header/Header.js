import React from 'react'
import Classes from "./Header.module.css"
import Notification from '../Icons/Notification'
function Header() {
  return (
    <div className={Classes.header}>
        <div className={Classes.notefication}>
            <Notification/>
        </div>
        <div className={Classes.logo}></div>
        <div className={Classes.buttons}>
            <button className={Classes.btn}>Request Donation</button>
            <button className={Classes.btn}>Become a Donar</button>
        </div>
    </div>
  )
}

export default Header