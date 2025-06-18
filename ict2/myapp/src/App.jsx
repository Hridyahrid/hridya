import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import Navbar from './components/Navbar'

import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/Statebasics'
import Counter from './components/Counter'
import Name from './components/Name'
import User from './components/User'
import Product from './components/Product'




function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
     <br/><br/> <h2>WELCOME</h2>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
         <Route path='/sign' element={<Signup/>}/>
         
          <Route path='/state' element={<StateBasics/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/name' element={<Name/>}/>
           <Route path='/user' element={<User/>}/>
           <Route path='/product' element={<Product/>}/>
      </Routes>
 

    </>
  )
}

export default App
