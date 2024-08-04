
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css'
// import { Grandcom } from './components/Grandcom'
import { Headercom } from './Allshopcom/Headercom'
import {Homecom} from "./Allshopcom/Homecom"
import {Cartcom} from "./Allshopcom/Cartcom";
import { createContext, useState } from 'react';

export const cartcontext = createContext();

function App() {
  // enga use state ku cart ku create pani erukom oru empty array va

  const [cart ,setCart] =useState([]);
  

  return (
    // enga namba context create pani athuku value va namba state variable send panrom 
    // card context provider kula ella componet name pota easy ah use panikalam
<cartcontext.Provider value={{cart ,setCart}}>
<>
     {/*
     use context kaga ethu <Grandcom /> */}
    <BrowserRouter>
    <Headercom  />
   {/* ethu vanthu oru package ethu import panna easy ah link mari connect panikalam enga starting ethachum
   oru file name kuduthu antha file la eruthu ella file kum antha file la enga nu link tharanum */}
     <div className="container">
      <Routes>
        {/* entha routes kula namba main file la entha file kana path la eruku nu antha file kana name la tharanum */}
        <Route path="/" element={<Homecom />} />
        <Route path="/Cartcom" element={<Cartcom />} />
        {/* element la file name and routh path la enga eruthu athu enga eruku */}
      </Routes>

     </div>
    </BrowserRouter>

    </>
</cartcontext.Provider>
  )
}

export default App
