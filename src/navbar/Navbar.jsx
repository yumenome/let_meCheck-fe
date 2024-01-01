import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <Box boxShadow='md'  >
        <Flex justifyContent={'space-between'} alignItems={'center'} >
            <Flex py={3} pl={2} alignItems={'center'} >
                <Logo />
                <Text  fontSize={{ md: '15px', lg: '20px'}} fontWeight={'bold'} color={'#43A3F9'}> let_meCheck </Text>
            </Flex>
            <Flex mr={3} alignItems={'center'}>
                <Flex alignItems={'center'} >
                    <Link to='/' >
                        <Flex alignItems={'center'} mr={2} >
                           <Text  fontSize={{ md: '12px', lg: '16px'}}  _hover={{color: '#43A3F9'}} border={'1px solid #eee'} p={2} borderRadius={7} color={'gray'} > Home_ </Text>
                        </Flex>
                    </Link>
                    <Link to='/phones' >
                        <Flex alignItems={'center'} mr={2} >
                           <Text  fontSize={{ md: '12px', lg: '16px'}}  _hover={{color: '#43A3F9'}} border={'1px solid #eee'} p={2} borderRadius={7} color={'gray'} > Phones_ </Text>
                        </Flex>
                    </Link>

                </Flex>
                {/* {display &&} */}
                <SearchBar />
            </Flex>
        </Flex>
    </Box >
  )
}

export default Navbar