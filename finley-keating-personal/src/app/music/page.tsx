"use client"
import { useState } from "react";
import AlbumPreview from "../ui/album_preview";
import NavBar from "../ui/nav-bar";
import Albums from "@public/music_descriptions/albums.json";
import {Howler} from 'howler';

function AlbumBanner(music_data: Album[], speed_per_album: number) {

  const num = music_data.length;

  const speed = num * speed_per_album;

  const scroll_distance = -20 * num

  return (
      <div className="banner-wrapper">
          <div className="wrapper">
              <div className="images" style={{'--speed': `${speed}s`, '--scroll':`${scroll_distance}%`} as React.CSSProperties}>
                  {music_data.map((data, index)=> (
                    AlbumPreview(data.name, data.artist, data.release_year, data.thumbnail, data.album_preview, index)
                  ))}
                  {music_data.map((data, index)=> (
                    AlbumPreview(data.name, data.artist, data.release_year, data.thumbnail, data.album_preview, index + num)
                  ))}
              </div>
          </div>
      </div>
  )
}

function Blurb() {

  const [volumePercentage, setVolumePercentage] = useState(30);

  const updateVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    Howler.volume(e.target.valueAsNumber / 100)
  }
  return (
    <div className="blurb">
      <div>
        <p>This is a collection of my favourite albums. One of my most important hobbies is listening to music. I have a preference for music with unique and layer instrumentals, such as classical music and jazz fusion</p>
      </div>
      <div>
        <p>
          Hover over an album to view the name, artist, release year and hear a excerpt
        </p>
      </div>
      <div>
        <label htmlFor="range-slider">{volumePercentage}%</label>
        <input type="range" min="0" max="100" onChange={updateVolume}/>
      </div>
      
    </div>
    
  )
}

export default function music() {

  const music_data : Album[] = Albums

  const middle = Math.floor(music_data.length / 2)

  return (
    <div id="main-layout">
      <NavBar/>
      <main className="musicPage">
        {AlbumBanner(music_data.slice(0, middle), 2)}
        <Blurb/>
        {AlbumBanner(music_data.slice(middle), 2)}
      </main>
    </div>
  );
}