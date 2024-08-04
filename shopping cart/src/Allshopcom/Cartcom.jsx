import React, {  useContext, useEffect, useState } from 'react'
import "./cartstyle.css"
import { cartcontext } from '../App';

export const Cartcom = () => {
// enga context vachu cart la erukura data la edukurom 
const {cart } =useContext(cartcontext);
const [total,settotal] =useState(0);
useEffect(()=>{
// enga cart change ana va use effect call agum namba total nu oru state vachu erukom anga 
// athula oru oru product oda amount eduthu athu total la acc la erukum athoda oru oru amount ah plus panrom
// ellama int ah convert pani decimal varama eruka parse int podurom
  settotal(cart.reduce((acc ,curr) => acc + parseInt(curr.amt),0))
},[cart])
  return (
   <>
   <h1 className='cart-heading'>Cart products</h1>
    <div className='cart-container'>
  {
    // enga cart la erukura ellama print panrom
    cart.map((product)=>(
      <div className="cart-product" key={product.id}>
      <div className="img">
        < img src={product.img} alt='image'/>
      </div>
      <div className="cart-product-details">
        <h3>{product.name}</h3>
        <p>{product.amt}</p>
      </div>
    </div>
    ))
  }
    
    </div>
    <h2 className='cart-amount'>Total amount rs : {total}</h2>
   </>
    
  )
}
