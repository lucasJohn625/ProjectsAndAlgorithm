import axios from 'axios';
import React, {useState} from 'react';
import { Link, Navigate } from "react-router-dom";

const Profile = () => {
    const [userName,setUsername] = useState("");
    const [userImg,setUserImg] = useState("");
    const [userDesc,setUserDesc] = useState("");
    const [userTag,setUserTag] = useState("");
   const [userInfo,setUserInfo] = useState({})

   const changeHandler = e => {
    setUserInfo(info=>({...info,[e.target.name]:e.target.value}))
}

    const submitHandler = e=>{
        e.preventDefault();
        axios.post('url',userInfo).then(res=>{
            console.log(res);
            alert('Data updated successfully ')
            let history = History()
            history.back();

        }).catch(err=>{
            console.error(err);
            alert('Oops! Something went wrong')
        })
    }


    return( 
      
   





<div class='flex py-8 items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>
    <article class="w-full max-w-lg mx-auto break-inside p-6 rounded-xl bg-white flex flex-col bg-clip-border">
       
            
        <h2 class="text-3xl font-extrabold mb-2">{userName} </h2>
        <div class="py-4">
        
            <div class="flex justify-between gap-1">
               
                <a class="flex" href="#">
                    <img class="max-w-full rounded-br-lg"
                    src={userImg ? userImg : "https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
                </a>
            </div>
        </div>
        <p>
       { userDesc? userDesc : "Here goes your Description" }
        </p>
        <div class="py-4">
        <a class="inline-flex items-center" href="#">
            <span class="mr-2">
            
            </span>
            <span class="text-lg font-bold">{userTag ? userTag : "GamerTag"}</span>
        </a>
        </div>
        <div class="relative">
        <input
            class="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
            value={userName}
            type="text" placeholder="Enter your username" name="name" onChange={e=>{
                setUsername(e.target.value);
                changeHandler(e)
            }} />
        <input
            class="pt-2 pb-2 pl-3 w-full h-11 my-5 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
            value={userDesc}
            type="text" placeholder="Enter your description" name="name" onChange={e=>{
                setUserDesc(e.target.value);
                changeHandler(e)
            }} />
        {/* <input
            class="pt-2 pb-2 pl-3 w-full h-11 my-5 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
            type="text" placeholder="Enter your gamertag" name="gamerTag" onChange={e=>{
                changeHandler(e)
                setUserTag(e.target.value)
            }} /> */}
        <input
            class="pt-2 pb-2 pl-3 w-full h-11 my-5 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
            type="text" placeholder="Gamer Tag" name="gamerTag" onChange={e=>{
                setUserTag(e.target.value);
                changeHandler(e)
            }} />
        <input
            class="pt-2 pb-2 pl-3 w-full h-11 my-5 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
            type="text" placeholder="Image URL" name="imageUrl" onChange={e=>{
                setUserImg(e.target.value);
                changeHandler(e)
            }} />
        <button className="px-4 py-1 rounded-xl border-2 border-black" onClick={submitHandler} >Submit</button>
        <Link to={"/"}>Home</Link>
        </div>
      
        <div class="pt-6">
       
        
    
        </div>
  
    </article>
</div>
    
    

      
    )

}
export default Profile;