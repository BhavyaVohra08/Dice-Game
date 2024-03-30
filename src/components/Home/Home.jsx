import React from "react";
import dices from "/dices.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center gap-4 w-4/5 m-auto my-10 p-4">
      <div>
        <img src={dices} alt="" />
      </div>
      <div className="text-right">
        <p className="text-8xl font-bold">DICE GAME</p>
        <Link to="/play">
          <button className="bg-black text-white px-16 rounded-md py-2 my-3 font-semibold text-lg">
            Play Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
