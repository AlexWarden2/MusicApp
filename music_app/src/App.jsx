import React, { useState } from 'react';
import { useTable } from "react-table";
import './App.css'
import { Like } from './Like'


const profile = {
  name: 'Jimmy Sax',
  genre: 'Genre: Saxaphhone',
  imageUrl: 'https://www.selmer.fr/cdn/shop/articles/JimmySaxAxos-61af2cfa220f8.jpg',
  imageHeight: 810,
  imageWidth:540,
  intro: 'Jim Rolland known as "Jimmy Sax" is an incredible saxophonist, multi-intrumentist, composer and entertainer more oriented towards electronic music. His track record of 1,500 shows, 1 million followers, 300 Million views and 2 golden discs has turned him into a unique figure in the world of saxophone and electronic music.'
};

const popularSongs = [
  { id: 1, title: 'No Man No Cry', YouTubeViews: 196989072, SpotifyViews: 66581703, ReleaseDate: '27 Apr 2015', coverImg: 'https://i.scdn.co/image/ab67616d0000b2738deb54355bae042bc482af5b', length: 6.59, like: 'Like', fav: 'fav' }, 
  { id: 2, title: 'Time', YouTubeViews: 37638501, SpotifyViews: 23550517, ReleaseDate: '26 Jul 2018', coverImg: 'https://www.intoscana.it/wp-content/uploads/Jimmy-Sax-2022.jpg', length: 2.44, like: 'Like' }, 
  { id: 3, title: 'Blue', YouTubeViews: 32471210, SpotifyViews: 'N/A', ReleaseDate: '4 Oct 2016', coverImg: 'https://i1.sndcdn.com/artworks-000346830714-lk41ps-t500x500.jpg', length: 5.51, like: 'Like' }, 
  { id: 4, title: 'Smile', YouTubeViews: 369656, SpotifyViews: 3979591, ReleaseDate: '29 Jun 2021', coverImg: 'https://i.scdn.co/image/ab67616d0000b273dc07263577913accd9a47a43', length: 2.29, like: 'Like' }
];

export default function App() {

  const [ counter, setCounter ] = useState(0)

  const handleIncrease = () => {
    setCounter(previousState => previousState + 1)
  } 

  const data = React.useMemo(() => popularSongs, [])
  const columns = React.useMemo(() => [
    {
      Header: "ID",
      accessor: "id"
    },
    {
      Header: "Cover Photo",
      accessor: "coverImg",
      Cell: tableProps => (
        <img
          src={tableProps.row.original.coverImg}
          width={90}
          heght={90}
          alt='Player'
        />
      )
    },
    {
      Header: "Song Title",
      accessor: "title"
    },
    {
      Header: "YouTube Views",
      accessor: "YouTubeViews"
    },
    {
      Header: "Spotify Plays",
      accessor: "SpotifyViews"
    },
    {
      Header: "Release date",
      accessor: "ReleaseDate"
    },
    {
      Header: "Song Length",
      accessor: "length"
    },
    {
      Header: "Like",
      accessor: "like",
      Cell: 
        <button 
        onClick={handleIncrease}>
          Like
        </button>
    },
    {
      Header: "Add to queue",
      accessor: "fav",
      Cell: <Like />
    }
  ], 
  []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })


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

      <div>
        <div>
          <table {...getTableProps()}> 
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                      ))}
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </div>

      <h3>Songs liked: {counter}</h3>


    </>

    
  );
}

