"use client"
import NavBar from "../ui/nav-bar";
import Projects from "@public/music_descriptions/projects.json";
import { EmblaOptionsType } from "embla-carousel";
import { ProjectContent } from "../types/project_content";
import ProjectSection from "../ui/project_section";

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export default function projects() {
  
  const project_data: ProjectContent[] = Projects

  return (
    <div id="main-layout">
      <NavBar/>
      <main style={{height: "100vh"}}>
        <div className="award-page">
          {project_data.map((data) => {
            const OPTIONS: EmblaOptionsType = {}
            const SLIDE_COUNT = 5
            const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
            const props = { options: OPTIONS, slides: SLIDES }
            return (<ProjectSection key={data.title} title={data.title} quick_summary={data.quick_summary} content={data.content} images={data.images}/>)
          })}
         
        </div>
      </main>
    </div>
  );
}