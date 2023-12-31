import React,{useEffect} from 'react';
import AllProduct from './AllProduct';
import {  useSelector } from "react-redux";

const Menu = () => {
    const productData = useSelector((state) => state.product.productList);
    
        const productDisplay = productData.filter((prod) => prod._id === "65194950995d6e3c079e0836")[0];
    
  return (
    <div className="p-2 md:p-4">
    <div className="w-full max-w-3xl m-auto md:flex bg-white">
      <div className="max-w-sm  overflow-hidden w-full p-5">
        <img
          src={productDisplay.image}
          className="hover:scale-105 transition-all h-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
          {productDisplay.name}
        </h3>
        <p className=" text-slate-500  font-medium text-2xl">{productDisplay.category}</p>
        <p className=" font-bold md:text-2xl">
          <span className="text-red-500 ">₹ </span>
          <span>{productDisplay.price.split(' ')[1]}</span>
        </p>
        <div className="flex gap-3">
        <button  className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Buy</button>
        <button  className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Add Cart</button>
        </div>
        <div>
          <p className="text-slate-600 font-medium">Description : </p>
          <p>{productDisplay.description}</p>
        </div>
      </div>
    </div>

    <AllProduct heading={"Related Product"}/>
  </div>
  )
}

export default Menu