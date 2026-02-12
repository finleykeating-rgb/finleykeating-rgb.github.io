"use client"
import NavBar from "../ui/nav-bar";
import AwardSection from "../ui/awards_section";
import Award from "@public/music_descriptions/extra_curricular.json";
import { AwardContent } from "../types/award_content";
import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export default function awards() {
  
  const award_data: AwardContent[] = Award

  return (
    <div id="main-layout">
      <NavBar/>
      <main>
        <div className="award-page">
          {award_data.map((data) => {
            const OPTIONS: EmblaOptionsType = {}
            const SLIDE_COUNT = 5
            const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
            const props = { options: OPTIONS, slides: SLIDES }
            return (<AwardSection key={data.title} title={data.title} content={data.content} images={data.images}/>)
          })}
         
        </div>
      </main>
    </div>
  );
}