// src/pages/WhoIsHe.jsx
import "./WhoIsHe.css";
import paper2 from "../assets/whoishe/paper 2.png";
import profile1 from "../assets/whoishe/profile1.png";
import rectangle from "../assets/whoishe/Rectangle 1.png";
import paper1 from "../assets/whoishe/paper 1.png";
import tape from "../assets/whoishe/tape.png";
import star3 from "../assets/whoishe/Star 1.png";
import star4 from "../assets/whoishe/Star 2.png";
import vector3 from "../assets/whoishe/Vector 1.png";

import polarnozern from "../assets/whoishe/polarnozern 1.png";
import handsome1 from "../assets/whoishe/handsome1.png";
import handsome2 from "../assets/whoishe/handsome2.png";
import vector4 from "../assets/whoishe/Vector 4.png";
import blueback from "../assets/whoishe/blueback.png";

import profile3 from "../assets/whoishe/Profile3.png";
import m1 from "../assets/whoishe/m1.png";
import m2 from "../assets/whoishe/m2.png";
import m3 from "../assets/whoishe/m3.png";
import paperc1 from "../assets/whoishe/paperc1.png";
import paperc2 from "../assets/whoishe/paperc2.png";
import circlegy from "../assets/whoishe/circle gy.png";
import red from "../assets/whoishe/red.png";
import vector5 from "../assets/whoishe/Vector 5.png";
import star6 from "../assets/whoishe/Star 6.png";
import star5 from "../assets/whoishe/Star 5.png";
import joy from "../assets/whoishe/joy.png";

import basswhite from "../assets/whoishe/basswhite.png";
import bassblue from "../assets/whoishe/bassblue.png";
import bassb from "../assets/whoishe/bass b.png";
import bassa from "../assets/whoishe/bass a.png";
import basss1 from "../assets/whoishe/bass s1.png";
import basss2 from "../assets/whoishe/bass s2.png";
import profile2 from "../assets/whoishe/Profile2.png";



export default function WhoIsHe() {
  return (
    <div className="whoishe">
      <h2 className="title">Who Is Snozern?</h2>
      <img src={rectangle} alt="" className="rectangle" />
      <h1 className="sub1">
        Snozern (전승호)<br /><br />
        열네살부터<br />
        베이스와<br />
        사랑에빠진남자
      </h1>
      <h1 className="sub2">
        NMIXX, pH-1, g0nny 등<br />
        다양한 아티스트들과 협업중!
      </h1>
      <h1 className="sub3">nozern</h1>
      <h1 className="sub4">
        다양한 활동들로<br />
        베이스의 매력을<br />
        널리 알리는 중<br />
        ^_^
      </h1>
      <h1 className="sub5">JOY</h1>
      

      <div className="main1">
        <img src={paper2} alt="" className="paper2" />
        <img src={profile1} alt="profile image" className="profile1" />
        <img src={star3} alt="" className="star3" />
        <img src={star4} alt="" className="star4" />

        <div className="introduce">
          <img src={paper1} alt="" className="paper1" />
          <img src={tape} alt="" className="tape" />
        </div>

        <img src={vector3} alt="" className="vector3" />
      </div>


      <div className="main2">
        <img src={vector4} alt="" className="vector4" />
        <img src={polarnozern} alt="polarnozern" className="polarnozern" />
        <img src={handsome1} alt="handsome1" className="handsome1" />
        <img src={handsome2} alt="handsome1" className="handsome2" />
        <img src={blueback} alt="" className="blueback" />
      </div>


      <div className="main3">
        <img src={profile3} alt="" className="profile3" />
        <img src={m1} alt="" className="m1" />
        <img src={m2} alt="" className="m2" />
        <img src={m3} alt="" className="m3" />
        <img src={paperc1} alt="" className="paperc1" />
        <img src={paperc2} alt="" className="paperc2" />
        <img src={circlegy} alt="" className="circlegy" />
        <img src={joy} alt="" className="joy" />
        <img src={star5} alt="" className="star5" />
        <img src={star6} alt="" className="star6" />
        <img src={red} alt="" className="red" />
        <img src={vector5} alt="" className="vector5" />
      </div>


      <div className="main4">
        <img src={basswhite} alt="" className="basswhite" />
        <img src={bassblue} alt="" className="bassblue" />
        <img src={bassb} alt="" className="bassb" />
        <img src={bassa} alt="" className="bassa" />
        <img src={basss1} alt="" className="basss1" />
        <img src={basss2} alt="" className="basss2" />
        <img src={profile2} alt="" className="profile2" />
      </div>
    
    </div>
  );
}