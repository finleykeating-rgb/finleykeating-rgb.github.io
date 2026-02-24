interface Album {
    name: string,
    artist: string,
    release_year: number,
    thumbnail: string,
    album_preview: string
}

type AlbumCallback = (Album: Album) => void;