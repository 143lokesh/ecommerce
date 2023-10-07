import React ,{useRef} from 'react'
import { useSelector } from 'react-redux'
import Homecard from './Homecard';
import CardFeatures from "./CardFeatures";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "./FilterProduct";
import AllProduct from "./AllProduct";

const Home = () => {
 const productData=useSelector((state)=>state.product.productList);
 const  data =productData.slice(2,5);
 const loadingArray = new Array(3).fill(null);
 const loadingArrayFeature = new Array(10).fill(null);
 const homeCartVegetables = productData.filter(
  (prod) => prod.tag === "vegetable",
  []
);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4" >
        <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
             Fastest Delivery to{" "}
            <span className="text-red-600 ">Your Home</span>
          </h2>
          <p className="py-3 text-base ">
          In today's fast-paced world, convenience is key. That's why our grocery delivery app is designed to make your
           life easier, one grocery trip at a time. Say goodbye to the hassle of crowded aisles, long checkout lines, and 
           heavy bags  with our app, you can shop for all your essentials from the comfort of your own home.
            <br/>
           Join the countless satisfied customers who have made the switch to our grocery delivery app. Enjoy the convenience
            of having your groceries delivered right to your doorstep, and let us take care of the rest.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>
        <div  className=" md:w-1/2 flex flex-wrap gap-5 p-4  justify-center">
        {data[0] ?
          data.map((prod)=>{
            return (<Homecard  key={prod._id} 
                image={prod.image}
                    name={prod.name}
                    price={prod.price}
                    tag={prod.tag}
                    id={prod._id}
            />);
          }) :
          loadingArray.map((prod, index) => {
                return <Homecard key={index+"loading"} loading={"Loading..."} />;
              })
        }
          
        </div>
    </div>
    <div className=" p-2 z-20">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5  z-10 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeCartVegetables[0]
            ? homeCartVegetables.map((prod) => {
                return (
                  <CardFeatures
                    key={prod._id+"vegetable"}
                    id={prod._id}
                    name={prod.name}
                    tag={prod.tag}
                    price={prod.price}
                    image={prod.image}
                  />
                );
              })
            : loadingArrayFeature.map((prod,index) => (
                <CardFeatures loading="Loading..." key={index+"cartLoading"} />
              ))}
        </div>
      </div>
      
      <AllProduct heading={"Your Product"}/>
    </div>
 
  )
}

export default Home