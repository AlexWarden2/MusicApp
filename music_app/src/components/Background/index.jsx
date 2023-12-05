// make background change every 10 seocnds - bbonus if I can make it animated pulse et
import React, { useState, useEffect } from "react";

const Effect = () => {
    const [count, setCount] = useState(0);
    const colours = ['tan', 'firebrick', 'cadetblue', 'gold', 'plum']

    useEffect(() => {

        console.log("I fire when something important happens")
        
        const timer = setInterval(() => {
            console.log("🏓", timer)
            setCount(p => p + 1)
        }, 30000)
      
        return () => {
        clearInterval(timer)
        }

    }, [count])

    return (
        <div id="root" style={{ backgroundColor: colours[count] }}></div>

    )
  }
  
  export default Effect
