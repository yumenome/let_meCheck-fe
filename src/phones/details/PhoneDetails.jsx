import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Carousel } from 'flowbite-react'
import React from 'react'
import Details from './Details'

const PhoneDetails = ({ display, phone}) => {
  return (
    <>
      <Text fontSize={'25px'} my={2} fontWeight={'bold'}  >{phone.name}</Text>
      <Flex  direction={{base: 'column',md: 'row'}}  >
      <Box display={{base: 'none',md: 'block'}}>
        <Carousel  indicators='off' pauseOnHover slideInterval={3000}  style={{width: '600px',height: '600px'}}  >
          <Image src={'http://localhost:8000/storage/' + `${phone.phone_img}`}  pr={{base: 0,md: 10}} w={{base: '400px',md: '500px'}} h={{base: '400px',md: '600px'}} />
          <Image src={'http://localhost:8000/storage/' + `${phone.phones_img}`}  pr={{base: 0,md: 10}} w={{base: '400px',md: '500px'}} h={{base: '400px',md: '600px'}} />
        </Carousel>
      </Box>
      <Details phone={phone} display={display}  />
      </Flex> 
    </>
  )
}

export default PhoneDetails