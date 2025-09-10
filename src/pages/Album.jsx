// src/pages/Album.jsx
import "./Album.css";

import album1 from "../assets/album/album1.png";
import album2 from "../assets/album/album2.png";
import album3 from "../assets/album/album3.png";
import album4 from "../assets/album/album4.png";
import album5 from "../assets/album/album5.png";
import album6 from "../assets/album/album6.png";
import album7 from "../assets/album/album7.png";
import album8 from "../assets/album/album8.png";
import album9 from "../assets/album/album9.png";

import bee1 from "../assets/album/Bee1.png";
import bee2 from "../assets/album/Bee2.png";
import bee3 from "../assets/album/Bee3.png";
import bee4 from "../assets/album/Bee4.png";

import nofence from "../assets/album/Nofence.png";
import donttry from "../assets/album/Donttry.png";
import stayby from "../assets/album/Stayby.png";
import one from "../assets/album/One.png";
import feelat from "../assets/album/Feelat.png";
import happye from "../assets/album/HappyE.png";
import breath from "../assets/album/Breath.png";
import justdoit from "../assets/album/JustDoIt.png";

import browntape from "../assets/album/BrownTape.png";
import melon from "../assets/album/Melon.png";
import applem from "../assets/album/AppleM.png";
import spotiy from "../assets/album/Spotiy.png";
import genie from "../assets/album/genie.png";

export default function Album() {
  return (
    <div className="album">
        <h2 className="albumtitle">Album</h2>

        <div className="NoFence">
            <img src={bee1} alt="" className="bee1" />
            <img src={album1} alt="" className="album1" />
            <a href="https://www.youtube.com/watch?v=3_1-zgtLoR8" target="_blank" rel="noopener noreferrer">
                <img src={nofence} alt="" className="nofence" />
            </a>
            <h1 className="album1title">No Fence</h1>
            <h1 className="album1sub">(Feat. The Semmy)</h1>
            <h1 className="album1date">2025.06.13</h1>
        </div>

        <div className="Donttry">
            <img src={album2} alt="" className="album2" />
            <a href="https://www.youtube.com/watch?v=1fhCdt7Tf78" target="_blank" rel="noopener noreferrer">
                <img src={donttry} alt="" className="donttry" />
            </a>
            <h1 className="album2title">Don't try<br />this at Home</h1>
            <h1 className="album2sub">(Feat. Lotionmoney)</h1>
            <h1 className="album2date">2024.08.01</h1>
        </div>

        <div className="StayBy">
            <img src={bee2} alt="" className="bee2" />
            <img src={album3} alt="" className="album3" />
            <a href="https://www.youtube.com/shorts/zf3H_mbsCfU" target="_blank" rel="noopener noreferrer">
                <img src={stayby} alt="" className="stayby" />
            </a>
            <h1 className="album3title">Stay By You</h1>
            <h1 className="album3date">2024.06.12</h1>
            
        </div>

        <div className="One">
            <img src={browntape} alt="" className="browntape" />
            <img src={album4} alt="" className="album4" />
            <a href="https://www.youtube.com/watch?v=EQbfaz8htMU" target="_blank" rel="noopener noreferrer">
                <img src={one} alt="" className="one" />
            </a>
            <h1 className="browntapetext">노전 PICK</h1>
            <h1 className="album4title">하나만 골라봐</h1>
            <h1 className="album4sub">(Feat. g0nny)</h1>
            <h1 className="album4date">2024.05.05</h1>
        </div>

        <div className="Feelat">
            <img src={bee3} alt="" className="bee3" />
            <img src={album5} alt="" className="album5" />
            <a href="https://www.youtube.com/watch?v=huRLTCNDDEM" target="_blank" rel="noopener noreferrer">
                <img src={feelat} alt="" className="feelat" />
            </a>
            <h1 className="album5title">Feel at Home</h1>
            <h1 className="album5date">2023.04.24</h1>
        </div>

        <div className="HappyE">
            <img src={album6} alt="" className="album6" />
            <a href="https://www.youtube.com/watch?v=LlgHaTQkHN8" target="_blank" rel="noopener noreferrer">
                <img src={happye} alt="" className="happye" />
            </a>
            <h1 className="album6title">Happy Ending</h1>
            <h1 className="album6date">2023.03.22</h1>
        </div>

        <div className="Breath">
            <img src={bee4} alt="" className="bee4" />
            <img src={album7} alt="" className="album7" />
            <a href="https://www.youtube.com/watch?v=niIYc2NxAt8" target="_blank" rel="noopener noreferrer">
                <img src={breath} alt="" className="breath" />
            </a>
            <h1 className="album7title">Breath</h1>
            <h1 className="album7date">2021.07.13</h1>
        </div>

        <div className="JustDoIt">
            <img src={album8} alt="" className="album8" />
            <a href="https://www.youtube.com/watch?v=f_Cs2X7bQbQ" target="_blank" rel="noopener noreferrer">
                <img src={justdoit} alt="" className="justdoit" />
            </a>
            <h1 className="album8title">Just do it</h1>
            <h1 className="album8date">2020.05.29</h1>
        </div>

        <div className="Application">
            <img src={album9} alt="" className="album9" />

            <a href="https://www.melon.com/artist/timeline.htm?artistId=2871648" target="_blank" rel="noopener noreferrer">
                <img src={melon} alt="" className="melon" />
            </a>
            <a href="https://music.apple.com/kr/artist/%EC%8A%A4%EB%85%B8%EC%A0%84/1515227517" target="_blank" rel="noopener noreferrer">
                <img src={applem} alt="" className="applem" />
            </a>
            <a href="https://open.spotify.com/artist/7M7ZaOEQQL2YdnyMxYZtVI" target="_blank" rel="noopener noreferrer">
                <img src={spotiy} alt="" className="spotiy" />
            </a>
            <a href="https://www.genie.co.kr/detail/artistInfo?xxnm=80846393" target="_blank" rel="noopener noreferrer">
                <img src={genie} alt="" className="genie" />
            </a>
            <div className="blank"></div>
        </div>

    </div>
  );
}