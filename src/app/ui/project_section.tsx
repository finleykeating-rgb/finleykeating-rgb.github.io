import useEmblaCarousel from "embla-carousel-react";
import { image } from "../types/award_content";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarousel/embla_dot_buttons";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarousel/embla_arrow_buttons";
import Image from "next/image"
import { parseMarkdownLinks } from "../helper/ai_helper";
import { ProjectContent } from "../types/project_content";

export default function ProjectSection( {title, quick_summary, content, images}: ProjectContent) {
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
        <h1 style={{paddingBottom: "1rem"}}>{title}</h1>
        <div style={{flex: 1, overflowY: "auto"}}>
            
            <h2>{quick_summary.is_ongoing ? "This project is currently ongoing" : ""}</h2>
            
            <h2>Length: {quick_summary.length}</h2>
            <h2>Technologies: {quick_summary.technologies}</h2>
            <h2>Concepts: {quick_summary.concepts}</h2>
            {content.map((data, index) => {
                return (<h4 key={index}>{parseMarkdownLinks(data)}</h4>)
            })}
        </div>
        <div className="dots_slide_container" style={{marginTop: "auto", paddingTop: "1rem"}}>
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((data: image) => {
                        return (
                            <div key={data.alt_text} className="embla__slide">
                                <div>
                                    <Image src={data.location} width={data.width} height={data.height} alt={data.alt_text}/>
                                </div>
                                <p className="main-subtitle">{parseMarkdownLinks(data.subtitle)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={scrollSnaps.length > 1 ? "embla__controls" : "embla__controls hidden"}>
                <div className="embla__buttons">
                  <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                  <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                  {scrollSnaps.map((_, index) => (
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