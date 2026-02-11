import useEmblaCarousel from "embla-carousel-react";
import { AwardContent, image } from "../types/award_content";
import { EmblaOptionsType } from "embla-carousel";
import { useDotButton } from "./EmblaCarousel/embla_dot_buttons";
import { usePrevNextButtons } from "./EmblaCarousel/embla_arrow_buttons";
import Image from "next/image"

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export default function AwardSection(props: PropType, {title, content, images}: AwardContent) {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return <div className="chess-box">
        <div>
            <h1>{title}</h1>
            {content.map((data) => {
                return (<h1>{data}</h1>)
            })}
        </div>
        <div className="embla" style={{width: "400px"}}>
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((data: image) => {
                        return (
                            <>
                            <div>
                                <Image src={data.location} width={data.width} height={data.height} alt={data.}/>
                            </div>
                            <p className="image-subtitle">{data.subtitle}</p>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>

    </div>
}