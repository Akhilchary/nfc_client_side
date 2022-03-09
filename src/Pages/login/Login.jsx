import axios from 'axios';
import React, { useState } from 'react'
import AddContent from '../Add-content/addContent';
import ReactDOM from 'react-dom';

const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handleclick=()=>{
        if(username==='' || password===''){
            alert("enter username and password");
        }else{
            const checkUser=async()=>{
                const res=await axios.post('/auth/login/',{
                    username,password
                });
                 if (res.data==='found'){
                ReactDOM.render(<AddContent />,document.getElementById('root'));
            }
            }
            checkUser();
           
        }
    }
  return (
      <>
        <h1>Login</h1>
        <div>
            <label htmlFor="inp1">username</label>
            <input type="text" name="username" id="inp1" onChange={e=>setUsername(e.target.value)} />
            <label htmlFor="pwd">password</label>
            <input type="text" name="password" id="pwd" onChange={e=>setPassword(e.target.value)} />
            <button onClick={handleclick}>submit</button>
        </div>
    </>
  )
}

export default Login