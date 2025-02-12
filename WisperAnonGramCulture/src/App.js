import React, { useState, useRef } from "react";
import TapButton from "./components/TapButton";
import Leaderboard from "./components/Leaderboard";
import Shop from "./components/Shop";
import BattleMode from "./components/BattleMode";
import ShareButton from "./components/ShareButton";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Timer from "./components/Timer";
import FuryMode from "./components/FuryMode";
import { saveScore } from "./utils/storage";
import { startFuryMode } from "./utils/gameLogic";
import { playTapAnimation } from "./utils/animations";

const App = () => {
  const [tapCount, setTapCount] = useState(0);
  const [furyMode, setFuryMode] = useState(false);
  const [skin, setSkin] = useState("bg-blue-600");
  const buttonRef = useRef(null);

  const handleTap = () => {
    setTapCount(tapCount + 1);
    startFuryMode(tapCount, setFuryMode);
    playTapAnimation(buttonRef);
  };

  const handleGameOver = () => {
    saveScore("Игрок", tapCount);
    alert(`Игра окончена! Ваш результат: ${tapCount} тапов`);
    setTapCount(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        🔥 Тапалка WisperAnonGramCulture
      </h1>

      <FuryMode isActive={furyMode} />

      <TapButton ref={buttonRef} onTap={handleTap} skin={skin} />
      <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
        Тапов: {tapCount}
      </p>

      <Timer duration={30} onTimeUp={handleGameOver} />

      <div className="mt-4 flex gap-2">
        <Shop setSkin={setSkin} />
        <BattleMode startBattle={() => alert("Битва началась!")} />
      </div>

      <Leaderboard />
      <ShareButton />
      <ThemeSwitcher />
    </div>
  );
};

export default App;
