import React, { useState } from 'react';
import UserContext from './UserContext';

const Contextprovider = ({children}) => {
    let [name, setName] = useState ("test")

  return (
    <UserContext.Provider value={{name, setName}}>{children}</UserContext.Provider>
  )
}

export default Contextprovider