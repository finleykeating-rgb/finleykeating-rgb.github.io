'use client'
import Image from "next/image";
import useSound from "use-sound";
import convert from "color-convert";
import { useEffect, useState } from "react";


export default function AlbumPreview({name, artist, release_year, thumbnail, album_preview}: Album) {
    let index = 0
    index += 1;

    const [hex, setRandomColor] = useState("000000");

    useEffect(() => {
        let hue = Math.floor(Math.random() * 361); 

        let saturation = Math.floor(Math.random() * 31) + 50; 

        // Value (V) (or brightness) is a percentage from 0 to 100%
        let value = Math.floor(Math.random() * 31) + 50;
        
        let rgb = convert.hsv.rgb([hue, saturation, value])
        setRandomColor((rgb[0] * 256 * 256 + rgb[1] * 256 + rgb[2]).toString(16));
    }, []);
    
    

    const [play, {stop}] = useSound(album_preview, {volume: 0.3, playbackRate: 1})
    const [delayHandler, setDelayHandler] = useState<number | undefined>(undefined)

    const handleMouseEnter = () => {
        const newTimer = window.setTimeout(() => {play()}, 500)
        setDelayHandler(newTimer);
    }

    const handleMouseLeave = () => {
        clearTimeout(delayHandler)
        stop()
    }

  // Pad the hex string with leading zeros if it's less than 6 digits
    return (
        <div className="album" style={{'--random-background-color': `#${hex}`} as React.CSSProperties} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Image className="thumbnail"
              src={thumbnail}
              width={800}
              height={800}
              alt={name}
              sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
              style={{clipPath: "url(#albumMask" + index.toString()}}
              />
            <svg width="0" height="0" style={{ position: "absolute" }}>
                <defs>
                    <clipPath id={"albumMask" + index.toString()} clipPathUnits="objectBoundingBox">
                    <path d="M1 0h-0.3469a0.1688 0.1688 0 0 1 -0.0277 0.0651C0.6008 0.0993 0.5602 0.125 0.5 0.125 s-0.1008 -0.0258 -0.1254 -0.0599A0.1688 0.1688 0 0 1 0.3469 0H0v1H1Z" style={{transform: "rotate(0.25turn) translateY(-1px)"}}/>
                    </clipPath>
                </defs>
                </svg>
            <div className="recordHolder">
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
                <h1>{name}</h1>
                <h1>{artist}</h1>
                <h1>{release_year}</h1>
            </div>
            
            
        </div>
    )
}