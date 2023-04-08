import React from 'react'
import Classes from "./HospitalCard.module.css"
import { useEffect, useState } from 'react'
import  Axios  from 'axios'
import { useNavigate } from 'react-router-dom'
function HospitalCard() {
  const navigate=useNavigate()
  const [hospitals,setHospital]=useState()
  useEffect(()=>{
    data()
  },[])
  const data= async()=>{
    const response=await Axios.get("http://localhost:4000/api/allHospitals")
    setHospital(response.data.hospital)
  }
console.log(hospitals)
const hospitalpage=(e)=>{
navigate(`/hospitalpage/${e}`,{state:{id:e}})
}
  return (
    <>
          {hospitals && hospitals.map(hospital=>
    <div className={Classes.cardBox} key={hospital.id} onClick={()=>hospitalpage(hospital.id)}>
     
        <div className={Classes.photo}></div>
        <div className={Classes.details}>
        <h1 className={Classes.heading}>Name</h1>
        <p className={Classes.data}>{hospital.name}</p>
        <h1 className={Classes.heading}>Address</h1>
        <p   className={Classes.data}>{hospital.address}</p>
        <h1 className={Classes.heading}>Email</h1>
        <p className={Classes.data}>{hospital.email}</p>
        <h1 className={Classes.heading}>PhoneNumber</h1>
        <p className={Classes.data}>{hospital.phoneNumber}</p>
        <h1 className={Classes.heading}>Organ:-</h1>
        <p className={Classes.data}>{hospital.organ}</p>
              <h1 className={Classes.heading}>Blood:-</h1>
              <p className={Classes.data}>{hospital.blood}</p>
              </div>
       
          </div>
          )
        }
        </>
        )}

export default HospitalCard