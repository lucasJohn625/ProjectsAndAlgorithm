import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css"


const DisplayAll = () => {

    const [blogList, setBlogList] = useState([]);

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/blogs')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setBlogList([...blogList,...res.data]);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    
 console.log(blogList);


    return (
        <div>
            <header>
                <h1 className="header1">Game review</h1>
                <h2 className="header2">All blogs
               
                <Link to={"/addgame"}>Add a game</Link>   
                <Link to={"/profile"}>Profile</Link>  
                </h2>
            </header>
            <table style={{ margin: "auto", border: "1px solid black" }}>
                <thead style={{ backgroundColor: "lightgray", color: "white" }}>
                    
                    <tr>
                        <th>Games</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogList ?
                            
                            blogList.map((blog, index) => (
                                <tr key={index}>
                                    
                                    <td>{blog.name}</td>
                                   
                                    <td> {blog.review}
                                       
                                       {/* <Link to={`/${blog._id}/reviews`} > <button className='edit-button-style' >Read Reviews</button></Link>
                                       <Link to={`/${blog._id}/addreview`} > <button className='edit-button-style' >Add Reviews</button></Link>
                                         */}
                                    </td>
                                </tr>
                            ))
                            : null
                    }
                </tbody>
            </table>
        </div>
    )
}


export default DisplayAll;