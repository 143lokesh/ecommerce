import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {  Outlet } from 'react-router-dom'
import  { Toaster } from "react-hot-toast";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductData } from './components/redux/productSlice';
import Home from './components/Home';



function App() {
  const dispatch =useDispatch();
  const productData = useSelector((state)=>state.product.productList);
  useEffect(()=>{
    (async ()=>{
      const product= await fetch('http://localhost:8080/product');
      const response =await product.json();
      console.log(response);
      dispatch(setProductData(response));
    })()
  },[]);
  console.log(productData);
  return (
    <div >
    <Header/>
    <Toaster />
    <div>
    <main className="pt-16 bg-slate-100 min-h-[calc(100vh)] z-10">
          <Outlet />
      </main>
    </div>
    
    </div>
    

  );
}

export default App;
