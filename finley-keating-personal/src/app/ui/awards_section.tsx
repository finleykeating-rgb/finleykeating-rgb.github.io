import useEmblaCarousel from "embla-carousel-react";
import { AwardContent, image } from "../types/award_content";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarousel/embla_dot_buttons";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarousel/embla_arrow_buttons";
import Image from "next/image"
import { parseMarkdownLinks } from "../helper/ai_helper";

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export default function AwardSection( {title, content, images}: AwardContent) {
    const OPTIONS: EmblaOptionsType = {}

    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (<div className="chess-box">
        <div>
            <h1>{title}</h1>
            {content.map((data, index) => {
                return (<p key={index}>{parseMarkdownLinks(data)}</p>)
            })}
        </div>
        <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((data: image) => {
                        return (
                            <div key={data.alt_text} className="embla__slide">
                                <div>
                                    <Image src={data.location} width={data.width} height={data.height} alt={data.alt_text}/>
                                </div>
                                <p className="image-subtitle">{parseMarkdownLinks(data.subtitle)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="embla__controls">
                <div className="embla__buttons">
                  <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                  <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                  {scrollSnaps.length > 1 && scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(
                        index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                    />
                    ))}
                </div>
              </div>
        </div>
    </div>)
}