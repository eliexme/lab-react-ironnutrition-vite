import React, { useState } from 'react'
import { Input} from 'antd'

export default function Search({setSearchedFood}) {

    const handleChange = (event) =>{
       setSearchedFood(event.target.value)
    }

  return (
    <form onChange={handleChange}>
        <label>Search for a food</label>
        <Input name='searchedFood' onChange={handleChange}></Input>
    </form>
  )
}
