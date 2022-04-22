// import React, {useState} from 'react';

// const Profile = (props) => {

//     const{gameList, setGameList} = props;
//     const[gameText, setGameText] = useState("");

    
//     const {name, setName} = props;
//     const {gamerTag, setGamerTag} = props;
//     // const [title, setTitle] = useState("");
//     const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

//     const createName = (e) =>{
//         e.preventDefault();
//         setGameList([...gameList, {           
//             gameText: gameText,
//             id: Math.floor(Math.random() * 100000).toString(),
//             markedDelete: false
//         }
//         ])

//         setGameText("");

//         setHasBeenSubmitted( true );
//         setGamerTag( true );
//         };

    


//     return( 
//         <div>
//             <form onSubmit={ createName }>
//     {
//                 hasBeenSubmitted ? 
//                 <h3>{name}</h3> :
//                 <div>
//                     <h3>pleae add a name of the list</h3> 
                
//                     <label>Name: </label> 
//                     <input type="text" onChange={ (e) => setName(e.target.value) }
//                     value={name}/>
//                     <button>Submit</button>
//             </div>
//             }
//             </form> 
//             <form onSubmit={ createGamerTag }>
//     {
//                 hasBeenSubmitted ? 
//                 <h3>{gamerTag}</h3> :
//                 <div>
//                     <h3>pleae add your Gamer Tag</h3> 
                
//                     <label>Gamer Tag: </label> 
//                     <input type="text" onChange={ (e) => setGamerTag(e.target.value) }
//                     value={gamerTag}/>
//                     <button>Submit</button>
//             </div>
//             }
//             </form>       
            
//             <form onSubmit={submitHandler}>
//                 <input onChange={(e) =>setGameText(e.target.value)} 
//                 value={gameText} type="text" />
//                 <button>Submit</button>
//             </form>

        
    
    
    

            
//         </div>
//     )

// }
// export default Profile;