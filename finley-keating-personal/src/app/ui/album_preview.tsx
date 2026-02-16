'use client'
import Image from "next/image";

// Google AI Hash
function stringToHashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char; // Simple hash algorithm
        hash |= 0; // Convert to 32bit integer
    }
    // Use Math.abs to ensure a positive number, as the hash can be negative
    return Math.abs(hash);
}

function randomToRange(randomNum: number, min: number, max: number, divider: number, density: number): number {
    const range = max - min
    return Math.round(((randomNum / divider) % density) * range / density + min);
}


export default function AlbumPreview(album: Album, key: number, album_per_screen: number, album_size_percentage: number, updateAlbum: AlbumCallback, stopAlbum: AlbumCallback) {
    let index = 0
    index += 1;
    
    const album_space_percentage = 100 / album_per_screen
    const padding_percentage = (100 - album_size_percentage) / 2
    const randHash = stringToHashCode(album.name)
    // const randomAngle = randomToRange(randHash, -15, 15, 1, 2 ** 10);
    // const randomX = randomToRange(randHash, -10, 10, 2 ** 10, 2 ** 10);
    // const randomY = randomToRange(randHash, -5, 5, 2 ** 20, 2 ** 10);

    const randomAngle = 0;
    const randomX = 0;
    const randomY = 0;

    const adjust_angle = () => {
        if (randomAngle * randomY > 0) {
            return -randomAngle
        } else {
            return randomAngle
        }
    }

    let lastPlayed = Date.now()

    const handleMouseEnter = () => {
        const now = Date.now()

        if (lastPlayed && now - lastPlayed < 100) {
            return
        }

        lastPlayed = now

        updateAlbum(album)
    }

    const handleMouseLeave = () => {
        stopAlbum(album)
    }

    return (
        <div className="album"   key={key} style={{'--album-space-percentage': `${album_space_percentage}%`} as React.CSSProperties}>
            <div className="album-distribution" style={{'--padding-percentage': `${padding_percentage * album_size_percentage / 100}%`, '--random-rotation': `${adjust_angle()}deg`, '--random-translateX': `${randomX}%`, '--random-translateY': `${randomY}%`} as React.CSSProperties}>
                <Image className="thumbnail" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                src={album.thumbnail}
                width={800}
                height={800}
                alt={album.name}
                style={{clipPath: "url(#albumMask" + index.toString()}}
                />
                <svg width="0" height="0" style={{ position: "absolute" }}>
                    <defs>
                        <clipPath id={"albumMask" + index.toString()} clipPathUnits="objectBoundingBox">
                        <path d="M1 0h-0.3469a0.1688 0.1688 0 0 1 -0.0277 0.0651C0.6008 0.0993 0.5602 0.125 0.5 0.125 s-0.1008 -0.0258 -0.1254 -0.0599A0.1688 0.1688 0 0 1 0.3469 0H0v1H1Z" style={{transform: "rotate(0.25turn) translateY(-1px)"}}/>
                        </clipPath>
                    </defs>
                    </svg>
                <div className="recordHolder" style={{'--album-size-percentage': `${album_size_percentage}%`, '--padding-offset': `${padding_percentage}%`} as React.CSSProperties}>
                    <Image 
                        className="record"
                        src="/music_thumbnails/record.svg" 
                        alt="record" 
                        width={600}
                        height={600}
                        sizes="(max-width: 768px) 80%, (max-width: 1200px) 33%, 25%"
                        />
                </div>
                
                <div className="description">
                    <h1>{album.name}</h1>
                    <h1>{album.artist}</h1>
                    <h1>{album.release_year}</h1>
                </div>
            </div>
        </div>
    )
}