import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Explore = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const fetchItems = async () => {
    const response = await fetch('https://fortnite-api.com/v2/cosmetics/br')
    const fortniteData= await response.json()
    setItems(fortniteData.data.slice(0, 10))
    setLoading(false)
  }

  fetchItems()
}, [])

const displayItems = items.map((el) => (
      <div key={el.id}>
        <Link to={`/explore/${el.id}`}><div className="item">{el.name}</div></Link>
      </div>
    ))


return (
  <div>
    <h1>Explore Page</h1>
    <div className="items">

      {
        loading ? <p style={{ marginTop: "200px", fontSize: "100px" }}>Loading...</p>  : displayItems
      }

    </div>
  </div>
)
}

export default Explore
