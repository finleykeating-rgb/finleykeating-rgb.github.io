"use client"
import NavBar from "../ui/nav-bar";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "../ui/EmblaCarousel/embla_dot_buttons";
import { NextButton, PrevButton, usePrevNextButtons } from "../ui/EmblaCarousel/embla_arrow_buttons";

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}


export default function awards(props: PropType) {
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

  return (
    <div id="main-layout">
      <NavBar/>
      <main>
        <div className="container">
          <h1>School Activities</h1>

          
          
          
          <div className="chess-box">
            <div>
              <h1>Chess</h1>
              <h1>
              </h1>
            </div>
            <div className="embla" style={{width: "400px"}}>
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <div>
                      <Image src={"/resources/chess_national_photo.png"} width={679} height={508} alt={"Chess National 2012"}/>
                    </div>
                    
                    <p className="image-subtitle">Playing chess in the park at the square in Parmeston North, 2012</p>
                  </div>

                  <div className="embla__slide">
                    <div>
                      <Image src={"/resources/chess_standing.png"} width={679} height={407} alt={"Chess South Island 2013"}/>
                    </div>
                    <p className="image-subtitle">Standing up to make a move at the South Islands, 2013</p>
                  </div>

                  <div className="embla__slide">
                    <div>
                      <Image src={"/resources/only_chess_tournament.png"} width={679} height={407} alt={"Chess Tournament"}/>
                      </div>
                    <p className="image-subtitle">The <a style={{color: "blue"}} href={"https://newzealandchess.nz/2012/results2012.html"}>results</a> from my first and only official tournament 2012</p>
                  </div>

                  <div className="embla__slide">
                    <div>
                      <Image src={"/resources/chess_nationals_2012.png"} width={679} height={407} alt={"Chess Nationals 2012"}/>
                    </div>
                    <p className="image-subtitle">The <a style={{color: "blue"}} href={"https://newzealandchess.nz/2012/results2012.html"}>results</a> from my chess nationals. Playing for Waimairi, 2012</p>
                  </div>
                  <div className="embla__slide">
                    <div>
                      <Image src={"/resources/chess_nationals_2013.png"} width={679} height={407} alt={"Chess Nationals 2013"}/>
                    </div>
                    <p className="image-subtitle">The <a style={{color: "blue"}} href={"https://newzealandchess.nz/2013/results2013.html"}>results</a> from my chess nationals. Playing for Waimairi, 2013</p>
                  </div>

                </div>
              </div>

              <div className="embla__controls">
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
          
          <div>
            <h1>In school, I was quite successful in Mathematics. When I was in primary school, I was tested in year 5 and found to have the mathematic level of the average year 11. 
              I took level 1 maths in year 7 and achieve a merit endorsement. I took level 2 maths in year 9 and achieved a merit endorsement.
              I took level 3 maths in year 12 and achieved an excellence endorsement. 
              In year 13, I did the <a style={{color: "blue"}} href={"https://scholarshipscanterbury.communityforce.com/Funds/FundDetails.aspx?496F49596D593768464E3537506B6F754D5442315A354B58664355313053303153314F5852446850507453696E756249564E346F2B583764686173553574787143706D657756356C3739633D"}>
              MAT199 STAR course</a>, which is where student can do first year university math in high school. 
              I achieve an A+ in the course and from that got the AIMs scholarship. 
              I also did scholarship calculus in which I got a single subject award. 
              I did an number of mathematics competitions. 
              Cantamath is a team interschool competition for year 7-10s. I competed and finished top 3 with a perfect score for every year I competed. There was a <a style={{color: "blue"}} href={"https://natlib.govt.nz/records/36393195"}>newspaper article</a> when I won in year 7 because my school won both year 7 and 8. 
              I also took some written exams such as the <a style={{color: "blue"}} href={"https://hail.to/he-twai-mtauranga-heaton-normal-intermediate/publication/FfFX7lA/article/BhfWgoD"}>Australian Maths</a> and <a style={{color: "blue"}} href={"https://hail.to/he-twai-mtauranga-heaton-normal-intermediate/publication/Vg5VFod/article/93KYSUN"}>ICAS</a>, from which I achieved a high distinction and a distinction in <a style={{color: "blue"}} href={"https://www.maths.otago.ac.nz/pc/FCresults.php?y=2016"}>Otago Maths</a>. 
            </h1>
          </div>
          <div>
            <h1>I also took part in a number of competitions outside of mathematics.
              In high school I took Japanese language. I am quite interested in Japan as culture. I think that it has one of the most unique history and I took a paper on it in university. I did a Japanese trivia competition with a couple of my classmates. We got <a style={{color: "blue"}} href={"https://hail.to/he-twai-mtauranga-heaton-normal-intermediate/publication/Vg5VFod/article/93KYSUN"}>first prize</a> in Christchurch.</h1>
            <h1>Another competition I did was the Brain Bee. This was a unique opportunity from the university of Otago. Those who could pass a prelimanary test were offered the chance to have a trip down to Otago. 
              We got to stay at the musuem overnight and had guided tours around the musuem. We got to have a lecture one of the lecturer and competed in a team competition. We got first place and were even in the <a style={{color: "blue"}} href={"https://newzealandchess.nz/2013/results2013.html"}>local newspaper</a>.
            </h1>
            <h1>
              Another competition I took part in was the EPR8 challenge. This was a challenge where you would work in teams to solve engineering challenge in a time limit. We competed and got first <a style={{color: "blue"}} href={"https://epro8challenge.co.nz/results.html"}>first place</a>
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}