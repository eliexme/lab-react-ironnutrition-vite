// src/App.jsx
import './App.css'
import foods from './foods.json'
import { useState } from 'react'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'

function App() {
  const [foodData, setFoodData] = useState(foods)
  const [searchedFood, setSearchedFood] = useState('')

  const searchedFoods = foodData.filter((food)=>{
    return(food.name.toLowerCase().includes(searchedFood.toLowerCase()))
  })

  return (
  <div className='App'>
    <Search setSearchedFood={setSearchedFood}/>

    {searchedFoods.map((eachFood)=>{
      return(
        <div key={eachFood.name}>
          <FoodBox food={eachFood} foodData={foodData} setFoodData={setFoodData}/>
        </div>
      )
    })}

    <AddFoodForm setFoodData={setFoodData}/>
  </div>
  )
}
export default App