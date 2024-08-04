import React, { useContext } from 'react'
import "./productstyle.css"
import { cartcontext } from '../App';


export const Productcom = ({product}) => {
  // anga eruthu product variable ah destructing pani eduthutom
  // const namee = product.name.length>21 ?product.name.
  // substring(0,20) + "..": product.name;

  // enga use context  vachu cart la send panna value la enga recive panrom
  const {cart ,setCart} =useContext(cartcontext);
  const addcart =() =>{
// enga spread operato vachu old product la add pani athoda epo user thara product yum add panrom
    setCart([...cart, product]);
  };

  const removecart =() =>{
    // enga filter vachu cart la eruthu oru oru product ah edthu athula user sonna product id thavara ellama add panrom
    setCart(cart.filter((c) => c.id !== product.id));
   }

  return (
    <div>
        <div className='product'>
       <div className="img">
        {/* enga namba product oda image athellam name ellama print panrom */}
        <img src={product.img} alt={product.name} />
       </div>
         <div className="details">
         <h2>{product.name}</h2>
          <p>Price Rs : {product.amt}</p>
          {
            // enga cart kula product erutha true nu return panum so remove fuction onclick la call agum
            cart.includes(product) ? (
            <button className='btnremove' onClick={removecart}>remove to cart</button>)
            : (
              // false ah erutha add cart function call agum
            <button onClick={addcart} >Add to cart</button>
            )
          }
         </div>
    </div>
    </div>
  )
}
