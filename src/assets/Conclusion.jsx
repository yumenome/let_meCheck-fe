import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import i2 from '../assets/i1.jpg'

const Conclusion = ({conclusions}) => {
  return (
    <Box border={'1px solid #ccc'}  mb={9}  p={4} >
        <Text  borderBottom={'1px solid #ccc'} mb={2} fontSize={'30px'} >As Conclusion</Text>
       {conclusions.map(con => (
           <Flex direction={'column'} key={con.id} >
            <Image mx={'auto'} my={3} borderRadius={7} w={'900px'} src={'http://localhost:8000/storage/' + `${con.conclusion_img}`} />
            <Text pt={4} fontSize={'lg'}>
              {con.content}
            </Text>
         </Flex>
       ))}
    </Box>
  )
}

export default Conclusion