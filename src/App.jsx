import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import MyBag from "./pages/MyBag"
import MyWishlist from "./pages/MyWishlist"
import Index from "./components/Index"
import SingleProduct from "./pages/SingleProduct"

function App() {

  return (
    <>
        <Router>
            <Routes>
              <Route path="/" element={<Index />} >
                <Route index element={<Home />} />
                <Route path="/:id" element={<SingleProduct />} />
                <Route path="/myWishlist" element={<MyWishlist />} />
                <Route path="/myBag" element={<MyBag />} />
              </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
