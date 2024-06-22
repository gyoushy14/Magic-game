import "./Singlecard.css";
export default function Singlecard({card , handlechoice , flipped , disabled }){

  const handleclick = ()=>{

    if(!disabled){
      handlechoice(card)
    }
  }  
  return (
        <main className="m-auto relative">
            <div className={flipped ? "flipped" : ""}>
            <div className="m-1">
              <img  alt="Front of magic card" className=" absolute front" src={card.src} />
              <img src="imgs/coverfoot.jpg" className="rounded back border-white border-2" onClick={handleclick}  alt="Back of magic card" />
            </div>
          </div>
        </main>
    )
}
