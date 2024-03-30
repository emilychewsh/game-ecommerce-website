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
import NotFound from "./pages/NotFound"

// Creating a context to manage global state
export const AppContext = React.createContext();

function App() {
  // State for storing games data fetched from the server
  const [games, setGames] = useState([]) 

  // Function to fetch games data from the server
  const fetchData = () => {
    fetch("http://localhost:3000/games")
      .then(res => res.json())
      .then(data => {
        setGames(data)
      })
      .catch(e => console.log(e.message))
  }
  
  // Effect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData()
  }, [])

   // State for storing variables for wishlist and shopping bag items
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
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
        </Router>
      </AppContext.Provider>
    </>
  )
}

export default App
