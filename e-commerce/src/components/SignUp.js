import React, { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import {BiHide,  BiShow} from 'react-icons/bi';
import signUpLogo from './assets/download.png';
import { ImagetoBase64 } from "./ImagetoBase64";
import { toast } from 'react-toastify';
const SignUp = () => {
    const navigate =useNavigate();
    const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  const [data,setdata]=useState({
    FirstName :"",
    LastName :"",
    email :"",
    Password:"",
    ConfirmPassword :"",
    image :"",
  })
  console.log(data);
  const passwordHandler=()=>{
    setShowPassword((prev)=>!prev);
  }
  const confirmPasswordHandler=()=>{
    setShowConfirmPassword((prev)=>!prev);
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
  
  const handleUploadProfileImage = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])


    setdata((prev)=>{
        return{
          ...prev,
          image : data
        }
    })

}
  const submitHandler= async (e)=>{
    e.preventDefault();
    const {FirstName,LastName,email,Password,ConfirmPassword}=data;
    if(FirstName && LastName && email && Password && ConfirmPassword){
    if(Password===ConfirmPassword){
      console.log(process.env.REACT_APP_SERVER_PORT);
      const fetchData =await fetch("http://localhost:8080/signup",{
        method:"POST",
        headers:{
          "content-type" : "application/json"
        },
        body: JSON.stringify(data)
       })
       const response = await fetchData.json();
       console.log( "response is :", response);
         
         toast("Signed Up Successfully ")
         navigate("/login");
    }
    else{
      alert("password and confirm password are not same");
    }
  }
  else{
    alert("fill all the inputs ");
  }
  }
  return (
    <div className='p-2  '>
    <div className=' pl-4 pt-4 pb-4 w-full max-w-sm bg-white m-auto flex  flex-col rounded-md ' >
      <div className=' w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative '>
        <img  src={ data.image ? data.image :signUpLogo}
        className='w-full h-full'
        />
        <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
          </label>
      </div>
      <form className=' flex flex-col '
       onSubmit={submitHandler}
      >
         <label htmlFor='FirstName'> FirstName</label>
         <input 
         type={"text"}
         id='FirstName'
         name='FirstName'
         className='w-10/12 my-1.5 bg-slate-300 focus-within:outline-blue-300 rounded'
         value={data.FirstName}
         onChange={onChangeHandler}
        />
         <label htmlFor='LastName'> LastName</label>
         <input 
         type={"text"}
         id='LastName'
         name='LastName'
         className='w-10/12 my-1.5 bg-slate-300 focus-within:outline-blue-300 rounded'
         value={data.LastName}
         onChange={onChangeHandler}
        />
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
        <label htmlFor='ConfirmPassword'> Confirm Password</label>
         <div className='flex w-10/12 my-1.5 bg-slate-300 focus-within:outline-blue-300 rounded' >
         <input
          type={ showConfirmPassword ? "text" :"password"}
         id='ConfirmPassword'
         name='ConfirmPassword'
         className=' w-full bg-slate-300 border-none outline-none rounded'
         value={data.ConfirmPassword}
         onChange={onChangeHandler}
        />
  
        <span className=' flex items-center'
          onClick={confirmPasswordHandler}
        >
           {
            showConfirmPassword ? <BiHide/> :<BiShow/>
           }
      </span>
         </div>
         
         <button className= ' w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4 '>
             Sign Up
         </button>
      </form>
      <div>
      <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
      </div>
      </div>
  )
}

export default SignUp