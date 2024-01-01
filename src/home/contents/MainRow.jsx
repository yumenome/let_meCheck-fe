import React, { useState } from 'react'
import Phone from './Phone'
import { Box, Button, Flex, Skeleton, Text, useDisclosure } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import DetailModal from '../../phones/details/DetailModal'
import { useStateContext } from '../../context/ContextProvider'

const MainRow = ({ brand, loading}) => {

  const { phones } = useStateContext();

  return (
    <>
    {loading ? 
      <Flex direction={'column'} mx={'200px'}  w={'1200px'}>
            <Skeleton h={'400px'}  my={10}>
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
        <Box  mx={'4.5%'} my={3} p={4}  position={'relative'} shadow={'lg'} bg={'#eee'}  w={'91%'}>
          <Text textAlign={'center'} mb={3} py={3} borderBottom={'1px solid #333'} fontSize={'lg'}>{brand.title}</Text>
          <Flex  overflowX={'scroll'} direction={{base: 'column', lg: 'row'}} >
            {phones.map(phone => (
              <>
              {phone.brand_id === brand.id &&
                <Phone key={phone.id} phone={phone} />
              } 
              </>
            ))}
          </Flex>
          <Button position={'absolute'} shadow={'md'} bg={'black'} color={'white'} borderRadius={0} bottom={0} right={0} size={'sm'} _hover={{color: 'black', background: 'white'}} gap={3}>
            <Link to='/phones'>see_more</Link>
          </Button>

        </Box>
    
      }
    </>
  )
}

export default MainRow