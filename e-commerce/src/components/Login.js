import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {BiHide,  BiShow} from 'react-icons/bi';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {login  } from './redux/userData';

const Login = () => {
  const navigate=useNavigate();
  const [showPassword,setShowPassword]=useState(false);
  const [data,setdata]=useState({
    email :"",
    Password:"",
  })
  const userData = useSelector((state)=>state.user);
  console.log(userData);
  const dispatch=useDispatch();
  console.log(data);
  const passwordHandler=()=>{
    setShowPassword((prev)=>!prev);
  }
  const onChangeHandler=(e)=>{
    const {name,value}=e.target;
    setdata((prev)=>{
            return {
              ...prev,
              [name]:value,
            };
    });
  };
  const submitHandler=async (e)=>{
    e.preventDefault();
    const {email,Password}=data;
    if( email && Password){
         const fetchData=await fetch(`http://localhost:8080/login`,{
          method:"POST",
          headers:{
            "content-type" : "application/json"
          },
          body: JSON.stringify(data)
         })
         const response = await fetchData.json();
         console.log(response);
         if(response.success){
          toast("Log In Successful")
          dispatch(login(response.data));
          navigate("/");
         }
         else{
          toast(response.message);
         }
         console.log(response.data);
        
  }
  else{
    alert("fill all the inputs ");
  }
  }
  return (
    <div className='  flex items-center justify-center p-4 '>
    <div className=' w-full max-w-sm bg-white m-auto flex  flex-col p-4 z-20 rounded ' >
      
      <form className='   pl-5 flex flex-col '
       onSubmit={submitHandler}
      >
         <label htmlFor='email'> E-mail</label>
        
         <input type="email"
         id='email'
         name='email'
         className='w-10/12 my-1.5 bg-slate-300 focus-within:outline-blue-300 rounded'
        
         value={data.email}
         onChange={onChangeHandler}
        />
        <label htmlFor='Password'> Password</label>
      <div className='flex w-10/12 my-1.5 bg-slate-300 focus-within:outline-blue-300 rounded'>
      <input
       type={ showPassword ? "text" :"password"}
        id='Password'
        name='Password'
         className=' w-full bg-slate-300 border-none outline-none rounded'
        value={data.Password}
        onChange={onChangeHandler}
      />
      <span className=' flex items-center'
       onClick={passwordHandler}
      >
      {
        showPassword ? <BiHide/> :<BiShow/>
      }
      </span>
      
     
        </div>
         <button className= ' w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4 '>
             Login
         </button>
      </form>
      <div>
      <p className="text-left text-sm mt-2">
        Don't  have account ?{" "}
        <Link to={"/signup"} className="text-red-500 underline">
          Sign Up
        </Link>
      </p>
      </div>
      </div>
      </div>
  )
}

export default Login