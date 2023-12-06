import React, { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './style.css'


const ExploreSong = () => {

const [item, setItem] = useState({ images: {} })
const { id } = useParams()
const navigate = useNavigate()

useEffect(() => {
    fetchItem()
}, [])

const fetchItem = async () => {

    const response = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${id}`)
    const fortniteData = await response.json()
    setItem(fortniteData.data)
}

  return (
    <div>
        <button onClick={() => navigate('/explore')}>Back to Explore</button>
        <h1>
            {item.name}
        </h1>
        <p>{item.description}</p>
        <img src={item.images.icon} alt={item.name} />
    </div>

  )
}

export default ExploreSong
