import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './navbar/Navbar'
import PhonePage from './pages/PhonePage'
import ReviewPage from './pages/ReviewPage'

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/phones' element={<PhonePage />} />
          <Route path='/:id' element={<ReviewPage />} />
        </Routes> 
    </>
  )
}

export default App