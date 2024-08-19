import { useState, useContext } from "react"
import React from 'react'
import UserContext from "./context/UserContext"
import ContextTest from "./components/ContextTest"
import NewTest from "./components/NewTest"


const App = () => {
 
  
  return (
    <div>
      <ContextTest/>
      <NewTest/>
    </div>
  )
}

export default App