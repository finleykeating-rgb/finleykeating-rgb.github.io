"use client"
import NavBar from "../ui/nav-bar";
import AwardSection from "../ui/awards_section";
import Award from "@public/music_descriptions/extra_curricular.json";
import { AwardContent } from "../types/award_content";

export default function awards() {
  
  const award_data: AwardContent[] = Award

  return (
    <div id="main-layout">
      <NavBar/>
      <main>
        <div className="award-page">
          {award_data.map((data) => {
            return (<AwardSection key={data.title} title={data.title} content={data.content} images={data.images}/>)
          })}
         
        </div>
      </main>
    </div>
  );
}