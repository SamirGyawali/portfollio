import { useState } from 'react'
import styles from "./App.module.css"
import { Navbar } from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />

      <Hero />

      <Projects />

    </div>
  )
}

export default App
