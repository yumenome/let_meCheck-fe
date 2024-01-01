import { Label, Radio } from 'flowbite-react'
import React from 'react'
import { useStateContext } from '../../context/ContextProvider'

const ByColor = ({color}) => {

    const { phones, setPhones } = useStateContext();

    const toColor = (title) =>{
        console.log(title);
        const filtered = phones.filter(phone => phone.color.includes(title));
        setPhones(filtered)
        console.log(filtered)
        
    }

  return (
    <fieldset className="flex max-w-md flex-col gap-4">
            <div className="flex column items-center gap-2">
                <Radio className='my-3 mx-2' id={color.id} name={color} value={color.slug} onClick={() => {toColor(color.title)}} />
                <Label htmlFor="united-state">{color.title}</Label>
            </div>
        </fieldset>
  )
}

export default ByColor