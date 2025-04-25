import React, { useState } from "react";
import "./Content.css";
export default function Content() {
  let [formData, setFormData] = useState({
    sr: "",
    email: "",
    username: "",
    role: "Student",
  });

  let handleUser = (event) => {
    let fieldName = event.target.name;  
    let fieldValue = event.target.value; 
    setFormData((currData) => {
      return { ...currData, [fieldName]: fieldValue }; 
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      sr: "",
      email: "",
      username: "",
      role: "Student", 
    });
  };

  return (
    <div className="content">
        <div className="nav">
          <div>Sr.No</div>
          <div>User Email</div>
          <div>User Name</div>
          <div>User Role</div>
          <div>Action</div>
          <button>Add User</button>
        </div>
      <form onSubmit={handleSubmit} className="form">
      
      <div>1</div>
        <div>

         
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleUser}
          />
        </div>

        <div>
        
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleUser}
          />
        </div>


        <button type="submit">Edit</button>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
