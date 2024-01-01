import { Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <div>
        <Image src={logo} w={'40px'} display={{xs: 'none', lg: 'block'}} />
    </div>
  )
}

export default Logo