"use client"
import { Dispatch, SetStateAction, useState } from "react";
import AlbumPreview from "../ui/album_preview";
import NavBar from "../ui/nav-bar";
import AirportStyleSign from "../ui/airport_style_sign"
import Albums from "@public/music_descriptions/albums.json";
import {Howler} from 'howler';
import { BiVolume, BiVolumeFull, BiVolumeLow, BiVolumeMute } from "react-icons/bi";
import genericSign from "../ui/sign";
import airportTag from "../ui/airport_tag";

function AlbumBanner(music_data: Album[], speed_per_album: number, album_per_screen: number, album_size_percentage: number, setAlbum: Dispatch<SetStateAction<Album>>) {

  const num = music_data.length;

  const speed = num * speed_per_album;

  const scroll_distance = -100 * num / album_per_screen

  return (
      <div className="banner-wrapper center-vertically">
          <div className="wrapper">
              <div className="images" style={{'--speed': `${speed}s`, '--scroll':`${scroll_distance}%`} as React.CSSProperties}>
                  {music_data.map((data, index)=> (
                    AlbumPreview(data, index, album_per_screen, album_size_percentage, setAlbum)
                  ))}
                  {music_data.map((data, index)=> (
                    AlbumPreview(data, index + num, album_per_screen, album_size_percentage, setAlbum)
                  ))}
              </div>
          </div>
      </div>
  )
}

function Blurb({name, artist, release_year, thumbnail, album_preview}: Album) {

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
        {AirportStyleSign("MUSIC", "music")}
      </div>
      <div>
        {genericSign("Hover over an album to view the name, artist, release year and hear an excerpt")}
      </div>
      <div>
        <label htmlFor="range-slider">{volumePercentage}% {VolumeControl(volumePercentage, isMuted)}</label>
        <input type="range" min="0" max="100" onChange={updateVolumeSlider}/>
      </div>
      <div>
        {airportTag(name, artist, release_year)}
      </div>
    </div>
    
  )
}

export default function music() {

  const music_data : Album[] = Albums

  const middle = Math.floor(music_data.length / 2)

  const [currentAlbum, setAlbum] = useState<Album>(
    {
      "name": "YMO USA",
      "artist": "Yellow Magic Orchestra",
      "release_year": 1978,
      "thumbnail": "/music_thumbnails/ymo_usa.jpg",
      "album_preview": "/music_files/album_preview/the_adventures_of_kohsuke_kindaichi_preview.mp3"
    },
  )

  return (
    <div id="main-layout">
      <NavBar/>
      <main className="musicPage">
        {AlbumBanner(music_data.slice(0, middle), 2, 6, 70, setAlbum)}
        {Blurb(currentAlbum)}
        {AlbumBanner(music_data.slice(middle), 2, 6, 70, setAlbum)}
      </main>
    </div>
  );
}