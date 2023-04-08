import React, { useState } from "react";
import "./DonorForm.css";

import  Axios  from "axios";
function DonorForm(props) {
  console.log(props)
  const [isDonor, setIsDonor] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhonenumber] = useState(0);
  const [address, setAddress] = useState("");
  const [organ, setorgan] = useState("");
  const [blood, setBlood] = useState("");
  const [description, setDescription] = useState("");

  const toggleForm = () => {
    setIsDonor((prevState) => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data={
      name,
      phoneNumber,email,
      address,
      organ,bloodGroup:blood,
      description
    }
    if(isDonor)
    {

      const post = await Axios.post(`http://localhost:4000/api/requestHospital/${props.email}`,data)
      window.alert("Volentear request send to hospital")
      console.log(post)
    }
    else{
      const post = await Axios.post(`http://localhost:4000/api/requestOrgan/${props.email}`,data)
      window.alert("Organ request send to hospital")
      console.log(post)
    }
  };

  return (
    <div className="form-container">
      <form className="donor-form" onSubmit={handleSubmit}>
        <button className="toggler" onClick={toggleForm}>
          {isDonor ? " Click to request " : "Click for Donor Form"}
        </button>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email}  onChange={(e)=>setEmail(e.target.value)} required />
        </label>
        <label>
          Phone Number:
          <input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e)=>setPhonenumber(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={address}  onChange={(e)=>setAddress(e.target.value)}required />
        </label>
        <label>
          Blood Group:
          <input type="text" name="blood"value={blood} onChange={(e)=>setBlood(e.target.value)} required />
        </label>
        <label>
          Organ:
          <input type="text" name="organ"value={organ}  onChange={(e)=>setorgan(e.target.value)}required />
        </label>
        <label>
          Description:
          <input type="text" name="description"  value={description}  onChange={(e)=>setDescription(e.target.value)}/>
        </label>
        <button className="submit" type="submit">
          {isDonor ? "Submit Donation" : "Submit Request"}
        </button>
      </form>
    </div>
  );
}

export default DonorForm;
