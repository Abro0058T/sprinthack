import React from 'react'
import Header from '../Header/Header'
import Classes from "./HospitalPage.module.css"
function HospitalPage() {
  return (
    <div>
        <Header/>
        <div className={Classes.box}>
        <div className={Classes.details}>
            <div className={Classes.hospitalPic}>PIC</div>
            <div className={Classes.map}>MAP</div>
            <div className={Classes.data}>
            <h1 className={Classes.heading}>Name</h1>
            <p className={Classes.data1}>1apollo</p>
            <h1 className={Classes.heading}>Address</h1>
            <p  className={Classes.data1}>efiewsuhbiudivwdvubhogeeregerhtjthmggger</p>
            <h1 className={Classes.heading}>Email</h1>
            <p className={Classes.data1}>dffewfwef</p>
            <h1 className={Classes.heading}>Phone Number</h1>
            <p className={Classes.data1}>wfwefewfwefe</p>
            <h1 className={Classes.heading}>Organ:-</h1>
            <p className={Classes.data1}>effrgrr</p>
            <h1 className={Classes.heading}>Blood:-</h1>
            <p className={Classes.data1}>fwewefwegewwe</p>
            </div>
            
        </div>
        <div className={Classes.form}>FORM</div>
        </div>
    </div>

  )
}

export default HospitalPage