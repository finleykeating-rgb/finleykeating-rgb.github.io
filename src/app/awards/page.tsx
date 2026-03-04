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
      <main style={{width: "100%", overflowY: "scroll", maxHeight: "100vh"}}>
        <div style={{display: "flex", justifyContent: "center", padding: "2rem", fontSize: "2.5rem", borderBottom: "2px solid grey", marginBottom: "2rem"}}>
          <h1>Awards/Competitions</h1>
        </div>
        <div className="award-page">
          {award_data.map((data) => {
            return (<AwardSection key={data.title} title={data.title} content={data.content} images={data.images}/>)
          })}
         
        </div>
      </main>
    </div>
  );
}