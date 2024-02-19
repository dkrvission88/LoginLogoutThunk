import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../REDUX/Actions/action1'

function Login() {

  const dispatch=useDispatch("")
  const [username,setUsername]=useState("")
  const[password,setPassword]=useState("")

  const handleLogin=()=>{
    dispatch(login(username,password))
  }


  return (
    <>
    <div>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>

    
    </>
  )
}

export default Login