import React, { createContext, useContext, useState } from 'react'

const stateContext = createContext({
    phones: [],
    brands: [],
    setPhones: () => {},
    setBrands: () => {},
})

export const ContextProvider = ({children}) => {

    const[phones, setPhones] = useState([]);
    const[brands, setBrands] = useState([]);


  return (
    <stateContext.Provider value={{phones,brands, setPhones,setBrands}} >
        {children}
    </stateContext.Provider>
  )
}

export const useStateContext = () => useContext(stateContext)