import { Box, Button, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import DetailModal from '../../phones/details/DetailModal'

 
const Phone = ({phone}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Box onClick={onOpen} border={'1px solid #eee'} shadow={'md'} bg={'#fff'} borderRadius={5} minW={'300px'} m={3} p={3} >
        <Text textAlign={'center'} mb={3}>{phone.name}</Text>
        <Image src={'http://localhost:8000/storage/' + `${phone.phone_img}`} alt={phone.phone_img} h={'210px'} w={'180px'} mx={'auto'}  _hover={{width: '185px',height: '212px', cursor: 'pointer'}} />
        <Box mx={3} mt={2}>
            <Text>{phone.ram}</Text>
            <Text>{phone.cpu}</Text>
            <Text>{phone.gpu}</Text>
            <Text>{phone.storage}</Text>
            <Text>{phone.size}</Text>

        </Box>
        <DetailModal  phone={phone} onClose={onClose} isOpen={isOpen} />

       
    </Box>
  )
}

export default Phone 