import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css"
import GameInfo from './GameInfo';

const DisplayAll = () => {

   
    
    
    const [blogList, setBlogList] = useState([]);
    const [updateInfo,setUpdateInfo] = useState({})

    const changeHandler = e => {
        setUpdateInfo(info=>({...info,[e.target.name]:e.target.value}))
    }

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
    const deleteHandler = (idFromBelow)=>{ 
        axios.delete(`http://localhost:8000/api/blogs/${idFromBelow}`)          
        .then((res)=>{
            console.log(res.data);
            const filteredBlogs = blogList.filter((blog) => {
                return blog._id !== idFromBelow;
            });
            setBlogList(filteredBlogs);
       })
        .catch((err)=>{
            console.log(err);
        })
    }  
 
   const updateHandler = (id) => {
       console.log(id)
    //    e.preventDefault();
       axios.put(`http://localhost:8000/api/blogs/${id}`, updateInfo).then(res=>{
           console.log(res);
           alert('Your game has been updated!');
           window.location.reload()
       }).catch(err=>{
           console.error(err);
           alert('Oops! Something went wrong!')
       })
   }


    return (
        <div>
                <h1 className="header1 grid place-items-center  py-10 bg-black text-white text-2xl font-semibold px-4  ">Game review</h1>
            <header className="h-20 py-5 border-2 border-black  flex justify-evenly items-center " >
                <h2 className="header2">All blogs
               
                </h2>
                <Link to={"/addgame"}>Add a game</Link>   
                <Link to={"/profile"}>Profile</Link>  
            </header>
            
            <table className="w-[90%] mx-auto py-10 mt-5 ">
                <thead  >
                    
                    <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600 '   >
                        <th className="px-4 py-3" >Games</th>
                        <th className="px-4 py-3" >Reviews</th>
                        <th className="px-4 py-3" >Rating</th>
                        <th className="px-4 py-3" >Update</th>
                        <th className="px-4 py-3" >Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogList ?
                            
                            blogList.map((blog, index) => (
                                <GameInfo changeHandler={changeHandler}  blog={blog} key={index} deleteHandler={deleteHandler} updateHandler={updateHandler} />
                            ))
                            : null
                    }
                </tbody>
            </table>
        </div>
    )
}


export default DisplayAll;