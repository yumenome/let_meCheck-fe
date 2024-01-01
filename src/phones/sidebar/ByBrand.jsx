import { Box } from '@chakra-ui/react'
import React from 'react'
import { Label, Radio } from 'flowbite-react';
import api_client from '../../api/axios_client';
import { useStateContext } from '../../context/ContextProvider';


const Category = ({brand}) => {
  
  const { setPhones } = useStateContext();
  const toBrand = (id) => {
    console.log(id);
    api_client.get(`brands/${id}`)
      .then(({data}) => {
        console.log(data.data);
        setPhones(data.data);
      })
  }

    return (
       <fieldset className="flex max-w-md flex-col gap-4">
            <div className="flex column items-center gap-2">
                <Radio className='my-3 mx-2' id={brand.id} name={brand} value={brand.slug} onClick={() => {toBrand(brand.id)}} />
                <Label htmlFor="united-state">{brand.title}</Label>
            </div>
        </fieldset>
        
    )
  
}

export default Category
