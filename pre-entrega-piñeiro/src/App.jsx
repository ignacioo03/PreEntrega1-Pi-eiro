import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      
      

      <ItemListContainer saludo ="Hola, bienvenidos a Pastas La Hilda" />
      
    </>
  )
}

export default App
