import React, { useState } from 'react'
import {Input} from 'antd'

export default function AddFoodForm({setFoodData}) {
    const [addedFoodName, setAddedFoodName] = useState()
    const [addedFoodImage, setAddedFoodImage] = useState()
    const [addedFoodCal, setAddedFoodCal] = useState()
    const [addedFoodServings, setAddedFoodServings] = useState()

    const handleSubmit = (event) =>{
        event.preventDefault()
        setFoodData((prevFood)=>[...prevFood, {name:addedFoodName, image:addedFoodImage, calories:addedFoodCal, servings:addedFoodServings}])
    }
    
    

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name</label>
            <Input value={addedFoodName} name='addedFoodName' onChange={(event)=>{setAddedFoodName(event.target.value)}}></Input>
        </div>

        <div>
            <label>Image</label>
            <Input value={addedFoodImage} name='addedFoodImage' onChange={(event)=>{setAddedFoodImage(event.target.value)}}></Input>
        </div>

        <div>
            <label>Calories</label>
            <Input value={addedFoodCal} name='addedFoodCal' onChange={(event)=>{setAddedFoodCal(event.target.value)}}></Input>
        </div>

        <div>
            <label>Servings</label>
            <Input value={addedFoodServings} name='addedFoodServings' onChange={(event)=>{setAddedFoodServings(event.target.value)}}></Input>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}
