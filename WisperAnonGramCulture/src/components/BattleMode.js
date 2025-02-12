import React, { useState } from "react";

const BattleMode = ({ startBattle }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-bold text-center">⚔ PvP Битва</h2>
      <button
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded-xl"
        onClick={startBattle}
      >
        Вызвать друга!
      </button>
    </div>
  );
};

export default BattleMode;
