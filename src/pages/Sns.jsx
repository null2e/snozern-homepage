// src/pages/Sns.jsx
import "./Sns.css";

import paperc3 from "../assets/sns/paperc3.png";
import paperc4 from "../assets/sns/paperc4.png";
import paperc5 from "../assets/sns/paperc5.png";
import ellipse4 from "../assets/sns/Ellipse 4.png";
import ellipse5 from "../assets/sns/Ellipse 5.png";
import ellipse6 from "../assets/sns/Ellipse 6.png";
import back1 from "../assets/sns/back1.png";
import back2 from "../assets/sns/back2.png";
import vector6 from "../assets/sns/Vector 6.png";

import star7 from "../assets/sns/Star 7.png";
import instabackpaper from "../assets/sns/instabackpaper.png";
import instagram from "../assets/sns/instagram.png";
import reelback from "../assets/sns/reelback.png";
import flash from "../assets/sns/flash.png";
import onoff from "../assets/sns/onoff.png";
import dontdothat from "../assets/sns/dontdothat.png";
import eye1 from "../assets/sns/eye1.png";
import eye2 from "../assets/sns/eye2.png";

import youtubebackpaper from "../assets/sns/youtubebackpaper.png";
import youtube from "../assets/sns/youtube.png";
import star8 from "../assets/sns/Star 8.png"; 
import review from "../assets/sns/review.png";
import cover from "../assets/sns/cover.png";
import theather from "../assets/sns/theather.png";
import vlog from "../assets/sns/vlog.png";

import profile4 from "../assets/sns/profile 4.png";
import ballon from "../assets/sns/ballon.png";
import tape2 from "../assets/sns/tape2.png";
import tape3 from "../assets/sns/tape3.png";
import tw1 from "../assets/sns/tw1.png";
import tw2 from "../assets/sns/tw2.png";
import fire from "../assets/sns/fire.png";
import ostinato from "../assets/sns/ostinato.png";
import yet from "../assets/sns/yet.png";

export default function Sns() {
  return (
    <div className="sns">
      <h2 className="snstitle">SNS</h2>

      <div className="backgroundset">
        <img src={paperc3} alt="" className="paperc3" />
        <img src={ellipse4} alt="" className="ellipse4" />
        <img src={paperc4} alt="" className="paperc4" />
        <img src={vector6} alt="" className="vector6" />
        <img src={ellipse5} alt="" className="ellipse5" />
        <img src={paperc5} alt="" className="paperc5" />
        <img src={ellipse6} alt="" className="ellipse6" />
        <img src={back1} alt="" className="back1" />
        <img src={back2} alt="" className="back2" />
      </div>
    

      <div className="instaline">
        <img src={star7} alt="" className="star7" />
        <img src={instabackpaper} alt="" className="instabackpaper" />
        <a href="https://www.instagram.com/snozern/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="" className="instagram" />
        </a>
        <img src={reelback} alt="" className="reelback" />
        <a href="https://www.instagram.com/snozern/reel/DC_zHwHTH78/" target="_blank" rel="noopener noreferrer">
          <img src={flash} alt="" className="flash" />
        </a>
        <a href="https://www.instagram.com/snozern/reel/DLhwJYDBdC9/" target="_blank" rel="noopener noreferrer">
          <img src={onoff} alt="" className="onoff" />
        </a>
        <a href="https://www.instagram.com/snozern/reel/C_0dA7KyseF/" target="_blank" rel="noopener noreferrer">
          <img src={dontdothat} alt="" className="dontdothat" />
        </a>
        <img src={eye1} alt="" className="eye1" />
        <img src={eye2} alt="" className="eye2" />
        <h1 className="instaname">@snozern</h1>
        <h1 className="instasub">형의 일상 + 릴스 훔쳐보기</h1>
      </div>

      <div className="youtubeline">
        <img src={youtubebackpaper} alt="" className="youtubebackpaper" />
        <a href="https://www.youtube.com/@snozern/" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="" className="youtube" />
        </a>
        <img src={star8} alt="" className="star8" />
        <a href="https://youtu.be/8S0ObuY3gXk?si=FH-kO7yg6k6PPhvR" target="_blank" rel="noopener noreferrer">
          <img src={review} alt="" className="review" />
        </a>
        <a href="https://youtu.be/8IjD0LLlDkM?si=gOjnqCEk0nTUh-Ly" target="_blank" rel="noopener noreferrer">
          <img src={theather} alt="" className="theather" />
        </a>
        <a href="https://youtu.be/f33y10jj1PY?si=rXYXJZXhzT2F-JoL" target="_blank" rel="noopener noreferrer">
          <img src={cover} alt="" className="cover" />
        </a>
        <a href="https://youtu.be/5asfKWYuwXE?si=aG3Bchi1jmASWR2H" target="_blank" rel="noopener noreferrer">
          <img src={vlog} alt="" className="vlog" />
        </a>
        <h1 className="youtubename">Snozern | 스노전</h1>
        <h1 className="youtubesub">대유잼 콘텐츠 맛보기 가능</h1>
      </div>

      <div className="lnozern">
        <img src={profile4} alt="" className="profile4" />
        <img src={ballon} alt="" className="ballon" />
        <img src={tape2} alt="" className="tape2" />
        <img src={tape3} alt="" className="tape3" />
        <img src={tw1} alt="" className="tw1" />
        <img src={tw2} alt="" className="tw2" />
        <img src={fire} alt="" className="fire" />
        <img src={ostinato} alt="" className="ostinato" />
        <h1 className="hash">
          #스노전 #저점매수 <br />
          #지금당장 <br />
          #RIGHT #NOW
        </h1>
        <img src={yet} alt="" className="yet" />
      </div>
      <div className="spacer"></div>
    </div>
  );
}
