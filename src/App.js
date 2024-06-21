import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Singlecard from "./components/Singlecard";
import Navbar from "./components/Navbar";
const images = [
  { src: "/imgs/Al_Ahly_SC_logo.svg", matched: false },
  { src : "/imgs/Chelsea-Logo.png" , matched : false },
  { src: "/imgs/barca.png", matched: false },
  { src: "imgs/Logo_of_AC_Milan.svg.png", matched: false },
  { src: "/imgs/Manchester_City_FC_badge.svg.png", matched: false },
  { src: "/imgs/MANU.png", matched: false },
  { src: "imgs/real.png", matched: false },
  { src: "imgs/FC_Bayern_München_logo_(2017).svg.png", matched: false },
  { src: "imgs/ZamalekSC.png", matched: false },
];

function App() {
  const [count1, setcount1] = useState(0);
  const [cards, setcards] = useState([]);
  const [turns, setturns] = useState(0);
  const [choiceone, setchoiceone] = useState(null);
  const [choicetwo, setchoicetwo] = useState(null);
  const [disabled, setdisabled] = useState(false);

  const shufllecards = () => {
    const shufllecards = [...images, ...images]
      .sort(() => Math.random() - 0.5) // هيرتب عشوائي و الرقم الهيطلع منه هيطرح منه نص
      .map((card) => ({ ...card, id: Math.random() }));
    setcards(shufllecards);
    setturns(0);
    setchoiceone(null);
    setchoicetwo(null);
    setcount1(0)
  };
  const handlechoice = (card) => {
    choiceone ? setchoicetwo(card) : setchoiceone(card);
  };

  useEffect(() => {
    if (choiceone && choicetwo) {
      setdisabled(true);
      if (choiceone.src === choicetwo.src) {
        setcount1(count1 + 1);
        setcards((prevcard) => {
          return prevcard.map((card) => {
            if (card.src === choiceone.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetturn();
      } else {
        console.log("dont match");
        setTimeout(() => resetturn(), 1000);
      }
    }
  }, [choiceone, choicetwo]);

  console.log(cards);
  const resetturn = () => {
    setchoiceone(null);
    setchoicetwo(null);
    setturns((prevturns) => prevturns + 1);
    setdisabled(false);
  };

  useEffect(() => {
    shufllecards();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="text-3xl font-bold flex justify-center mt-4">
        <button
          className=" border border-zinc-50 hover:bg-zinc-50 hover:text-slate-800 transition-all rounded p-1 mb-5 text-white"
          onClick={shufllecards}
        >
          New Game
        </button>
      </div>
      <p className="text-white text-center">
        Forgetfulness often stems from overthinking, distraction, or hereditary
        factors. To combat this, regular memory training is essential to prevent
        its worsening. This game was specifically designed to strengthen and
        improve memory. 🧠💪
      </p>
      <div className="flex justify-center gap-5">
      <div className="text-white m-4 font-bold">Score : {count1}</div>
      <p className="text-white text-center mt-4 font-bold">Turns : {turns}</p>
      </div>
      
      <div className="mt-10 grid grid-cols-4 m-auto">
        
        {cards.map((card) => (
          <Singlecard
            key={card.id}
            card={card}
            handlechoice={handlechoice}
            flipped={card === choiceone || card === choicetwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      
      

      <div className=" bg-slate-800 p-5 text-white mt-4 rounded-full">
        <div className="flex justify-center gap-4 mb-4">
          <a href="www.linkedin.com/in/mahmoud-elgyuoshy-6189552a6">Linkedin</a>
          <a href="https://www.facebook.com/profile.php?id=100050276316996&mibextid=ZbWKwL">
            Facebook
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-3">
          {" "}
          <p>+20 1030897704</p>
          <p>elgyuoshy@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
