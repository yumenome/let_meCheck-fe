import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import ByColor from './ByColor'
import ByBrand from './ByBrand'

const Sidebar = ({brands, colors}) => {
  return (
      <Box borderRight={'1px solid #eee'} mt={5} w={{base: '30%',md:'11%'}} >
        <Box borderBottom={'1px solid #ccc'} p={3}>
            <Text color={'blue'} my={1} borderBottom={'1px solid blue'} fontWeight={600} fontSize={'18px'} textAlign={'center'}>Brand</Text>
            {brands.map((brand) => (
              <ByBrand key={brand.id} brand={brand} />
            ))}
        </Box>        
        <Box borderBottom={'1px solid #ccc'} px={2}>
            <Text color={'blue'} my={1} borderBottom={'1px solid blue'} fontWeight={600} fontSize={'18px'} textAlign={'center'}>Color</Text>
            {colors.map((color) => (
              <ByColor key={color.id} color={color} />
            ))}
        </Box>  
        <Text textAlign={'center'} fontSize={18}  border={'1px solid #333'} my={3} mx={5} borderRadius={5} _hover={{background: '#333', color: '#fff'}}  onClick={() => window.location.reload(false)} >
          ALL
        </Text>
      </Box>
  )
}

export default Sidebar
