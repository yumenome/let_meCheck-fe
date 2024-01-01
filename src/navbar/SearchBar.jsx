import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useStateContext } from '../context/ContextProvider';

const SearchBar = () => {

  const { phones, setPhones } = useStateContext();
  const[input, setInput] = useState('');

  
  const toGetValue = (e) =>{
    const totalPhones = phones;
    if(e.target.value.length === 0) {
      window.location.reload(false)
    }else{
      setInput(e.target.value)

    }
  }

  const toSubmit = (e) => {
    if(e.key === 'Enter'){
      const searched = phones.filter(phone => (phone.name.toLowerCase().includes(input.toLowerCase())))
      setPhones(searched)
    }
  }


  return (
    <div>
    <InputGroup>
        <InputLeftElement cursor={'pointer'}>
        <CiSearch color='gray.100' style={{fontSize : '20px'}}/>
        </InputLeftElement>
        <Input type='text' id='searched_input' onChange={toGetValue} onKeyDown={toSubmit} placeholder='to search...' w={[90, 250, 350]}/>
    </InputGroup>
    </div>
  )
}

export default SearchBar