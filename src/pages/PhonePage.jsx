import React, { useEffect, useState } from 'react'
import Sidebar from '../phones/sidebar/Sidebar'
import MainContents from '../home/contents/MainContents'
import { Box, Button, Flex, Skeleton, Text } from '@chakra-ui/react'
import Phone from '../home/contents/Phone'
import iPhone from '../assets/iphone1.jpg'
import api_client from '../api/axios_client'
import { useStateContext } from '../context/ContextProvider'

import Navbar from '../navbar/Navbar'


const PhonePage = () => {


  const { phones, brands, setPhones, setBrands } = useStateContext();
  const [ loading, setloading ] = useState(true);

  const colors =[
    {title: 'natural', id: '0', slug: 'nt'},
    {title: 'royal', id: '1', slug: 'ry'},
    {title: 'classical', id: '2', slug: 'cl'},
  ]
  
  useEffect(() => {
    api_client.get('/phones')
      .then(({data}) => {
        console.log(data.data);
        setPhones(data.data);
        setloading(false);
      })
      api_client.get('/brands')
      .then(({data}) => {
        console.log(data.data);
        setBrands(data.data);
      })
  },[])


  return (
    <>
    <Navbar  />
    <Flex  >
      <Sidebar brands={brands} colors={colors} />
      {loading ? 
      <Flex direction={'column'} ml={'100px'} >
            <Skeleton h={'400px'} w={'1200px'} my={10}>
              <div>contents wrapped</div>
              <div>won't be visible</div>
            </Skeleton>
            <Skeleton h={'300px'} my={10}>
              <div>contents wrapped</div>
              <div>won't be visible</div>
            </Skeleton>
            <Skeleton h={'500px'} my={10}>
              <div>contents wrapped</div>
              <div>won't be visible</div>
            </Skeleton>
        </Flex> 
    :
      <Flex bg={'#eee'} py={5}  direction={'column'} w={{base: '90%', md: '100%'}} >
        
        <Flex  ml={'45px'} flexWrap={'wrap'} alignItems={'center'} direction={{base: 'column', md: 'row'}}  > 
        {phones.length === 1 ? 
        <Phone key={phones[0].id} phone={phones[0]} />
        :
          <>
            {phones.map(phone =>(
            <Phone key={phone.id} phone={phone}  />
            ))}
          </>
        }

            
        </Flex>
        
      </Flex>
      }
    </Flex>
    </>
  )
}

export default PhonePage