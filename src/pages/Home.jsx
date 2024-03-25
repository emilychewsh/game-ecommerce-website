import React, { useEffect, useState } from 'react'
import "./home.css"
import Header from '../components/Header'
import GameCard from '../components/GameCard'
import filterGenreData from '../data/filterGenreData'

function Home( {games} ) {
  const [data, setData] = useState(games)
  
  const [filters, setFilters] = useState(filterGenreData)

  useEffect(() => {
    // Set "All" category as active by default
    setFilters(filters.map(filter => ({
      ...filter,
      active: filter.name === "All"
    })));
    
    // Set data to all games initially
    setData(games);
  }, [games]);
  
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
      setData(games)
      return
    }

    setData(games.filter(game => game.category === category))
  }

  // Search Bar function
  const [text, setText] = useState("")

  const handleSearchGames = (e) => {
    setData(games.filter(game => game.title.toLowerCase().includes(e.target.value.toLowerCase())))
    setText(e.target.value)
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

