import { transform } from "next/dist/build/swc/generated-native";
import Image from "next/image";
import { stringify } from "querystring";

export default function AlbumPreview({name, artist, release_year, thumbnail}: Album) {
    let index = 0
    index += 1;
    return (
        <div className="album">
            <Image className="thumbnail"
              src={thumbnail}
              width={800}
              height={800}
              alt={name}
              sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
              style={{clipPath: "url(#albumMask" + index.toString()}}
              />
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="366.7" height="400" fill="currentColor" viewBox="0 0 16 16" className="album-cover">
                <mask id={"albumMask" + index.toString()}>
                    <path d="M16 0h-5.551
                a2.7 2.7 0 0 1-.443 1.042
                C9.613 1.588 8.963 2 8 2
                s-1.613-.412-2.006-.958
                A2.7 2.7 0 0 1 5.551 0
                H0v6 1.5 1.5 0 0 0 1.5 16
                h13 1.5 1.5 0 0 0 1.5-1.5z"/>
                </mask>
            </svg> */}
            <svg width="0" height="0" style={{ position: "absolute" }}>
                <defs>
                    <clipPath id={"albumMask" + index.toString()} clipPathUnits="objectBoundingBox">
                    <path d="M1 0h-0.3469a0.1688 0.1688 0 0 1 -0.0277 0.0651C0.6008 0.0993 0.5602 0.125 0.5 0.125 s-0.1008 -0.0258 -0.1254 -0.0599A0.1688 0.1688 0 0 1 0.3469 0H0v1H1Z" style={{transform: "rotate(0.25turn) translateY(-1px)"}}/>
                    </clipPath>
                </defs>
                </svg>
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