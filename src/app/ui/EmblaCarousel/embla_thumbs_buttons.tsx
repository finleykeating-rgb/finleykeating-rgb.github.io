import { parseMarkdownLinks } from "../../helper/ai_helper"
import { image } from "../../types/award_content"
import Image from "next/image";

type PropType = {
  selected: boolean
  index: number
  onClick: () => void
  image: image
}

export const Thumb = (props: PropType) => {
  const { selected, index, onClick, image } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}>

      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number">
        <div>
            <Image src={image.location} width={image.width} height={image.height} alt={image.alt_text}/>
        </div>
        <p className="image-subtitle">{parseMarkdownLinks(image.subtitle)}</p>
      </button>
    </div>
  )
}
