import { Carousel } from 'flowbite-react'
import React from 'react'
import apple from '../../assets/banners/apple.png'
import samsung from '../../assets/banners/samsung.png'
import xiaomi from '../../assets/banners/xiaomi.png'


const Slider = () => {
    
  return ( 
    <div className='mt-3' style={{display: 'flex', justifyContent: 'center'}}  >
      <Carousel pauseOnHover slideInterval={3000} style={{width: '1400px',height: '380px'}} >
        <img src={apple} alt="..."  />
        <img src={samsung} alt="..." />
        <img src={xiaomi} alt="..." />
      </Carousel>
    </div>
  )
}

export default Slider