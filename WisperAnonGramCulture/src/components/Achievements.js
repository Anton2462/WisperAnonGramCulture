import React, { useEffect, useState } from "react";
import { checkAchievements } from "../utils/storage";

const Achievements = ({ tapCount }) => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    setAchievements(checkAchievements(tapCount));
  }, [tapCount]);

  return (
    <div className="p-4 bg-white shadow-md rounded-xl w-full max-w-md">
      <h2 className="text-lg font-bold mb-2 text-center">🏅 Достижения</h2>
      <ul>
        {achievements.map((ach, index) => (
          <li key={index} className="text-md p-2 border-b">
            ✅ {ach}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
