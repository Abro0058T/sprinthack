import React, { useState } from "react";
import "./DonorForm.css";

function DonorForm() {
  const [isDonor, setIsDonor] = useState(false);

  const toggleForm = () => {
    setIsDonor((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <form className="donor-form" onSubmit={handleSubmit}>
        <button className="toggler" onClick={toggleForm}>
          {isDonor ? "Request Donation" : "Become a Donor"}
        </button>
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Phone Number:
          <input type="number" required />
        </label>
        <label>
          Address:
          <input type="text" required />
        </label>
        <label>
          Blood Group:
          <input type="text" required />
        </label>

        {isDonor ? (
          <label>
            Organ/(s) to be donated:
            <input type="password" required />
          </label>
        ) : (
          <label>
            Organ Required:
            <input type="text" required />
          </label>
        )}
        <label>
          Description:
          <input type="text" />
        </label>
        <button className="submit" type="submit">
          {isDonor ? "Submit Donation" : "Submit Request"}
        </button>
      </form>
    </div>
  );
}

export default DonorForm;
