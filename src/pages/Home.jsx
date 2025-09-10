// src/pages/Home.jsx
import "./Home.css";
import paperback from "../assets/main/paperback.png";
import nozern from "../assets/main/nozern.png";
import vector1 from "../assets/main/Vector 1.png";
import vector2 from "../assets/main/Vector 2.png";
import ellipse from "../assets/main/Ellipse 1.png";
import blockback from "../assets/main/blockback.png";

import lettere from "../assets/main/lettere.png";
import lettern from "../assets/main/lettern.png";
import lettern2 from "../assets/main/lettern2.png";
import lettero3 from "../assets/main/lettero3.png";
import letterr from "../assets/main/letterr.png";
import letters from "../assets/main/letters.png";
import letterz from "../assets/main/letterz.png";

import star1 from "../assets/main/Star 1.png";
import star2 from "../assets/main/Star 2.png";

export default function Home() {
  return (
    <div className="home">
        <h2 className="slogan">
            베이스의 <br />
            대중화를 <br />
            꿈꾸다.
        </h2>

        <div className="image-wrap">
            <img src={paperback} alt="paperback bakcground" className="paperback" />
            <img src={nozern} alt="nozern character" className="nozern" />
        </div>

        <div className="Vector">
            <img src={vector1} alt="vector line" className="vector1" />
            <img src={vector2} alt="vector line" className="vector2" />
        </div>

        <img src={ellipse} alt="ellipse circle" className="ellipse" />

        <img src={blockback} alt="blockback block" className="blockback" />

        <div className="Letter">
            <img src={lettere} alt="lettere letter" className="lettere" />
            <img src={lettern} alt="lettern letter" className="lettern" />
            <img src={lettern2} alt="lettern2 letter" className="lettern2" />
            <img src={lettero3} alt="lettero3 letter" className="lettero3" />
            <img src={letterr} alt="letterr letter" className="letterr" />
            <img src={letters} alt="letters letter" className="letters" />
            <img src={letterz} alt="letterz letter" className="letterz" />
        </div>

        <div className="Stars">
            <img src={star1} alt="star1 star" className="star1" />
            <img src={star2} alt="star2 star" className="star2" /> 
        </div>
    </div>
  );
}
