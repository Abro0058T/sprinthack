import React, { useState,useEffect } from 'react'
import Header from '../Header/Header'
import Classes from "./HospitalPage.module.css"
import Axios from "axios"
import axios from 'axios'
import { useLocation } from 'react-router-dom'
function HospitalPage() {
  const location=useLocation()
  console.log(location.state.id)
  const [data,setData]=useState()
  useEffect(()=>{
    getdata()
  },[])
  const getdata= async()=>{
    const response= await Axios.get(`http://localhost:4000/api/hospital/${location.state.id}`)
    setData(response.data.hospital)
  }
  return (
    <div>
        <Header/>
        <div className={Classes.box}>
        <div className={Classes.details}>
            <div className={Classes.hospitalPic}>PIC</div>
            <div className={Classes.map}>MAP</div>

{
  data &&
            <div className={Classes.data}>
            <h1 className={Classes.heading}>Name</h1>
            <p className={Classes.data1}>{data[0].name}</p>
            <h1 className={Classes.heading}>Address</h1>
            <p  className={Classes.data1}>{data[0].address}</p>
            <h1 className={Classes.heading}>Email</h1>
            <p className={Classes.data1}>{data[0].email}</p>
            <h1 className={Classes.heading}>Phone Number</h1>
            <p className={Classes.data1}>{data[0].phoneNumber}</p>
            <h1 className={Classes.heading}>Organ:-</h1>
            <p className={Classes.data1}>{data[0].organ}</p>
            <h1 className={Classes.heading}>Blood:-</h1>
            <p className={Classes.data1}>{data[0].blood}</p>
            </div>
           } 
        </div>
        <div className={Classes.form}>FORM</div>
        </div>
        {/* <button onClick={getdata}>click me </button> */}
    </div>

  )
}

export default HospitalPage