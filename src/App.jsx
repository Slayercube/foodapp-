import { useState } from 'react'
import Search from './components/Search'
import Foodlist from './components/Foodlist'
import Nav from './components/Nav'
import "./App.css"
import Container from './components/Container'
import InnerContainer from './components/innerContainer'
import FoodDetails from './components/FoodDetails'
function App() {
  const [ foodData , setFoodData ] = useState([])
  const [foodId , setFoodId] = useState(656329)
  

  return (
    <div className="App">
      <Nav />
     <Search foodData={foodData} setFoodData={setFoodData} />
     <Container>    
      <InnerContainer> <Foodlist foodData={foodData} setFoodId={setFoodId}/> </InnerContainer>
      <InnerContainer> <FoodDetails foodId={foodId}/> </InnerContainer>
     </Container>
     
    </div>
  )
}

export default App
