// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import "../App.css"

// const NewReview =() =>{
  
//   const {id} = useParams(); // getting the id parameter from the page url
//   const [user,setUser] = useState("");
//   const [blogRating,setBlogRating] = useState("")
//   const [blogReview,setBlogReview] = useState("")
//   const [blogName,setBlogName] = useState("")
//   // This is triggered when form is submitted
//   const newSubmitHandler = (e) => {
//     e.preventDefault();
//     const reviewBody = { // the body conatining the values needed to create a review ( the namings are dependent on the schema and its case-sensitive )
//         blogId : id,
//         review : {
//           userName : user,
//           rating : blogRating,
//           review : blogReview
//         }
//       }
//       axios.post(`http://localhost:8000/api/review`,reviewBody).then(()=>{ // creating a post request to the review api
//         alert("You're movie and review has been uploaded created ")
//         window.location.href="/"
//       }).catch(err=>{
//         console.error(err)
//       })
      
//   }

//   useEffect(()=>{
//     axios.get(`http://localhost:8000/api/blogs/${id}`).then((e)=>{
//         setBlogName(e.data.blog.name)
//         console.log(e.data)
//     }).catch(err=>{
//         console.error(err)
//     })
//   },[])

  
 

//   return (
    
//       <div className="nrDiv" >
    
       
//           <h1 className="header1">Moldy Tomatoes</h1>
//           <h2 className="header2">New Review for {blogName} <Link to={"/"}>Home</Link></h2>
         
         
       
      
        
//       <form onSubmit={newSubmitHandler}>
       
       
//         <input
//           onChange={(e) => setUser(e.target.value)}
//           name="username"
//           placeholder="Enter your name"
//           value={user}
//           required
//           minLength = "3"
//         />
//         <input
//         type="number"
//           onChange={(e) => setBlogRating(e.target.value)}
//           name="blogRating"
//           placeholder="Enter Blog Rating"
//           value={blogRating}
//           required
//         />
//         <input
//           onChange={(e) => setBlogReview(e.target.value)}
//           name="blogReview"
//           placeholder="Enter your review"
//           value={blogReview}
//           required
//           minLength = "5"
//         />
        
//         <button type="submit" >Submit</button>
        
//      <Link to="/" >   <button >Cancel</button></Link>
//       </form>
//     </div>
//   );
// };

// export default NewReview