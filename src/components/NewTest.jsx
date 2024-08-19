import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const NewTest = () => {
    let {name} = useContext(UserContext);
    
  return (
    <div>{name}</div>
  )
}

export default NewTest
