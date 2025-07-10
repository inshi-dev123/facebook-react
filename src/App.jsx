import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './components/Left'
import Login from './components/login'
import Footerb from './components/Footer'
import Createacc from './components/Create'
import './components/Home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Home(){
  return (
    <div className='home-wrapper'>
      <div className='main-content'>
        <div className="upper">
          <div className="left-side">
            <Left />
          </div>
          <div className="right-side">
            <Login />
          </div>
        </div>
        <div className='bottom'>
          <Footerb/>
        </div>
      </div>
    </div>
  )
}



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Createacc/>}/>
      </Routes>
    </Router>
  )
}
export default App
