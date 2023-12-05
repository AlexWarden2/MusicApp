import React from 'react'

const profile = {
    name: 'Jimmy Sax',
    genre: 'Genre: Saxaphhone',
    imageUrl: 'https://www.selmer.fr/cdn/shop/articles/JimmySaxAxos-61af2cfa220f8.jpg',
    imageHeight: 810,
    imageWidth:540,
    intro: 'Jim Rolland known as "Jimmy Sax" is an incredible saxophonist, multi-intrumentist, composer and entertainer more oriented towards electronic music. His track record of 1,500 shows, 1 million followers, 300 Million views and 2 golden discs has turned him into a unique figure in the world of saxophone and electronic music.'
  };

  const ProfileIntro = () => {
    return (
        <>  
            <h1>{profile.name}</h1>
            <h2>{profile.genre}</h2>
            <img
                className="avatar"
                src={profile.imageUrl}
                alt={'Photo of ' + profile.name}
                style={{
                    width: profile.imageWidth,
                    height: profile.imageHeight
                }}
            />
            <p>{profile.intro}</p>
        </>     

    )
  }

  export default ProfileIntro
