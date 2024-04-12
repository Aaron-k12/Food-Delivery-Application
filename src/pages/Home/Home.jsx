import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'


function Home()  {
    const [catergory, setCategory] = useState("All")

  return (
    <div className="home-section">
      <Header />
      <ExploreMenu category={catergory} setCategory={setCategory} />
      <FoodDisplay category={catergory} />
      <AppDownload />
    </div>
  )
}

export default Home

