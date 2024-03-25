import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect, useContext} from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import MyBag from "./pages/MyBag"
import MyWishlist from "./pages/MyWishlist"
import Index from "./components/Index"
import SingleProduct from "./pages/SingleProduct"

export const AppContext = React.createContext();

function App() {

  const [games, setGames] = useState([])
  
  const fetchData = () => {
    fetch("http://localhost:5173/src/data/db.json")
      .then(res => res.json())
      .then(data => {
        setGames(data)
      })
      .catch(e => console.log(e.message))
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  const [wishlist, setWishlist] = useState([])
  const [bag, setBag] = useState([])

  return (
    <>
      <AppContext.Provider value={{wishlist, setWishlist, bag, setBag}}>
        <Router>
            <Routes>
              <Route path="/" element={<Index />} >
                <Route index element={<Home games={games}/>} />
                <Route path="/:id" element={<SingleProduct />} />
                <Route path="/myWishlist" element={<MyWishlist games={wishlist} />} />
                <Route path="/myBag" element={<MyBag games={bag} />} />
              </Route>
            </Routes>
        </Router>
      </AppContext.Provider>
    </>
  )
}

export default App
