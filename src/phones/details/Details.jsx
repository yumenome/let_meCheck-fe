import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Table } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Details = ({display, phone}) => {
  return (
    <Box ml={2} border={'1px solid #eee'} w={{base: '100%',md: '50%'}} shadow={'lg'} >
        
        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >OS</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.os}</Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >CPU</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.cpu}</Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >GPU</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.gpu}</Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >RAM</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.ram}</Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >STORAGE</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.storage} </Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >DISPLAY SIZE</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.size} </Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >CAMERA</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.camera} </Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >SPEAKER</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.speaker}</Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'}  borderBottom={'1px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >BATTERY</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.battery}</Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >COLOR</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.color}</Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'9px solid #eee'}>
            <Text ml={3} fontSize={'lg'} color={'red'} >LAUNCH</Text>
            <Text w={'50%'} fontSize={'md'} py={2} >{phone.launch}</Text>
        </Flex>

        <Text fontSize={'xl'} mx={2} color={'red'} borderBottom={'3px solid #eee'} fontWeight={'bold'} > Pricing $ </Text>
        {phone.prices.map(price => (
            <Flex justifyContent={'space-between'} alignItems={'center'} borderBottom={'1px solid #eee'}>
                <Text ml={3} fontSize={'lg'}  >{price.type}</Text>
                <Text w={'50%'} fontSize={'md'} color={'red'} py={2} > {price.amount} lakh </Text>
            </Flex>

        ) )}

        {display ? 
         <Link to={`/${phone.id}`} >
            <Button w={'100%'} color={'white'} size={'sm'} bg={'black'} borderRadius={0} _hover={{color: 'black', background: '#eee'}} >
            check-out reviews 
            </Button>
        </Link>  :
        <Link to={'/'} >
            <Button w={'100%'} color={'white'} size={'sm'} bg={'black'} borderRadius={0} _hover={{color: 'black', background: '#eee'}} >
                back to home
            </Button>
        </Link>
        }
        
       

        
    </Box>
  )
}

export default Details