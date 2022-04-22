import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const AddGame =() =>{
  const [name, setName] = useState("");
  let gameId;
 
  const [rating,setRating] = useState("")
  const [review,setReview] = useState("")

  // This is triggered when form is submitted
  const newSubmitHandler = (e) => {

    const body = {
      name : name,
      rating : rating,
      review : review,
        
    }

    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/game`,body )
        .then((res) => {
        console.log(res.data);
        gameId = res.data.game._id;
       
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
          <h1 className="header1" >Gamer Nerds</h1>
          <h2 className="header2" >New Games and Reviews <Link to={"/"}>Home</Link></h2>
         
          
        </header>
        
      <form onSubmit={newSubmitHandler}>
       
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          value={name}
          required 
          minLength = "3"
          placeholder="Enter Game Name"
        />
        <input
        type="number"
          onChange={(e) => setRating(e.target.value)}
          name="rating"
          value={rating}
          required 
          min = "0"
          max = "10"
          placeholder="Enter Rating"
        />
        <input
          onChange={(e) => setReview(e.target.value)}
          name="review"
          value={review}
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