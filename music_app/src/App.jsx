import React, { useState } from 'react';
// import { useTable } from "react-table";

import { ProfileIntro, SongTable, Background } from './components'
import './App.css'


function App() {

  return (
  
  <>
    <ProfileIntro />

    <SongTable /> 

    <Background/>
    
  </>




  );
}

export default App
