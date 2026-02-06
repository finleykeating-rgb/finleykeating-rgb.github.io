"use client"
import { useState } from "react";
import AlbumPreview from "../ui/album_preview";
import NavBar from "../ui/nav-bar";
import AirportStyleSign from "../ui/airport_style_sign"
import Albums from "@public/music_descriptions/albums.json";
import {Howler} from 'howler';
import { BiVolume, BiVolumeFull, BiVolumeLow, BiVolumeMute } from "react-icons/bi";

function AlbumBanner(music_data: Album[], speed_per_album: number, album_size: number) {

  const num = music_data.length;

  const speed = num * speed_per_album;

  const scroll_distance = -1 * album_size * num

  return (
      <div className="banner-wrapper center-vertically">
          <div className="wrapper">
              <div className="images" style={{'--speed': `${speed}s`, '--scroll':`${scroll_distance}%`} as React.CSSProperties}>
                  {music_data.map((data, index)=> (
                    AlbumPreview(data.name, data.artist, data.release_year, data.thumbnail, data.album_preview, index, album_size)
                  ))}
                  {music_data.map((data, index)=> (
                    AlbumPreview(data.name, data.artist, data.release_year, data.thumbnail, data.album_preview, index + num, album_size)
                  ))}
              </div>
          </div>
      </div>
  )
}

function Blurb() {

  const [volumePercentage, setVolumePercentage] = useState(50);
  const [isMuted, setMuted] = useState(false);

  const base_volume = 0.3

  const updateVolumeSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    Howler.volume(e.target.valueAsNumber / 50 * 0.3)
    setVolumePercentage(e.target.valueAsNumber);
    setMuted(false);

  }


  const VolumeControl = ( volumePercentage: number, isMuted: boolean ) => {
    if (isMuted || volumePercentage === 0) {
      return (<BiVolumeMute />);
    }
    if (volumePercentage < 33) {
      return (<BiVolume />);
    }
    if (volumePercentage < 66) {
      return (<BiVolumeLow />);
    }
      return (<BiVolumeFull />);
  };

  return (
    <div className="blurb">
      <div>
        {AirportStyleSign("Music", "music")}
      </div>
      <div>
        <p>
          Hover over an album to view the name, artist, release year and hear an excerpt
        </p>
      </div>
      <div>
        <label htmlFor="range-slider">{volumePercentage}% {VolumeControl(volumePercentage, isMuted)}</label>
        <input type="range" min="0" max="100" onChange={updateVolumeSlider}/>
        
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
        {AlbumBanner(music_data.slice(0, middle), 2, 15)}
        <Blurb/>
        {AlbumBanner(music_data.slice(middle), 2, 15)}
      </main>
    </div>
  );
}