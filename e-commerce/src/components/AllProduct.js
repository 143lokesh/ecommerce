import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardFeatures from "./CardFeatures";
import FilterProduct from "./FilterProduct";

const AllProduct = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((prod) => prod.tag))];

  //filter data display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (tag) => {
    setFilterBy(tag)
    const filter = productData.filter(
      (prod) => prod.tag.toLowerCase() === tag.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ? (
          categoryList.map((prod) => {
            return (
              <FilterProduct
                tag={prod}
                key={prod}
                isActive={prod.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(prod)}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0]
          ? dataFilter.map((prod) => {
              return (
                <CardFeatures
                  key={prod._id}
                  id={prod._id}
                  image={prod.image}
                  name={prod.name}
                  tag={prod.tag}
                  price={prod.price}
                />
              );
            })
          : 
          loadingArrayFeature.map((prod,index) => (
              <CardFeatures loading="Loading..." key={index+"allProduct"} />
            ))}
      </div>
    </div>
  );
};

export default AllProduct;