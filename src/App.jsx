import { useState, useContext } from "react"
import React from 'react'
import UserContext from "./context/UserContext"
import ContextTest from "./components/ContextTest"
import NewTest from "./components/NewTest"


const App = () => {
 
  
  return (
    <div className="w-[300px] mx-auto text-center mt-10 shadow-inner shadow-slate-500 py-6">
      <ContextTest />
      <NewTest />
    </div>
  );
}

export default App