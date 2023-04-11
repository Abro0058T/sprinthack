import React ,{useState}from 'react'
import Header from '../Header/Header'
import DonorForm from '../Form/DonorForm'
import Axios from 'axios'
function DonarPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhonenumber] = useState(0);
    const [address, setAddress] = useState("");
    const [organ, setorgan] = useState("");
    const [blood, setBlood] = useState("");
    const [description, setDescription] = useState("");
  

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data={
        name,
        phoneNumber,email,
        address,
        organ,bloodGroup:blood,
        description
      }

        const post = await Axios.post(`http://localhost:4000/api/requestallhospitals`,data)
        window.alert("Organ request send to All hospital")
        console.log(post)
    };
  return (
    <>
    <div><Header/></div>
    <div style={{marginLeft:"35em"}}>
<h2>Become a donor</h2>
<p>Fill this form to become an organ donor</p>
</div>
    <div className="form-container">
      <form className="donor-form" onSubmit={handleSubmit}>
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
         Submit Donation
        </button>
      </form>
    </div>
    </>

  )
}

export default DonarPage