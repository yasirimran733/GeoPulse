import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import News from '../pages/News'
import Jobs from '../pages/Jobs'
import DashBoard from '../pages/DashBoard'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashbaord' element={<DashBoard/>}></Route>
      <Route path='/jobs' element={<DashBoard/>}></Route>
      <Route path='/news' element={<News/>}></Route>
    </Routes>
  )
}

export default App
