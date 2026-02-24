"use client"
import NavBar from "../ui/nav-bar";
import AwardSection from "../ui/awards_section";
import Projects from "@public/music_descriptions/projects.json";
import { AwardContent } from "../types/award_content";
import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export default function projects() {
  
  const project_data: AwardContent[] = Projects

  return (
    <div id="main-layout">
      <NavBar/>
      <main>
        <div className="award-page">
          {project_data.map((data) => {
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