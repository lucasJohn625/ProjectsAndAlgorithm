import React,{useState} from 'react'

function GameInfo({blog,deleteHandler,changeHandler,updateHandler}) {
    const  [editOpen,setEditOpen] = useState(false)
    return (
        <>
        {
            editOpen ? (<tr className="text-gray-700 hover:bg-gray-100" >
                                   
                <td className="px-4 py-3 border" ><input onChange={changeHandler} name="name" type="text" defaultValue={blog.name} /></td>                                  
                <td className="px-4 py-3 border" ><input onChange={changeHandler} name="review" type="text" defaultValue={blog.review} /></td>                                  
                <td className="px-4 py-3 border" ><input onChange={changeHandler} name="rating" type="number" min="0" max="10" defaultValue={blog.rating} /></td>                                  
                
                <td className="px-4 py-3 border" >
                 
                 <button onClick={()=> updateHandler(blog._id)} className="update">Update</button>
                 
                </td>
                <td className="px-4 py-3 border" >

                 <button onClick={()=> setEditOpen(false)} className="update">Cancel</button>
                    </td>
            </tr>) : (<tr >
                                   
                <td className="px-4 py-3 border" >{blog.name}</td>                                  
                <td className="px-4 py-3 border" > {blog.review} </td>
                <td className="px-4 py-3 border" > {blog.rating}
                </td> 
                <td className="px-4 py-3 border" >
                 
                 <button onClick={()=> setEditOpen(true)} className="update">Update</button>
                </td>
                <td className="px-4 py-3 border" >


                 <button onClick={()=> deleteHandler(blog._id)} className="delete">Delete</button>
                </td>
            </tr>)
        }
        


        </>
    )
}

export default GameInfo
