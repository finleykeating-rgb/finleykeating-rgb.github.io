import NavBar from "../ui/nav-bar";
import Image from "next/image";
export default function awards() {
  return (
    <div id="main-layout">
      <NavBar/>
      <main>
        <div className="container">
          <h1>School Activities</h1>
          <div>
            <h1>When I was a young boy, my mother taught me how to play chess. 
                In my primary school I joined the chess club and competed as the second board on the school team. 
                The school teams was very successful, reaching nationals two years in a row. I even did one tournament at a chess club which was mostly against adults. 
                I enjoy the competition of chess. It is a simple battle of wits with no chance involved. 
                I still occasionally play to this day on <a style={{color: "blue"}} href={"https://lichess.org/@/AcidRainSSJ/perf/rapid"}>Lichess</a> but mostly puzzles.</h1>
            <div>
                <Image src={"/resources/chess_national_photo.png"} width={679} height={508} alt={"Chess National 2012"}/>
                <p>Playing chess in the park at the square in Parmeston North (Left to Right, Jonathan, James, Rocco, Finley), 2012</p>
            </div>
            <div>
                <Image src={"/resources/chess_standing.png"} width={679} height={407} alt={"Chess South Island 2013"}/>
                <p>Standing up to make a move at the South Islands, 2013</p>
            </div>
            <div>
                <Image src={"/resources/only_chess_tournament.png"} width={679} height={407} alt={"Chess South Island 2013"}/>
                <p>The <a style={{color: "blue"}} href={"https://newzealandchess.nz/2012/results2012.html"}>results</a> from my first and only official tournament, all adults except 4, 2012</p>
            </div>
            <div>
                <Image src={"/resources/chess_nationals_2012.png"} width={679} height={407} alt={"Chess Nationals 2012"}/>
                <p>The <a style={{color: "blue"}} href={"https://newzealandchess.nz/2012/results2012.html"}>results</a> from my first chess nationals. Playing for Waimairi, 2012</p>
            </div>
            <div>
                <Image src={"/resources/chess_nationals_2013.png"} width={679} height={407} alt={"Chess Nationals 2013"}/>
                <p>The <a style={{color: "blue"}} href={"https://newzealandchess.nz/2013/results2013.html"}>results</a> from my second chess nationals. Playing for Waimairi, 2013</p>
            </div>
          </div>
          <div>
            <h1>AIMS Scholarship </h1>
            <h1>https://scholarshipscanterbury.communityforce.com/Funds/FundDetails.aspx?496F49596D593768464E3537506B6F754D5442315A354B58664355313053303153314F5852446850507453696E756249564E346F2B583764686173553574787143706D657756356C3739633D</h1>
            <h1>https://www.canterbury.ac.nz/study/other-study-options/star-programme/star-courses/math198 Achieved</h1>
            <h1>Maths Single Subject Scholarship</h1>
          </div>
          <div>
            <h1>https://www.facebook.com/papanuihighschool/photos/a.163116223707570/1563107733708405/?type=3 got carried</h1>
            <h1>https://www.yumpu.com/en/document/view/62729802/norwest-news-july-09-2019</h1>
          </div>
          <div>
            <h1>Various Maths competitions</h1>
            <h1>Otago Maths Competition Distinction in 2015 https://www.maths.otago.ac.nz/pc/FCresults.php?y=2016</h1>
            <h1>Cantamath Winner in 2015, 3rd place in 2016, 2nd place in 2017, 3rd place in 2018, full points in all years. In the newspaper in 2015. https://www.cantamath.co.nz/teams-competition/2017-winners</h1>
            <h1>https://www.cantamath.co.nz/teams-competition/previous-winners</h1>
            <h1>https://natlib.govt.nz/records/36393195?search%5Bi%5D%5Bprimary_collection%5D=findNZarticles&search%5Bi%5D%5Bsubject_text%5D=Mathematics+--+Competitions&search%5Bpath%5D=items</h1>
            <h1>https://epro8challenge.co.nz/results.html First place in epro8</h1>
            <h1>https://hail.to/he-twai-mtauranga-heaton-normal-intermediate/publication/FfFX7lA/article/BhfWgoD australian math high distinction</h1>
            <h1>https://hail.to/he-twai-mtauranga-heaton-normal-intermediate/publication/Vg5VFod/article/93KYSUN icas high distinction</h1>
          </div>
          <div>
            <h1></h1>
            <h1>Completed level 1 maths in 2015</h1>
            <h1>Completed level 2 maths in 2017 (Calculus Courses missing for some reason???)</h1>
            <h1>Completed level 3 maths in 2020</h1>
          </div>
        </div>
      </main>
    </div>
  );
}