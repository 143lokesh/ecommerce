import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'
import {FaUserCircle} from 'react-icons/fa';
import {BsCart} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import {logout } from './redux/userData';

const Header = () => {
    const[showLogin,setShowLogin]=useState(false);
    const navigate=useNavigate();
    const userData = useSelector((state)=> state.user);
    const dispatch=useDispatch();
    const showLoginHandler=()=>{
        setShowLogin((prev)=>!prev);
    }
    const logouthandler =()=>{
        dispatch(logout());
        navigate("/"); 
    }
    const cartItem =useSelector((state)=> state.product.cartItem);
    console.log(cartItem);
  return (
    <header className=' fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
    <div className="flex items-center h-full justify-between" >

    <div  className=' flex h-12 itens-center '>
        <img src={logo}/>
    </div>
    <div className='flex gap-6 items-center'>
    <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
    <NavLink to="/" >
            <p>Home</p>
        </NavLink>
        <NavLink to="/menu" >
            <p>Menu</p>
        </NavLink>
        <NavLink to="/about" >
            <p>About</p>
        </NavLink>
        <NavLink to="/contact" >
            <p>Contact</p>
        </NavLink>
    </nav>
       
        <div className='flex relative text-2xl text-slate-600'>
        <NavLink to="/cart" >
        <p className='absolute w-4 h-4 -top-1 -right-1 text-xs bg-green-500 rounded-full text-center animate-bounce'>{cartItem.length}</p>
          <BsCart/>
        </NavLink>
        </div>
        <div className='flex relative text-2xl text-slate-600' >
        <div  onClick={showLoginHandler} >
        {
            userData.image ? <img src={userData.image} className='w-7 h-7 rounded overflow-hidden'/> : <FaUserCircle/>
        }
        </div>
        {
            showLogin &&
          <div className=' absolute p-1 font-bold top-8 right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[80px] text-center'> 
           {
            (userData.email==="lokeshsetlem890@gmail.com") && <NavLink to='/newproduct'> <p className='text-xs whitespace-nowrap pb-1 '>New Product</p> </NavLink> 
           }
          {
            userData.image ? <p className='bg-red-500 text-xs  text-white rounded' onClick={logouthandler}>Logout </p> :<p  className='text-xs whitespace-nowrap '> <NavLink to="/login" >Login</NavLink> </p>
          }

          <nav className="text-xs md:text-lg flex flex-col md:hidden">
    <NavLink to="/" >
            <p>Home</p>
        </NavLink>
        <NavLink to="/menu" >
            <p>Menu</p>
        </NavLink>
        <NavLink to="/about" >
            <p>About</p>
        </NavLink>
        <NavLink to="/contact" >
            <p>Contact</p>
        </NavLink>
    </nav>
          </div>
        }
        </div>
        </div>
        </div>
        
   </header>
  )
}

export default Header