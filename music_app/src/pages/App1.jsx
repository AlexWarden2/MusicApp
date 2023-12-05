import React from 'react'
import { Recap, Welcome} from './components'

import './App.css'

const App = () => {

  const handleClick = (e) => {
    console.log(`I have clicked the ${e.target.innerText}`)
  }
  return (
    <> 
      <Welcome name="Reddy Virtual" handleClick={handleClick}/>
      <Welcome name="Reddy Hybrid"  handleClick={handleClick}/>
    </>
  )
}

export default App
