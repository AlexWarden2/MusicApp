import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'

import { ProfileIntro, SongTable, Background } from './components'
import './App.css'


function App() { 
  return (
  
  <>
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.Home />} />

          <Route path="/about" element={<Pages.About />} />

          <Route path="/form" element={<Pages.Form />} />

          <Route path="/explore">
            <Route index element={<Pages.Explore />} />
            <Route path=":id" element={<Pages.ExploreSong/>}/>
          </Route>

        </Route>



        <Route path="*" element={<Pages.NotFound/>} />
      </Routes>
    </div>

    {/* <ProfileIntro />

    <SongTable /> 

    <Background/> */}
    
  </>
  );
}

export default App
