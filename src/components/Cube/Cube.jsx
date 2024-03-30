import React, { useState } from "react";

const Cube = ({ numOnDice, rollDice }) => {
  
  return (
    <div>
      <img src={`dice_${numOnDice}.svg`} alt="" onClick={rollDice} />
    </div>
  );
};

export default Cube;
