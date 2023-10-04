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
    <>
      <Header />
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}

export default App
