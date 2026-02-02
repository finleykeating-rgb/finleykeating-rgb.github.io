import AlbumPreview from "../ui/album_preview";
import NavBar from "../ui/nav-bar";
import Albums from "../../../public/music_descriptions/albums.json";



function AlbumList() {
  const music_data: Album[] = Albums
  return (
    <div id="album_grid">
          {music_data.map(data => (
            <AlbumPreview key={data.name} name={data.name} artist={data.artist} release_year={data.release_year} thumbnail={data.thumbnail}/>
          ))}
    </div>
  )
}

export default function music() {
  return (
    <div id="mainLayout">
      <NavBar/>
      <main>
        <div>
          <h1>This is music</h1>
        </div>
        <AlbumList/>
      </main>
    </div>
  );
}