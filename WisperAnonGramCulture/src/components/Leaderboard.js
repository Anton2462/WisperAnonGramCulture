import React, { useEffect, useState } from "react";
import { getLeaderboard } from "../utils/storage";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    setLeaders(getLeaderboard());
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-xl w-full max-w-md">
      <h2 className="text-lg font-bold mb-2 text-center">🏆 Лидерборд</h2>
      <ul>
        {leaders.map((player, index) => (
          <li key={index} className="text-md p-2 border-b">
            {index + 1}. {player.name} - {player.score} тапов
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
