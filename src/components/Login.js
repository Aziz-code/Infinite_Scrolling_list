import React,{useState} from 'react'

import ContactList from './ContactList'


export default function Login() {
    const [name, setName] = useState("")
   
    const [password, setPassword] = useState("" )
  
    const [error, setError] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name!=="foo"||password!=="bar"){
            console.log("incorrect");
            setError(true);

        }
        else{
            setLoggedIn(true);
        }    
    }

    if(loggedIn)
        return <ContactList/>


    return (
        <div className="text-center m-5-auto" style={{backgroundColor:"#00cc99", height:'100vh',display:'flex',justifyContent:"center", alignItems:'center', paddingTop:"5%"}}>
        
        <div className='main'>
        <div className='bg'></div>
            <form onSubmit={handleSubmit} method="POST">
           
            {error && 
            <p>Incorrect details</p>}
                <p>
                    
                    <input type="text" name="first_name" value={name} onChange={(e) => setName(e.target.value)} required placeholder='YOUR NAME' />
                </p>
                
                <p>
                    
                    <br/>
                    <input type="password" name="password" required placeholder='PASSWORD' value={password} onChange = {(e) => setPassword(e.target.value)} />
                </p>

               
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"}}>
                   
                    <button id="sub_btn" type="submit" onClick={handleSubmit}>Login
                    </button>
                    </div>

               
            </form>
            
           
            </div>
           
        </div>
    )
}
