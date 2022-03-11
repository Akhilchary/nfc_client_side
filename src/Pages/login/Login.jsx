import axios from 'axios';
import React, { useState } from 'react'
import AddContent from '../Add-content/addContent';
import ReactDOM from 'react-dom';
import "../login/login.css";

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
      <div className='main'>
          <h1 className='login-h'>Login</h1>
        <div>
            <label className='label1' htmlFor="inp1">username</label>
            <input className='input1' type="text" name="Username" id="inp1" onChange={e=>setUsername(e.target.value)} /><br />
            <label className='label2' htmlFor="pwd">password</label>
            <input className='input2' type="text" name="Password" id="pwd" onChange={e=>setPassword(e.target.value)} />
            <button className='submi' onClick={handleclick}>submit</button>
        </div>
      </div>
        
    </>
  )
}

export default Login