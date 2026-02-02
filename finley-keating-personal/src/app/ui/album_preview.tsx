import Image from "next/image";

export default function AlbumPreview({name, artist, release_year, thumbnail}: Album) {
    return (
        <div className="album">
            
            <Image className="albumImage"
              src={thumbnail}
              alt="Picture of the author"
              width={500}
              height={500}/>
            <div className="albumBio">
                <h1>Name: {name}</h1>
                <h1>Artist: {artist}</h1>
                <h1>Release Year: {release_year}</h1>
            </div>
            
            
            
        </div>
    )
}