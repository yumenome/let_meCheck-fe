import { Button, Flex, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MainContents from '../home/contents/MainContents'
import api_client from '../api/axios_client'
import { useStateContext } from '../context/ContextProvider'
import Navbar from '../navbar/Navbar'


const HomePage = () => {

  const{setBrands} = useStateContext();

  useEffect(() => {
    api_client.get('/brands')
      .then(({data}) => {
        console.log(data.data);
        setBrands(data.data);
      })
  },[])


  return (
    <>
      <Navbar />
      <MainContents />
    </>
  )
}

export default HomePage