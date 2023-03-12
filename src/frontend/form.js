// import React from 'react'

// export default function form() {
//   return (
//     <div>
//       <h1>This is form section</h1>
//       <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//     </div>
//   )
// }

import React, { useState } from "react";
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidDob, setIsValidDob] = useState(true);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleDobChange = (event) => {
    console.log(event.target.value);
    setDob(event.target.value);
  };

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    console.log(event.target.value);
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dobDate = new Date(dob);
        const ageInMs = Date.now() - dobDate.getTime();
        const ageDate = new Date(ageInMs);
        const aage = Math.abs(ageDate.getUTCFullYear() - 1970); // Calculate the age in years
        //setAge(aage);
        console.log("This is age" , aage);
        if(aage<18){
          alert('User is less than 18');
          return;
        }
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        const phoneRegex = /^\d{10}$/; // regular expression to match 10-digit phone number format
        if (!phoneRegex.test(phone)) {
            alert('Phone number must be in 10-digit format');
            return;
        }
    console.log({ name, dob, email, phone });
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name}
          onChange={
            handleNameChange
          }
        />
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="date" value={dob}
        max={new Date().toISOString().split("T")[0]}
         onChange={
          handleDobChange
          } />
        </label>
      <br />
      <label>
        Email:
        <input type="email" value={email}

         onChange={
          handleEmailChange
          } 
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" value={phone}
         onChange={
          handlePhoneChange
          }
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Form;

