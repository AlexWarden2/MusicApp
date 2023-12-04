import React, { useState } from 'react';

const profile = {
  name: 'Jimmy Sax',
  genre: 'Genre: Saxaphhone',
  imageUrl: 'https://www.selmer.fr/cdn/shop/articles/JimmySaxAxos-61af2cfa220f8.jpg',
  imageHeight: 810/5,
  imageWidth:540/5,
  intro: 'Jim Rolland known as "Jimmy Sax" is an incredible saxophonist, multi-intrumentist, composer and entertainer more oriented towards electronic music. His track record of 1,500 shows, 1 million followers, 300 Million views and 2 golden discs has turned him into a unique figure in the world of saxophone and electronic music.'
};

const popularSongs = [
  { id: 1, title: 'No Man No Cry', YouTubeViews: 196989072, SpotifyViews: 66581703, ReleaseDate: '27 Apr 2015', coverImg: 'https://i.scdn.co/image/ab67616d0000b2738deb54355bae042bc482af5b' }, 
  { id: 2, title: 'Time', YouTubeViews: 37638501, SpotifyViews: 23550517, ReleaseDate: '26 Jul 2018', coverImg: 'https://www.intoscana.it/wp-content/uploads/Jimmy-Sax-2022.jpg' }, 
  { id: 3, title: 'Blue', YouTubeViews: 32471210, SpotifyViews: 'N/A', ReleaseDate: '4 Oct 2016', coverImg: 'https://i1.sndcdn.com/artworks-000346830714-lk41ps-t500x500.jpg' }, 
  { id: 4, title: 'Smile', YouTubeViews: 369656, SpotifyViews: 3979591, ReleaseDate: '29 Jun 2021', coverImg: 'https://i.scdn.co/image/ab67616d0000b273dc07263577913accd9a47a43' }
];

const imgProps = {
  imgHeight: 90,
  imgWidth: 90
}

export default function App() {

  const listSongs = popularSongs.map(song =>
    <li
      key={song.id}
    >
      <img 
        src={song.coverImg} 
        alt="image" 
        style={{
          width: imgProps.imgWidth,
          height: imgProps.imgHeight
        }}
        />
      {song.title}, {'YouTube Views: '}{song.YouTubeViews}, {'Spotify Views: '}{song.SpotifyViews}
    </li>
  );

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


      <h2>Popular Songs:</h2>
      <ul>{listSongs}</ul>
    </>

    
  );
}
