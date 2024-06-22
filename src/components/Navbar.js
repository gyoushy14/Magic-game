import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className=" bg-slate-800 p-1 mt-1 flex justify-center gap-10 text-white">
        <div className="flex gap-2">
          <img src="imgs/MEMO2.png" className=" rounded-3xl w-20 h-20" />
          <p className="mt-3">
            M.Elgyuoshy <br /> MERN-Stack developer
          </p>
        </div>
        <div className="text-center text-3xl font-bold memo mt-3">Memory Game</div>
      </nav>
    </div>
  );
}
