import React, { useEffect, useState } from 'react'
import './Login.css';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [apassword, setApassword] = useState('');
  const [typepassword, setTypepassword] = useState('');

  const loadPassword = async () =>{
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/login`);

    setApassword(response.data.data[0].password);
  }

  useEffect(()=>{
    loadPassword();
  }, []);
  
  const Login = async() => {
    if(!typepassword){
      toast("Enter password")
    }
    else if(typepassword === apassword){
      toast.success("Login successfully");
      window.location.href = '/home';
    }
    else{
      toast.error("Incorrect password");
      reset();
    }
  }

  const reset = () => {
    setTypepassword('')
  }

  return (
    <div className='body p-4'>
      <h1 className="text-center">Login</h1><hr />
      <div className="container">
          <div className='col-12 col-sm-5 card m-auto shadow p-4 mt-5 text-center'>
            <h4 className="m-3"><b>HELLO 👋,</b> कृपया पासवर्ड टाका 🙏</h4>
            <p className="m-2">Password</p>
            <input type='password'
              placeholder='Enter Password'
              value={typepassword}
              onChange={(e)=>{
                setTypepassword(e.target.value)
              }} 
              className='mb-4 p-2 px-3 rounded border border-black'/>
            
            <div className="mb-4 text-center">
              <button type='button' onClick={Login} className="py-2 rounded border bag">Login</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login