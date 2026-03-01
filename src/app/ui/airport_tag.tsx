import Image from "next/image";

export default function airportTag(name: string, artist: string, release_year: number) {
    const create_3_letter = () => {
        const remove_special: string[] = name.replace(/[^a-zA-Z0-9\s]/g, '').split(" ");
        const middle1 = Math.round((remove_special.length - 1) / 2)
        const middle2 = () => {
            if (remove_special.length === 1) {
                if (remove_special[0].length > 1)
                    return 1
            }
            return 0
        }
        return (remove_special[0][0] + remove_special[middle1][middle2()] + remove_special.at(-1)?.at(-1)).toUpperCase()
    }
    return (
    <div className="airport-tag">
        <div style={{
            gridColumn: 1, 
            gridRowStart: 2,
            gridRowEnd: 5,
            backgroundColor: "yellow", 
        }}>
        </div>
        <div style={{
            gridColumn: 3, 
            gridRowStart: 2,
            gridRowEnd: 5,
            backgroundColor: "yellow", 
        }}>
        </div>
        <div style={{
            gridColumnStart: 2, 
            gridRow: 2,
        }}>
          <p>Album Title: </p>
          <h2>{name}</h2>
        </div>
        <div style={{
            gridColumnStart: 2, 
            gridRow: 3,
            textAlign: "center",
            alignSelf: "center"
        }}>
            <h1>{create_3_letter()}</h1>
        </div>
        <div style={{
            gridColumnStart: 2, 
            gridRow: 4,
        }}>
          <p>Artist(s): </p>
          <h2>{artist}</h2>
        </div>
        <div style={{
            gridColumnStart: 2, 
            gridRow: 5,
        }}>
          <p>Release Year: </p>
          <h2>{release_year}</h2>
        </div> 
        <div style={{
            gridColumnStart: 2, 
            gridRow: 6,
        }}>
            <Image 
            src="/textures/barcode.png" 
            alt="barcode" 
            width={427}
            height={119}
            sizes="(max-width: 768px) 80%, (max-width: 1200px) 33%, 25%"
            />
        </div>
    </div>)
}