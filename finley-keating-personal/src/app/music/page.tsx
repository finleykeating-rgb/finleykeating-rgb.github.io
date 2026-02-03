import AlbumPreview from "../ui/album_preview";
import NavBar from "../ui/nav-bar";
import Albums from "../../../public/music_descriptions/albums.json";
import { randomInt } from "crypto";

const shuffle = (array: Album[]) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 



function AlbumBanner() {
  let music_data: Album[] = Albums  
  const num = music_data.length;
  let index = 0;
  // while (index < 20) {
  //   music_data.push(music_data[index])
  //   index += 1
  // }
  const speed = 60000;

  music_data = music_data.reverse()

  return (
      <div className="banner-wrapper">
          <div className="wrapper">
              <div className="images" style={{'--speed': `${speed}ms`} as React.CSSProperties}>
                  {music_data.map((data, index)=> (
                    <AlbumPreview key={index} name={data.name} artist={data.artist} release_year={data.release_year} thumbnail={data.thumbnail}/>
                  ))}
              </div>
          </div>
      </div>
  )
}

function Blurb() {
  return (
    <div>
      <p>This is a collection of my favourite albums</p>
      <p>One of my most important hobbies is listening to music</p>
      <p>I have a preference for music with unique and layer instrumentals, such as classical music and jazz fusion</p>
    </div>
    
  )
}

export default function music() {
  return (
    <div id="main-layout">
      <NavBar/>
      <main className="musicPage">
        <AlbumBanner />
        <Blurb />
        <AlbumBanner />
      </main>
    </div>
  );
}