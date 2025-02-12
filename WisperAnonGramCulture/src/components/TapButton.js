import React, { useState } from "react";
import { playTapSound } from "../utils/sounds";

const TapButton = ({ onTap }) => {
  const [tapCount, setTapCount] = useState(0);

  const handleTap = () => {
    setTapCount(tapCount + 1);
    onTap();
    playTapSound();
  };

  return (
    <button
      className="px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-lg hover:bg-blue-700 active:scale-95 transition-transform"
      onClick={handleTap}
    >
      🔥 Тапни! ({tapCount})
    </button>
  );
};

export default TapButton;
