import React, { useState } from 'react';
import { ProductsData } from '../../data/products';
const allCategories = ['all ', ...new Set(ProductsData.map((item) => item.type))];
const Feature = () => {
    const [product,setProduct] = useState(ProductsData);
    const [categories, setCategories] = useState(allCategories);
    const filtered = (type)=>{
      if (type === 'all ') {
        setProduct(ProductsData);
        return;
      }
      const filter = ProductsData.filter((pro)=> pro.type === type);
     return setProduct(filter)
    }
  return (
    <div className="container px-4 py-20 mx-auto">
    
     <div className="grid grid-cols-1 md:grid-cols-12" >
        <div className="col-span-3">
            <div className="flex flex-row gap-2 md:gap-5 md:flex-col">
            {categories.map((product)=> {
                
                return (
                    <button className="flex flex-col gap-5 text-lg uppercase " onClick={()=>filtered(product)}>{product}</button>
                )
            })}
            </div>
        </div>
        <div className="grid grid-cols-1 col-span-9 gap-10 my-10 md:grid-cols-3">
           {product?.map((prodcut)=>{
            const {name,detail,price,img} = prodcut;
            return (
                <article className='relative flex justify-between bg-[#fff] gap-4 h-52 p-4'>
                    <div>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                    <p className='text-sm'>{detail}</p>
                    <h2 className='mb-3 text-3xl font-bold'>${price}</h2>
                    <button className='px-2 py-1 mt-3 text-sm border border-black rounded-full'>Shop Now</button>
                    </div>
                    <img className='w-32 -rotate-12 object-fit' src={img} alt={name} />
                </article>
            )
           })}
        </div>
      </div>
     </div>
    
  )
}

export default Feature
