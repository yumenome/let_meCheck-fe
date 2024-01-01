import React, { useEffect, useState } from 'react'
import MainRow from './MainRow'
import Slider from './Slider'
import iPhone from '../../assets/iphone1.jpg'
import samsung from '../../assets/zflip.jpg'
import xaiomi from '../../assets/13t.jpg'
import api_client from '../../api/axios_client'
import { useStateContext } from '../../context/ContextProvider'


const MainContents = () => {


  const { brands, setPhones } = useStateContext();
  const[loading, setloading] = useState(true);


  useEffect(() => {
    api_client.get('/phones')
      .then(({data}) => {
        console.log(data.data);
        setPhones(data.data);
        setloading(false);
      })
  },[])


  return (
    <div>
        <Slider />
        {brands.map((brand) =>(
            <MainRow key={brand.id} loading={loading} brand={brand}  />
        ))}
    </div>
  )
}

export default MainContents