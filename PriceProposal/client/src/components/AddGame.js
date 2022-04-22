import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const AddGame =() =>{
  const [blogName, setBlogName] = useState("");
  let blogId;
  const [user,setUser] = useState("");
  const [blogRating,setBlogRating] = useState("")
  const [blogReview,setBlogReview] = useState("")

  // This is triggered when form is submitted
  const newSubmitHandler = (e) => {

    const body = {
      name : blogName,
      blogTitle : blogName,
      userName : user,
      rating : blogRating,
      review : blogReview,
        
    }

    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/blogs`,body ).then((res) => {
        console.log(res.data);
        blogId = res.data.blog._id;
       
        window.location.href="/";
      })
      .catch((err) => {
        console.log(err);
        // setErrors(err.response.data.errors);
      })
      
  }


  return (
    <div  className="nmdiv">
     
        <header>
        
          <h1 className="header2" >New Games and Reviews <Link to={"/"}>Home</Link></h1>
         
          
        </header>
        
      <form onSubmit={newSubmitHandler}>
       
        <input
          onChange={(e) => setBlogName(e.target.value)}
          name="blogName"
          value={blogName}
          required 
          minLength = "3"
          placeholder="Enter Game Name"
        />
        <input
          onChange={(e) => setUser(e.target.value)}
          name="username"
          value={user}
          required 
          minLength = "3"
          placeholder="Enter User Name"
        />
        <input
        type="number"
          onChange={(e) => setBlogRating(e.target.value)}
          name="blogRating"
          value={blogRating}
          required 
          min = "0"
          max = "10"
          placeholder="Enter Rating"
        />
        <input
          onChange={(e) => setBlogReview(e.target.value)}
          name="blogReview"
          value={blogReview}
          required 
          minLength = "5"
          placeholder="Enter Review"
        />
       
        <button type="submit" >Submit</button> 
        
     <Link to="/" >   <button >Cancel</button></Link>
      </form>
    </div>
  );
}

export default AddGame