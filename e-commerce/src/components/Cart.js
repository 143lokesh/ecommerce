import React from 'react';
import {  useSelector } from "react-redux";
import CartProduct from './CartProduct';
import { useNavigate } from "react-router-dom";
import Animation from './assets/anima.png';

const Cart = () => {
    const productCartItem = useSelector((state) => state.product.cartItem);
  //  const user = useSelector(state => state.user)
    const navigate = useNavigate()
  
    const totalPrice = productCartItem.reduce(
      (acc, curr) => acc + parseInt(curr.total),
      0
    );
    const totalQty = productCartItem.reduce(
      (acc, curr) => acc + parseInt(curr.qty),
      0
    );
  
    
  
      
    
    return (
      <div  className='h-full min-h-screen'>
      
        <div className="p-2 md:p-4">
          <h2 className="text-lg md:text-2xl font-bold text-slate-600">
            Your Cart Items
          </h2>
  
          {productCartItem[0] ?
          <div className="my-4 ml-2 flex gap-3">
            {/* display cart items  */}
            <div className="w-full max-w-3xl ">
              {productCartItem.map((prod) => {
                return (
                  <CartProduct
                    key={prod._id}
                    id={prod._id}
                    name={prod.name}
                    image={prod.image}
                    tag={prod.tag}
                    qty={prod.qty}
                    total={prod.total}
                    price={prod.price.split(' ')[1]}
                  />
                );
              })}
            </div>
  
            {/* total cart item  */}
            <div className='w-full md:mr-40'>
            <div className=" w-full max-w-md  ml-auto">
              <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Qty :</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Price</p>
                <p className="ml-auto w-32 font-bold">
                  <span className="text-red-500">₹</span> {totalPrice}
                </p>
              </div>
              <button className="bg-red-500 w-full text-lg font-bold py-2 text-white">
                Payment
              </button>
            </div>
          </div>
            </div>
           
  
          : 
          <>
            <div className="flex w-full h-full justify-center items-center flex-col">
              <img src={Animation} className="w-9/12 max-w-sm"/>
              <p className="text-slate-500 text-3xl font-bold">    Empty Cart</p>
              <button className='bg-green-600 p-2 mt-4 text-white rounded-md hover:bg-green-900' onClick={()=>navigate("/")}>Go Shopping...</button>
            </div>
          </>
        }
        </div>
      
      </div>
    )
}

export default Cart