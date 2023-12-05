import React, { useState } from 'react'
import likeBtn from '../../assets/greenThumb.png'
import noLikeBtn from '../../assets/greyThumb.png'

const Like = () => {
    const [like, setLike] = useState(false)

    const addLike = () => {
      like ? setLike(false) : setLike(true)
    }
    return (
      <img
      onClick={addLike}
      height={30}
      width={40}
      src={ like == true ? likeBtn : noLikeBtn }/>
    )
  }

  export default Like
