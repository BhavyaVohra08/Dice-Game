import React from "react";
import { useState } from "react";
import Numbers from "../Numbers/Numbers";
import Cube from "../Cube/Cube";
import Rules from '../Rules/Rules'

const Game = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6];
  const [numOnDice, setNumOnDice] = useState(1);
  const [warning, setWarning] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(-1);

  const resetScoreHandler = () => {
    setTotalScore(0);
    setNumOnDice(1);
  };

  const showRulesHandler = () => {
    setShowRules(!showRules);
  };

  const rollDice = () => {
    if (selectedNumber === -1) {
      setWarning(true);
      return;
    } 
    const num = Math.floor(Math.random() * 6 + 1);
    setNumOnDice(num);

    if (num === selectedNumber) {
      setTotalScore((prev) => prev + num);
    } else {
      setTotalScore((prev) => prev - num);
    }
    setSelectedNumber(-1);
  };

  return (
    <div className="p-4 flex flex-col items-center gap-16">
      <div className="flex justify-between w-4/5 m-auto">
        <div className="flex flex-col items-center gap-2">
          <p className="text-6xl">{totalScore}</p>
          <p className="text-2xl font-bold">Total Score</p>
        </div>
        <div>
          {warning ? (
            <p className="text-md my-2 font-semibold text-right text-red-600">
              You have not selected any number
            </p>
          ) : (
            ""
          )}
          <Numbers
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            setWarning={setWarning}
          />
          <p className="text-lg font-bold text-right my-2">Select Number</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Cube numOnDice={numOnDice} rollDice={rollDice} />
        <p className="text-lg font-medium my-1">Click on Dice to roll</p>
        <button
          className="border-2 hover:bg-black hover:text-white font-semibold py-1 px-8 border-black rounded-md my-2"
          onClick={resetScoreHandler}
        >
          Reset Score
        </button>
        <button
          className="py-1 hover:bg-white font-semibold border-2 border-black hover:text-black px-8 bg-black text-white rounded-md"
          onClick={showRulesHandler}
        >
          Show Rules
        </button>
        {showRules ? (
          <Rules />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Game;
