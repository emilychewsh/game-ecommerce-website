import React, { useContext, useEffect, useState } from 'react'
import "./home.css"
import Header from '../components/Header'
import GameCard from '../components/GameCard'
import filterGenreData from '../data/filterGenreData'
import { AppContext } from '../App'

function Home( {games} ) {
  // State variables for games data, filters, and wishlist
  const [data, setData] = useState(games)
  const [filters, setFilters] = useState(filterGenreData)
  const {wishlist, setWishlist} = useContext(AppContext)

  // Effect hook to load wishlist from local storage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, [setWishlist]);

  // Effect hook to set default filter and data when games data changes
  useEffect(() => {
    // Set "All" category as active by default
    setFilters(filters.map(filter => ({
      ...filter,
      active: filter.name === "All"
    })));
    

    // Set data to all games initially
    setData(games);
  }, [games]);
  
  // Function to filter games based on category
  const handleFilterGames = (category) => {
    setFilters(
      filters.map(filter=> {
        filter.active = false;
        return {
          ...filter,
          active: filter.name === category 
        }
      })
    )

    if (category === "All") {
      setData(games) // If "All" category is selected, display all games
      return
    }

    setData(games.filter(game => game.category === category))
  }

  // Set variables for text in Search Bar
  const [text, setText] = useState("")

  // Function to handle search input change
  const handleSearchGames = (e) => {
    setData(games.filter(game => game.title.toLowerCase().includes(e.target.value.toLowerCase())))
    setText(e.target.value) // Update search bar text state
  } 

  return (
    
      <div className='banner'>
        <Header />

        <section id='categories' className='categories'>
          <div className='container-fluid mt-2'>
            <div className='row'>
              <div className='col-lg-8 d-flex align-items-center justify-content-start'>
                <ul className='filters'>
                  {
                    filters.map(filter => (
                      <li key={filter.id} 
                        className={`${filter.active ? 'active' : undefined}`}
                        onClick={() => {handleFilterGames(filter.name)}}>
                        {filter.name}
                        </li>
                    ))
                  }
                </ul>
              </div>

              <div className='col-lg-4 d-flex align-items-center justify-content-end'>
                <div className='search'>
                  <input 
                  type='text' 
                  name='search' 
                  placeholder='Search for Game' 
                  value={text} 
                  onChange={handleSearchGames}/>
                  <i className='bi bi-search'></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='row'>
          {
            data.map(game => (
              <GameCard key={game.id} game={game} />
            ))
          }
        </div>
      </div>
  )
}

export default Home

