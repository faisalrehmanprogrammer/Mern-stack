import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'

import Admin from './Admincrud/Admin'
import Dashboard from './Admincrud/Dashboard'
import Post from './Admincrud/Post'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/admin" element={<Admin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/post" element={<Post/>} />



          
    

        </Routes>
      </Router>

    </>
  )
}

export default App
