import React from 'react'
import './App.css'
import Header from './components/Header'
import LocationCard from './components/LocationCard'
import data from "../data/data"

function App() {
  const cards = data.map(item => {
    return (
      <LocationCard
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="container">
      <Header />

      <section className="cardsList">
        {cards}
      </section>
    </div>
  )
}

export default App
