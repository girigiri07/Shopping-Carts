import React, { useContext } from 'react'
import "./Headercss.css"
import { cartcontext } from '../App'
import { Link } from 'react-router-dom'
export const Headercom = () => {
  // enga yum use context vachu anga send panra data va receive panrom
  const {cart ,setCart} =useContext(cartcontext)
  return (
    <div className='navbar'>
        <div className="logo">food cart</div>
        <ul>
            <li>
                {/* entha mari quouation kula slash pota antha page kula ya erukum */}
               {/* <a href={"./Homecom"}>Home</a> */}
               <Link to={"/"}>Home</Link>

            </li>
            <li>
              {/* enga ella file kana link tag la athukana link tharanum */}
                {/* <a href={"./Cartcom"}> */}

                 <Link to={"/Cartcom"}>
                  {/* enga oru span namba cart la erukura product length */}
                 <span className='cart-count'> {cart.length}</span>
                 View cart
                 </Link>
                 
                  
            </li>
        </ul>
    </div>
  )
}
