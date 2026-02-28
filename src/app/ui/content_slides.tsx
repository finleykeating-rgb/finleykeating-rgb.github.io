
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import { useState, useCallback, useEffect } from "react"
import { Thumb } from "./EmblaCarousel/embla_thumbs_buttons"
import { content_content } from "../types/content"
import { parseMarkdownLinks } from "../helper/ai_helper"

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export const content_section = (content: content_content[]) => {
  const OPTIONS: EmblaOptionsType = {}
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(OPTIONS)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="content_slide_container">
        <div className="content-thumbs">
        <div className="content-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="content-thumbs__container">
            {content.map((data, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                image={data.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="content__viewport" ref={emblaMainRef}>
        <div className="content__container">
          {content.map((data, index) => (
                <div className="embla__slide" key={index}>
                <div className="slide__inner">
                    <h1 className="slide__title">{data.video_title}</h1>
                    <iframe
                    loading="lazy"
                    src={data.video_link}
                    className="slide__video"
                    />
                    <div className="slide__description">
                    {data.description.map((desc, index) => (
                        <p className="content-info" key={index}>{parseMarkdownLinks(desc)}</p>
                    ))}
                    </div>
                </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}