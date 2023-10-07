import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {BsCloudUpload} from "react-icons/bs"
import { ImagetoBase64 } from './ImagetoBase64'

const Newproduct = () => {
  const [data,setData] = useState({
    name : "",
    tag : "",
    image : "",
    price : "",
    description : ""
  })

  const handleOnChange = (e)=>{
    const {name,value} = e.target

    setData((preve)=>{
        return{
          ...preve,
          [name] : value
        }
    })

  }

  const uploadImage = async(e)=>{
      const data = await ImagetoBase64(e.target.files[0])

      setData((prev)=>{
        return{
          ...prev,
          image : data
        }
      })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(data)

    const {name,image,tag,price} = data

    if(name && image && tag && price){
      const fetchData = await fetch(`http://localhost:8080/addproduct`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  
      const response =  await fetchData.json()
  
      console.log(response)
      toast(response.message)

      setData(()=>{
        return{
          name : "",
          tag : "",
          image : "",
          price : "",
          description : ""
        }
      })
    }
    else{
      toast("Enter required Fields")
    }
    
   
  }
  return (
    <div className="p-4">
       <form className='m-auto w-full max-w-md rounded shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={"text"}  name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name}/>

        <label htmlFor='tag'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='tag' onChange={handleOnChange} value={data.tag}>
          <option value={"other"}>select category</option>
          <option value={"Fruit"}>Fruits</option>
          <option value={"Vegetable"}>Vegetable</option>
          <option value={"Ice Cream"}>Icream</option>
          <option value={"Dosa"}>Dosa</option>
          <option value={"Pizza"}>Pizza</option>
          <option value={"Rice"}>rice</option>
          <option value={"Cake"}>Cake</option>
          <option value={"Burger"}>Burger</option>
          <option value={"Panner"}>Panner</option>
          <option value={"Sandwich"}>Sandwich</option>
        </select>

        <label htmlFor='image'>Image
        <div  className='h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer'>
            {
              data.image ? <img src={data.image} className="h-full" /> :<span className='text-5xl'><BsCloudUpload/></span> 
            }
            
            
           <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden"/>
        </div>
        </label>
        

        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1 my-1' name='price' onChange={handleOnChange} value={data.price}/>

        <label htmlFor='description'>Description</label>
        <textarea rows={2} value={data.description} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={handleOnChange}></textarea>

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
       </form>
    </div>
  )
}

export default Newproduct