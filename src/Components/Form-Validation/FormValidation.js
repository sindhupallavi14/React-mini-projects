import React, { useState } from "react";
import "./FormValidation.css";

export default function FormValidation() {

    const [formData,setFormData]=useState({username:"",email:"",password:""})
    const [err,setErr]=useState({username:"",email:"",password:""})

    function handleformchange(e)
    {
        const {name,value} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
        console.log(formData);
        validinput(name,value);
    }

    function validinput(getName,getValue)
    {
       switch(getName)
       {
          case "username":
            setErr((prev)=>({
                ...prev,
                username:getValue.length<4 ?"username should contain atleast 4 characters":""
            }))
            break;
          case "email":
                setErr((prev)=>({
                    ...prev,
                    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue)?"":"invalid email address"
                }))
                break;
          case "password":
            setErr((prev)=>({
                ...prev,
                password:getValue.length<5 ? "password length must be more than 5":""
            }))
            break;
         default:
            break;
       }
      
    }

    
    
    function handleonSubmit(event){
        event.preventDefault();
        
        setFormData({username:"",email:"",password:""})

             
    // const validateErrors = {};

    // Object.keys(formData).forEach((dataItem) => {
    //   validinput(dataItem, formData[dataItem]);
    //   if (err[dataItem]) {
    //     validateErrors[dataItem] = err[dataItem];
    //   }
    // });

    // setErr((prevErrors) => ({
    //   ...prevErrors,
    //   ...validateErrors,
    // }));

    // if (Object.values(validateErrors).every((error) => error === "")) {
    //   //perform your form submission logic
    // } else {
    //   console.log("error is present. Please fix");
    // }
    }
    

    console.log(err);
    
  return (
    <div className="Formvalidation-con">
      <h2>Form-Validation</h2>
      <form onSubmit={handleonSubmit}>
        <div className="input-container">
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleformchange}
            placeholder="Enter UserName"
            value={formData.username}
          />
          <span>{err?.username}</span>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleformchange}
            placeholder="Enter Email"
            value={formData.email}
          />
          <span>{err?.email}</span>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleformchange}
            placeholder="Enter Password"
            value={formData.password}
          />
          <span>{err?.password}</span>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
