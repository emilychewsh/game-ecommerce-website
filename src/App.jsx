import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from "./pages/Main"
import MyBag from "./pages/MyBag"
import MyWishlist from "./pages/MyWishlist"

function App() {

  return (
    <>
        <Router>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/myWishlist" element={<MyWishlist />} />
              <Route exact path="/myBag" element={<MyBag />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
