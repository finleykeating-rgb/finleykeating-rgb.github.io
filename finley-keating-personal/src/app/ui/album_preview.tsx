import Image from "next/image";

export default function AlbumPreview({name, artist, release_year, thumbnail}: Album) {
    return (
        <div className="album">
            
            <Image className="thumbnail"
              src={thumbnail}
              width={800}
              height={800}
              alt={name}
              sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
              />
            <Image 
                className="record"
                src="/music_thumbnails/record.svg" 
                alt="record" 
                width={600}
                height={600}
                sizes="(max-width: 768px) 80%, (max-width: 1200px) 33%, 25%"
                />
            <div className="description">
                <h1>{name}</h1>
                <h1>{artist}</h1>
                <h1>{release_year}</h1>
            </div>
            
            
        </div>
    )
}