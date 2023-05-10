import React from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd'


export default function FoodBox({food, foodData, setFoodData}) {
  const deleteFood = (name)=>{
    const updatedData = foodData.filter((eachFood)=>{
      return(!eachFood.name.includes(name))
    })
    setFoodData(updatedData)
  }
  return (
    <div>
        <h4>{food.name}</h4>
        <img src={food.image} alt='food img'/>
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>Total calories: {food.servings * food.calories}</p>
        <Button type='button' onClick={()=>{deleteFood(food.name)}}>Delete</Button>
    </div>
  )
}
