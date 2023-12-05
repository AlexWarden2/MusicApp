import React, { useState } from 'react';
// import { useTable } from "react-table";

import { ProfileIntro, SongTable } from './components'
import './App.css'


function App() {

  const [ counter, setCounter ] = useState(0)

  const handleIncrease = () => {
    setCounter(previousState => previousState + 1)
  } 

  return (
    <>
      <ProfileIntro />

      <SongTable />

    </>

    
  );
}

export default App
