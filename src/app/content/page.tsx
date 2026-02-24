"use client"
import NavBar from "../ui/nav-bar";
import { content_section } from "../ui/content_slides";
import { content_content } from "../types/content";
import Content from "@public/music_descriptions/content.json";

export default function content() {

  const content_data: content_content[] = Content
  
  return (
    <div id="main-layout">
      <NavBar/>
      <main style={{width: "100%", height: "100%"}}>
        <div style={{width: "100%", height: "100%"}}>
          {content_section(content_data)}
        </div>
      </main>
    </div>
  );
}