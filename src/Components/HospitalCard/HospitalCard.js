import React from 'react'
import Classes from "./HospitalCard.module.css"

function HospitalCard() {

  return (
    <div className={Classes.cardBox} >
        <div className={Classes.photo}></div>
        <div className={Classes.details}>
            <h1 className={Classes.heading}>Name</h1>
            <p className={Classes.data}>apollo</p>
            <h1 className={Classes.heading}>Address</h1>
            <p numberOfLines={1}  className={Classes.data}>efiewsuhbiudivwdvubhogeeregerhtjthmggger</p>
            <h1 className={Classes.heading}>Email</h1>
            <p className={Classes.data}>dffewfwef</p>
            <h1 className={Classes.heading}>PhoneNumber</h1>
            <p className={Classes.data}>wfwefewfwefe</p>
            <h1 className={Classes.heading}>Organ:-</h1>
            <p className={Classes.data}>effrgrr</p>
            <h1 className={Classes.heading}>Blood:-</h1>
            <p className={Classes.data}>fwewefwegewwe</p>
        </div>
    </div>
  )
}

export default HospitalCard