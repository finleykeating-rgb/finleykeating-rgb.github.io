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
    return (<div className="signage">
        <div>
          <p>Album Title: </p>
          <h2>{name}</h2>
        </div>
        <div>
          <p>Artist(s): </p>
          <h2>{artist}</h2>
        </div>
        <div>
          <p>Release Year: </p>
          <h2>{release_year}</h2>
        </div> 
        <div>
            <h1>{create_3_letter()}</h1>
        </div>
        
    </div>)
}