import React, { useState } from 'react'
import data from "../assets/product.json";
import { Productcom } from './Productcom';
import "./Homestyle.css"
import { cartcontext } from '../App';

export const Homecom = () => {
// namba product data la product nu use state create pani namba data file ah import pani atha product ku 
// initial value va vachutom
const [products] =useState(data);

  return (
  <>
   <div className='product-container'>
    {/* enga anth aproduct la erukura value la map pani eduthu product componet ku product oda id yum product 
    yum send panrom */}
        {products.map((product)=>(
      // 
        <Productcom key={product.id}  product={product}
      />
        ))}
        </div>
  </>
   
  )
}
