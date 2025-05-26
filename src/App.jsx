import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Navigation from './Navigation.jsx'
import Dashboard from './dashboard'
import CalendarView from './Calender'
import Activityfeed from './Activityfeed.jsx'
function App() {


  return (
    <>
     <Header/>
    <div className="dashboard-div">
        <Navigation/>
        <Dashboard/>
        <CalendarView/>   
    </div>
       <Activityfeed/>
    
    </>
  )
}

export default App
