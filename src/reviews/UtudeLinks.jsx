import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import t1 from '../assets/t1.jpg'
import t2 from '../assets/t2.jpg'

const UtudeLinks = ({reviews}) => {
  return (
    <Box border={'1px solid #ccc'} my={6} p={4} shadow={'lg'} >
        <Text color={'red'} borderBottom={'1px solid red'} mb={2} fontSize={'30px'} textAlign={'center'}>Utude_Reviews</Text>
        <Flex justifyContent={'space-evenly'} alignItems={'center'} mt={5}>
        {reviews.map(review => (
              <Flex direction={'column'} key={review.id}>
                  <Image src={'http://localhost:8000/storage/' + `${review.thumbnail}`} w={'400px'} borderRadius={5}  />
                  <Text textAlign={'center'} > TO WATCH FULL REIVEW <a href={review.utude_link}>
                          <span className='text-blue-500 text-lg'>👉🏻{review.channelName}</span></a>
                  </Text>
              </Flex>
        ))}
              </Flex>
    </Box>
  )
}

export default UtudeLinks