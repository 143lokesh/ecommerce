import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addCartItem } from "./redux/productSlice";

const CardFeatures = ({ image, name, price, tag, loading, id }) => {
  const dispatch = useDispatch()

  const handleAddCartProduct = (prod) => {
    dispatch(addCartItem({
      _id : id,
      name : name,
      price : price,
      tag : tag,
      image : image
    }))
  };


  return (
    <div className=" z-0  w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col  ">
      {image ? (
        
         <div >
         <NavLink
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
         <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="h-full w-full" />
            </div>
            <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className=" text-slate-500  font-medium">{tag}</p>
            <p className=" font-bold">
              <span className="text-red-500">₹ </span>
              <span>{price.split(' ')[1] }</span>
            </p>
            </NavLink>
          <button
            className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full"
             onClick={handleAddCartProduct}
          >
            Add Cart
          </button>
        
         </div>
            
        
      ) : (
        <div className=" min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeatures;