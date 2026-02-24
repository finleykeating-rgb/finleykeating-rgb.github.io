
import NavBar from "./ui/nav-bar";
import main_page from "@public/music_descriptions/main_page.json";

interface pdf {
  link: string
  text: string
}

interface main {
  title: string
  subtitle: string
  website_overview: string
  cv: pdf
  disclaimer: string
}

export default function Home() {
  const main_content : main = main_page

  return (
    <div id="main-layout">
      <NavBar/>
      <main>
        <div className="main_page">
          <div>
            <div>
              <h1 className="main_title">
                {main_content.title}
              </h1>
              <h3 className="main_subtitle">
                {main_content.subtitle}
              </h3>
              <h2 className="main_overview">
                {main_content.website_overview}
              </h2>
              <a className="main_cv" 
                href={main_content.cv.link}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {main_content.cv.text}
              </a>
              <h3 className="main_disclaimer">
                {main_content.disclaimer}
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  
  );
}
