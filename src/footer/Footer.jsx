import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Text py={3} textAlign={'center'} borderTop={'1px solid red'}>thanks for using us!</Text>
    <Flex pb={2} alignItems={'center'} justifyContent={'space-around'} >
        <Box>
            <Text fontSize={'18px'} > any suggestion ?</Text>
            <Text fontSize={'18px'} > wanna give some reviews ?</Text>
        </Box>
        <Box>
            <Text fontSize={'20px'} > content us:  </Text>
            <Text fontSize={'18px'}  color={'blue'} > 
            <a href="#">let_meCheck@gmail.com</a> 
            </Text>
        </Box>
    </Flex>
    </>
  )
}

export default Footer