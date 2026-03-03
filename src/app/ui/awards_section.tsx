import useEmblaCarousel from "embla-carousel-react";
import { AwardContent, image } from "../types/award_content";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarousel/embla_dot_buttons";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarousel/embla_arrow_buttons";
import Image from "next/image"
import { parseMarkdownLinks } from "../helper/ai_helper";
import { useState } from "react";
import { GoBook } from "react-icons/go";

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

    const [showMore, setShowMore] = useState(false);

    const toggleMore = () => {
        setShowMore(!showMore)
    }

    return (
        <div className="award-section">
            <div style={{width: "fit-content", borderRight: showMore ? "1px solid grey" : "", paddingRight: showMore ? "2rem" : ""}}>
                <div>
                    <div style={{display: "flex", justifyContent: "space-between", paddingBottom: "1rem"}}>
                        <h1>{title}</h1>
                        <button className={`flex items-center gap-2`} onClick={toggleMore}>{showMore ? 'Collapse' : 'Read More'}<GoBook/></button>
                    </div>
                </div>
                <div className="dots_slide_container" style={{marginTop: "auto"}}>
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
            </div>
            
            {<div className="award-read-more" style={{
                maxHeight: showMore ? 'fit-content' : '0',
                maxWidth: showMore ? 'fit-content': '0',
                opacity: showMore ? 1 : 0,
                overflow: 'hidden',
                visibility: showMore ? 'visible' : 'hidden',
                transition: 'max-height 0.3s ease, max-width 0.3s ease, opacity 0.3s ease, visibility 0.3s ease'
            }}>
                    {content.map((data, index) => {
                        return (<h4 key={index}>{parseMarkdownLinks(data)}</h4>)
                    })}
            </div>}
        </div>)
}