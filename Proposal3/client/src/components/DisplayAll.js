import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css"


const DisplayAll = () => {


    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/game')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setGameList([...gameList,...res.data]);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])
    const deleteHandler = (idFromBelow)=>{ 
        axios
            .delete(`http://localhost:8000/api/game/${idFromBelow}`)          
            .then((res)=>{
                console.log(res.data);
                const filteredGames = gameList.filter((game)=> {
                    return game._id !== idFromBelow;
            });
            setGameList(filteredGames);
       })
            .catch((err)=>{
            console.log("errror deleting author");
        })
    }  
    


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
                        <th>Reviews</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gameList ?
                            
                            gameList.map((game, index) => (
                                <tr key={index}>
                                   
                                    <td>{game.name}</td>                                  
                                    <td> {game.rating} </td>
                                    <td> {game.review}
                                    </td> 
                                    <td>
                                     <button onClick={()=>deleteHandler(game._id)} className="delete" >Delete </button> 
                                
                                      
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