import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Classes from './Notification.module.css'
import Header from '../Header/Header'
function Notification() {
    const [data,setData]=useState()
    useEffect(()=>{
        getNotification()
    })
    const getNotification=async ()=>{
        const data= await Axios.get("http://localhost:4000/api/getAllRequest")
        console.log(data.data.request)
        setData(data.data.request)
    }
  return (
    <div>
        <Header/>
        <h2>Notification</h2>
        <div style={{width:"90%",overflow:"scroll",marginLeft:"30px"}}>

        {
            data && data.map(request=>
                
                <div className={Classes.row}>
            <h1>Name:-{request.name}</h1>
            <p>Email:-{request.email}</p>
            <p>Address:-{request.address}</p>
            <p>PhoneNumber:-{request.phoneNumber}</p>
            <p>Request:-{request.request}</p>
        </div>
                )
            }
            </div>
    </div>
  )
}

export default Notification