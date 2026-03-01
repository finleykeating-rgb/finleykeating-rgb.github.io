import { image } from "./award_content"

export interface ProjectContent {
    title: string
    quick_summary: quick_summary
    content: string[]
    images: image[]
}

interface quick_summary {
    is_ongoing: boolean
    technologies: string
    length: string
    concepts: string
} 