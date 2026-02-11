export interface AwardContent {
    title: string
    content: string[]
    images: image[]
}

export interface image {
    location: string
    alt_text: string
    subtitle: string
    width: number
    height: number
}